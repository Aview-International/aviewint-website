import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import { getDate, getDescription, getStories } from '../../utils/blog';
import { useState, useEffect } from 'react';
import Card from '../../components/UI/Card';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';

const Blog = ({ posts }) => {
  const [stories, setStories] = useState(posts);

  const fetchStories = async () => {
    try {
      const response = await getStories();
      setStories(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  return (
    <>
      <SEO title="Blog - AVIEW" />
      <Header curPage="Blog" />
      <section className="section m-horizontal">
        <h1 className="title mt-s8 mb-s6 text-center md:mt-s18 md:mb-s10">
          Enjoy our <span className="gradient-text gradient-2">Aview</span>
        </h1>
        <div className="grid grid-cols-1 gap-s3 md:grid-cols-2 lg:gap-s6 xl:gap-s10">
          {stories.map((story, i) => (
            <a
              href={story.link}
              target="_blank"
              key={story.pubDate}
              rel="noreferrer"
              className="w-full"
            >
              <Card borderRadius="2xl" fullWidth={true}>
                <div className="p-s3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={story.thumbnail}
                    alt={story.title}
                    className="mb-s6 w-full"
                  />
                  <p className="mb-s1 text-xl font-bold text-white">
                    {getDate(story.pubDate)}
                  </p>
                  <h2 className="mb-s1 text-4xl font-bold text-white">
                    {story.title}
                  </h2>
                  <p className="hidden text-lg text-white md:block">
                    {getDescription(story.description).slice(0, 200) + '...'}
                  </p>
                  <p className="text-lg text-white md:hidden">
                    {getDescription(story.description).slice(0, 140) + '...'}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>
      <Footer curPage="Blog" />
      <Blobs />
    </>
  );
};

export async function getStaticProps(context) {
  const res = await getStories();
  const posts = res.data.items;

  return {
    props: { posts },
    revalidate: 10,
  };
}

export default Blog;
