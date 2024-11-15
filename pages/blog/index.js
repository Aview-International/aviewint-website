import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import BlogRow from '../../components/blogs/BlogRow';
import { getBlogPreviews } from '../../lib/notion';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const Blogs = ({ blogs }) => {
  return (
    <>
      <SEO title="Blog - AVIEW" />
      <ProgressBar />
      <Header curPage="Blog" />
      <ScrollToTopButton />
      <section className="section m-horizontal">
        <h1 className="title mb-s4 mt-s6 text-center md:mb-s8 md:mt-s18">
          Enjoy our <span className="gradient-text gradient-2">Blogs</span>
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

  let validData = blogs
    .filter((item) => !isNaN(new Date(item.date)))
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(validData)),
    },
    revalidate: 1,
  };
}
