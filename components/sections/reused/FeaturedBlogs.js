import BlogRow from '../../blogs/BlogRow';

import { BLOGS } from '../../../constants/blogs';
import Button from '../../UI/Button';

export default function FeaturedBlogs() {
  const featuredBlogs = BLOGS.slice(BLOGS.length - 3).reverse();

  return (
    <section className="section m-horizontal">
      <h1 className="title mt-s6 mb-s4 md:mt-s18 md:mb-s8 md:text-center">
        Our Featured <span className="gradient-text gradient-2">Blogs</span>
      </h1>
      <BlogRow blogs={featuredBlogs} />
      <div className="mt-s6 text-center">
        <Button type="primary" purpose="route" route="/blog">
          See More
        </Button>
      </div>
    </section>
  );
}
