import { TRANSLATED_CONTENT } from '../../../constants/constants';
import Border from '../../UI/Border';
import Shadow from '../../UI/Shadow';

const TranslatedContent = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 md:mb-s10 md:text-center">
        Our Translated <span className="gradient-text gradient-2">Content</span>
      </h2>
      <div className="grid grid-cols-1 gap-s4 lg:grid-cols-2 xl:gap-s10">
        {TRANSLATED_CONTENT.map((video) => (
          <Shadow key={video.id} classes="w-full">
            <Border classes="w-full" borderRadius="2xl">
              <iframe
                className="aspect-video w-full rounded-2xl"
                src={video.link}
              ></iframe>
            </Border>
          </Shadow>
        ))}
      </div>
    </section>
  );
};

export default TranslatedContent;
