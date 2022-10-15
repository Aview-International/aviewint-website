import Image from 'next/image';

const BlogIntro = ({ title, img, author, authorImg, date, length }) => {
  return (
    <>
      <div className="mb-s3 md:mb-s5">
        <Image src={img} alt={title} layout="responsive" />
      </div>
      <h1 className="mb-s2 text-4xl font-bold leading-snug text-white md:mb-s4 md:text-8xl">
        {title}
      </h1>
      <div className="mb-s5 flex items-center gap-s2 md:mb-s10">
        <Image src={authorImg} alt="Elis" width={48} height={48} />
        <div>
          <p className="text-white md:text-lg">by {author}</p>
          <p className="text-sm text-white">
            {date} • {length} read
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogIntro;
