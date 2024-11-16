import Image from 'next/image';
import { convertDate } from '../../../utils/functions';
import GlobalButton from '../../UI/GlobalButton';
import Link from 'next/link';

const BlogSection = ({ blogs }) => {
  return (
    <section className="m-horizontal section text-white">
      <h2 className="mb-s4 text-center text-5xl font-bold lg:text-7xl">
        More From Aview
      </h2>
      <p className="mx-auto mb-s6 mt-s1 w-11/12 text-center font-extralight leading-none md:mt-s2 lg:w-1/2">
        Read more about our research into digital marketing , AI voice
        translation and dubbing. And best practices into being a digital content
        creator
      </p>
      <div className="mx-auto mb-s10 mt-s4 w-full text-center">
        <GlobalButton purpose="route" route="/blog" type="secondary">
          View All Articles
        </GlobalButton>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {blogs.map((b, i) => (
          <Link href={b.link} key={i}>
            <a className="mx-s3 mb-s4 max-w-[360px]">
              <Image
                src={b.image}
                alt={b.title}
                width={360}
                height={266}
                className="rounded-2xl"
              />
              <p className="my-s1 text-base font-light">
                {convertDate(b.date)}
              </p>
              <h2 className="mt-s1 text-xl text-white">{b.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
