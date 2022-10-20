import Link from 'next/link';
import Image from 'next/image';

import Card from '../UI/Card';

const BlogRow = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 gap-s2.5 md:grid-cols-2 xl:grid-cols-3">
      {blogs.map((blog, i) => (
        <Link href={blog.link} key={`blog-${i}`}>
          <a>
            <Card borderRadius="2xl" fullWidth={true}>
              <div className="pb-s3">
                <div className="mb-s2 overflow-hidden rounded-t-2xl">
                  <Image
                    src={blog.img}
                    alt="Blog graphic"
                    layout="responsive"
                  />
                </div>
                <div className="px-s3">
                  <p className="mb-s1 text-xl font-bold text-white md:text-2xl">
                    {blog.date}
                  </p>
                  <h2 className="mb-s1 text-lg text-white md:text-xl">
                    {blog.title}
                  </h2>
                </div>
              </div>
            </Card>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default BlogRow;
