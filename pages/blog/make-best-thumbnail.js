import SEO from '../../components/SEO/SEO';
import Header from '../../components/navigation/Header';
import BlogIntro from '../../components/blogs/BlogIntro';
import TableOfContents from '../../components/blogs/TableOfContents';
import BlogText from '../../components/blogs/BlogText';
import Footer from '../../components/navigation/Footer';

import { BLOGS } from '../../constants/blogs';

const Blog2 = () => {
  return (
    <>
      <SEO title={`${BLOGS[1].title} - AVIEW`} />
      <Header curPage="Blog" />
      <div className="mx-s3 mt-s6 lg:mt-s8">
        <div className="mx-auto max-w-[820px]">
          <BlogIntro
            title={BLOGS[1].title}
            img={BLOGS[1].img}
            author={BLOGS[1].author}
            authorImg={BLOGS[1].authorImg}
            date={BLOGS[1].date}
            length={BLOGS[1].length}
          />
          <TableOfContents sections={BLOGS[1].sections} />
          <BlogText sections={BLOGS[1].sections} />
        </div>
      </div>
      <Footer curPage="Blog" />
    </>
  );
};

export default Blog2;
