import { getBlogPreviews } from '../../lib/notion';
import GlobalButton from '../../components/UI/GlobalButton';
import Link from 'next/link';

const BlogSection = ({ blogs }) => {
  console.log(blogs);
  return (
    <section className="m-horizontal section text-white">
      <h2 className="mx-auto mb-s6 w-5/6 text-center text-5xl font-bold leading-none lg:w-3/4 lg:text-[48px]">
        More From Aview
      </h2>
      <p className="mb-s6 mt-s2 text-center font-extralight">
        Read more about our research into digital marketing , AI voice
        translation and dubbing. and best practices into being a digital content
        creator
      </p>
      <div className="flex flex-col gap-y-6">
        <GlobalButton purpose="route" route="/blog" type="primary">
          View All Articles
        </GlobalButton>
        {/* <div className="gird grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map(
            (b,
            (index) => {
              return (
                <Link href={b.link} key={`blog-${index}`}>
                  <a>
                    <div className="pb-s2">
                      <Image
                        src={b.image}
                        alt={b.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="mb-s1 text-xl font-bold text-white md:text-2xl">
                      {convertDate(b.date)}
                    </p>
                    <h2 className="mb-s1 text-lg text-white md:text-xl">
                      {b.title}
                    </h2>
                  </a>
                </Link>
              );
            })
          )}
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;

export async function getStaticProps() {
  const blogs = await getBlogPreviews();

  blogs.sort((blog1, blog2) => {
    if (blog1.date > blog2.date) {
      return -1;
    } else if (blog1.date < blog2.date) {
      return 1;
    } else {
      return 0;
    }
  });

  return {
    props: {
      blogs: JSON.parse(JSON.stringify(blogs)),
    },
    revalidate: 1,
  };
}

