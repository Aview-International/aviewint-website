import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import BlogRow from '../../components/blogs/BlogRow';
import EasterEgg from '../../components/sections/reused/EasterEgg';

import { BLOGS } from '../../constants/blogs';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const Blog = () => {
  const reversedBlogs = [].concat(BLOGS).reverse();

  return (
    <>
      <SEO title="Blog - AVIEW" />
      <ProgressBar />
      <EasterEgg />
      <Header curPage="Blog" />
      <ScrollToTopButton />
      <section className="section m-horizontal">
        <h1 className="title mt-s6 mb-s4 text-center md:mt-s18 md:mb-s8">
          Enjoy our <span className="gradient-text gradient-2">Blogs.</span>
        </h1>
        <BlogRow blogs={reversedBlogs} />
      </section>
      <Footer curPage="Blog" />
      <Blobs />
    </>
  );
};

export default Blog;
