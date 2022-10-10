import SEO from '../../components/SEO/SEO';
import Header from '../../components/navigation/Header';
import BlogIntro from '../../components/blogs/BlogIntro';
import TableOfContents from '../../components/blogs/TableOfContents';
import BlogText from '../../components/blogs/BlogText';
import Footer from '../../components/navigation/Footer';

import { BLOGS } from '../../constants/blogs';

const Blog1 = () => {
  return (
    <>
      <SEO title={`${BLOGS[0].title} - AVIEW`} />
      <Header curPage="Blog" />
      <div className="mx-s3 mt-s6 lg:mt-s8">
        <div className="mx-auto max-w-[820px]">
          <BlogIntro
            title={BLOGS[0].title}
            img={BLOGS[0].img}
            author={BLOGS[0].author}
            authorImg={BLOGS[0].authorImg}
            date={BLOGS[0].date}
            length={BLOGS[0].length}
          />
          <TableOfContents sections={BLOGS[0].sections} />
          <BlogText sections={BLOGS[0].sections} />
        </div>
      </div>
      <Footer curPage="Blog" />
    </>
  );
};

export default Blog1;
