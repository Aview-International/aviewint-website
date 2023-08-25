import Link from 'next/link';
import Image from 'next/image';
import Card from '../UI/Card';
import { convertDate } from '../../utils/functions';

const BlogRow = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 gap-s2.5 md:grid-cols-2 xl:grid-cols-3">
      {blogs.map(
        (blog, i) =>
          blog.link && (
            <Link href={blog.link} key={`blog-${i}`}>
              <a>
                <Card borderRadius="2xl" fullWidth={true}>
                  <div className="pb-s3">
                    <div className="relative mb-s2 aspect-video overflow-hidden rounded-t-2xl">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        layout="responsive"
                        width="837"
                        height="558"
                      />
                    </div>
                    <div className="px-s3">
                      <p className="mb-s1 text-xl font-bold text-white md:text-2xl">
                        {convertDate(blog.date)}
                      </p>
                      <h2 className="mb-s1 text-lg text-white md:text-xl">
                        {blog.title}
                      </h2>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
          )
      )}
    </div>
  );
};

export default BlogRow;
