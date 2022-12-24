import Header from '../navigation/Header';
import Landing from '../sections/creator-landing/Landing';
import Description from '../sections/creator-landing/Description';
import Videos from '../sections/creator-landing/Videos';
import About from '../sections/creator-landing/About';
import UpToDate from '../sections/creator-landing/UpToDate';
import Fans from '../sections/creator-landing/Fans';
import Socials from '../sections/creator-landing/Socials';
import Trademark from '../sections/creator-landing/Trademark';
import Footer from '../navigation/Footer';
import { CREATORS } from '../../constants/creators';

export default function CreatorPage({ name }) {
  const { landing, description, videos, about, upToDate, fans, socials } =
    CREATORS[name];

  return (
    <>
      <Header curPage="Creators" />
      {landing && (
        <Landing
          title={landing.title}
          description={landing.description}
          buttons={landing.buttons}
          image={landing.image}
        />
      )}
      {description && (
        <Description
          title={description.title}
          description={description.description}
          buttons={description.buttons}
          image={description.image}
        />
      )}
      {videos && (
        <Videos
          title={videos.title}
          description={videos.description}
          videos={videos.videos}
        />
      )}
      {about && (
        <About
          title={about.title}
          description={about.description}
          image={about.image}
        />
      )}
      {upToDate && (
        <UpToDate
          title={upToDate.title}
          description={upToDate.description}
          buttons={upToDate.buttons}
        />
      )}
      {fans && <Fans title={fans.title} fans={fans.fans} />}
      {socials && <Socials title={socials.title} buttons={socials.buttons} />}
      <Trademark />
      <Footer curPage="Creators" />
    </>
  );
}
