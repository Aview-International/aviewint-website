import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import BlogRow from '../../components/blogs/BlogRow';
import EasterEgg from '../../components/sections/reused/EasterEgg';
import { getBlogPreviews } from '../../lib/notion';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const Blogs = ({ blogs }) => {
  return (
    <>
      <SEO title="Blog - AVIEW" />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Blog" />
      <ScrollToTopButton />
      <section className="section m-horizontal">
        <h1 className="title mb-s4 mt-s6 text-center md:mb-s8 md:mt-s18">
          Enjoy our <span className="gradient-text gradient-2">Blogs.</span>
        </h1>
        <BlogRow blogs={blogs} />
      </section>
      <Footer curPage="Blog" />
      <Blobs />
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const blogs = await getBlogPreviews();

  blogs.sort((blog1, blog2) => {
    if (blog1.date > blog2.date) {
      return -1;
    } else if (blog1.date < blog2.date) {
      return 1;
    } else {
      return 0;
    }
  });

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
    revalidate: 1,
  };
}
