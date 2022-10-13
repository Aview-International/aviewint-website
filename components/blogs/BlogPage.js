import SEO from '../SEO/SEO';
import Header from '../navigation/Header';
import BlogIntro from './BlogIntro';
import TableOfContents from './TableOfContents';
import BlogText from './BlogText';

import { BLOGS } from '../../constants/blogs';
import Footer from '../navigation/Footer';

const BlogPage = ({ idx }) => {
  return (
    <>
      <SEO
        title={`${BLOGS[idx].title} - AVIEW`}
        description={BLOGS[idx].description}
      />
      <Header curPage="Blog" />
      <div className="mx-s3 mt-s6 lg:mt-s8">
        <div className="mx-auto max-w-[820px]">
          <BlogIntro
            title={BLOGS[idx].title}
            img={BLOGS[idx].img}
            author={BLOGS[idx].author}
            authorImg={BLOGS[idx].authorImg}
            date={BLOGS[idx].date}
            length={BLOGS[idx].length}
          />
          <TableOfContents sections={BLOGS[idx].sections} />
          <BlogText sections={BLOGS[idx].sections} />
        </div>
      </div>
      <Footer curPage="Blog" />
    </>
  );
};

export default BlogPage;
