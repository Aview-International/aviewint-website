import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import BlogRow from '../../components/blogs/BlogRow';
import EasterEgg from '../../components/sections/reused/EasterEgg';

import { getBlogPreviews } from '../../lib/notion';

const Blogs = ({ blogs }) => {
  return (
    <>
      <SEO title="Blog - AVIEW" />
      <EasterEgg />
      <Header curPage="Blog" />
      <section className="section m-horizontal">
        <h1 className="title mt-s6 mb-s4 text-center md:mt-s18 md:mb-s8">
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

  return {
    props: {
      blogs: blogs,
    },
    revalidate: 1,
  };
}
