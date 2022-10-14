import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import BlogRow from '../../components/blogs/BlogRow';

import { BLOGS } from '../../constants/blogs';

const Blog = () => {
  const reversedBlogs = [].concat(BLOGS).reverse();

  return (
    <>
      <SEO title="Blog - AVIEW" />
      <Header curPage="Blog" />
      <section className="section m-horizontal">
        <h1 className="title mt-s8 mb-s6 text-center md:mt-s18 md:mb-s10">
          Enjoy our <span className="gradient-text gradient-2">Blogs</span>
        </h1>
        <BlogRow blogs={reversedBlogs} />
      </section>
      <Footer curPage="Blog" />
      <Blobs />
    </>
  );
};

export default Blog;
