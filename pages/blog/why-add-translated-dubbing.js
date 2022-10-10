import SEO from '../../components/SEO/SEO';
import Header from '../../components/navigation/Header';
import BlogIntro from '../../components/blogs/BlogIntro';
import TableOfContents from '../../components/blogs/TableOfContents';
import BlogText from '../../components/blogs/BlogText';
import Footer from '../../components/navigation/Footer';

import { BLOGS } from '../../constants/blogs';

const Blog4 = () => {
  return (
    <>
      <SEO title={`${BLOGS[3].title} - AVIEW`} />
      <Header curPage="Blog" />
      <div className="mx-s3 mt-s6 lg:mt-s8">
        <div className="mx-auto max-w-[820px]">
          <BlogIntro
            title={BLOGS[3].title}
            img={BLOGS[3].img}
            author={BLOGS[3].author}
            authorImg={BLOGS[3].authorImg}
            date={BLOGS[3].date}
            length={BLOGS[3].length}
          />
          <TableOfContents sections={BLOGS[3].sections} />
          <BlogText sections={BLOGS[3].sections} />
        </div>
      </div>
      <Footer curPage="Blog" />
    </>
  );
};

export default Blog4;
