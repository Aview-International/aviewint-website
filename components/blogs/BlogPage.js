import SEO from '../SEO/SEO';
import Header from '../navigation/Header';
import BlogIntro from './BlogIntro';
import TableOfContents from './TableOfContents';
import BlogContent from './BlogContent';
import Footer from '../navigation/Footer';
import { BLOGS } from '../../constants/blogs';
import ProgressBar from '../UI/ProgressBar';

const BlogPage = ({ idx }) => {
  return (
    <>
      <SEO
        title={`${BLOGS[idx].title} - AVIEW`}
        description={BLOGS[idx].description}
        image={BLOGS[idx].img}
      />
      <Header curPage="Blog" />
      <ProgressBar />
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
          <BlogContent sections={BLOGS[idx].sections} />
        </div>
      </div>
      <Footer curPage="Blog" />
    </>
  );
};

export default BlogPage;
