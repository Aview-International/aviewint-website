import SEO from '../../components/SEO/SEO';
import Header from '../../components/navigation/Header';
import BlogIntro from '../../components/blogs/BlogIntro';
import BlogBlock from '../../components/blogs/BlogBlock';
import { getPageId, getLanding, getBlocks, getPaths } from '../../lib/notion';
import { convertDate } from '../../utils/functions';
import elisIcon from '../../public/img/blogs/elis.png';

export default function Blog({ landing, blocks }) {
  return (
    <>
      <SEO
        title={landing.title}
        description={landing.description}
        image={landing.image}
      />
      <Header curPage="Blog" />
      <div className="mx-s3 mt-s6 lg:mt-s8">
        <div className="mx-auto max-w-[820px]">
          <BlogIntro
            title={landing.title}
            img={landing.image}
            author="Elis Hayakawa"
            authorImg={elisIcon}
            date={convertDate(landing.date)}
            length="3 minute"
          />
          <div className="mb-s10 md:mb-s20">
            {blocks.map((block) => (
              <BlogBlock block={block} key={block.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const pageID = await getPageId(id);

  const landing = await getLanding(pageID);
  const blocks = await getBlocks(pageID);

  return {
    props: {
      landing: landing,
      blocks: blocks,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = await getPaths();
  const filteredPaths = paths.filter((path) => path.params.id);

  return {
    paths: filteredPaths,
    fallback: false,
  };
}
