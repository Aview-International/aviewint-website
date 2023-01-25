import Image from 'next/image';
import Button from '../../UI/Button';
import Card from '../../UI/Card';
import english from '../../../public/img/graphics/corporate/english.png';
import french from '../../../public/img/graphics/corporate/french.png';
import hindi from '../../../public/img/graphics/corporate/hindi.png';
import spanish from '../../../public/img/graphics/corporate/spanish.png';
import arabic from '../../../public/img/graphics/corporate/arabic.png';
import portuguese from '../../../public/img/graphics/corporate/portuguese.png';
import bengali from '../../../public/img/graphics/corporate/bengali.png';
import russian from '../../../public/img/graphics/corporate/russian.png';
import urdu from '../../../public/img/graphics/corporate/urdu.png';
import indonesian from '../../../public/img/graphics/corporate/indonesian.png';
import german from '../../../public/img/graphics/corporate/german.png';
import japanese from '../../../public/img/graphics/corporate/japanese.png';
import marthi from '../../../public/img/graphics/corporate/marthi.png';
import teluga from '../../../public/img/graphics/corporate/teluga.png';

const MOST_POPULAR = [
  { language: 'English', icon: english },
  { language: 'French', icon: french },
  { language: 'Hindi', icon: hindi },
  { language: 'Spanish', icon: spanish },
  { language: 'Arabic', icon: arabic },
];

const ALSO_AVAILABLE = [
  { language: 'Portuguese', icon: portuguese },
  { language: 'Bengali', icon: bengali },
  { language: 'Russian', icon: russian },
  { language: 'Urdu', icon: urdu },
  { language: 'Indonesian', icon: indonesian },
  { language: 'German', icon: german },
  { language: 'Japanese', icon: japanese },
  { language: 'Marthi', icon: marthi },
  { language: 'Telugu', icon: teluga },
];

const LanguagesServed = () => {
  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s2 text-center">
        Languages <span className="gradient-text gradient-2">Served</span>
      </h2>
      <p className="body mx-auto mb-s4 max-w-[1080px] text-left md:mb-s10 md:text-center">
        Our team of certified translators provide services in over 15 languages.
        Don&apos;t see the one you need? The team is constantly growing with new
        languages being added to our library.
      </p>
      <p className="mb-s2 text-5xl font-bold text-white">Most Popular</p>
      <div className="mb-s4 md:mb-s8">
        <LanguagesGrid>
          {MOST_POPULAR.map((language) => (
            <LanguageCard
              key={language.id}
              language={language.language}
              icon={language.icon}
            />
          ))}
        </LanguagesGrid>
        <p className="mt-s4 mb-s2 text-5xl font-bold text-white md:mt-s8">
          Also Available
        </p>
        <LanguagesGrid>
          {ALSO_AVAILABLE.map((language) => (
            <LanguageCard
              key={language.id}
              language={language.language}
              icon={language.icon}
            />
          ))}
        </LanguagesGrid>
      </div>
      <Button type="primary" purpose="route" route="#generate-aview">
        Get a Quote
      </Button>
    </section>
  );
};

const LanguagesGrid = ({ children }) => {
  return (
    <div className="mx-auto flex max-w-[250px] flex-row flex-wrap justify-center gap-x-[6%] gap-y-s2 sm:max-w-[600px] sm:gap-x-[5%] lg:max-w-[1024px] lg:gap-x-[2%]">
      {children}
    </div>
  );
};

const LanguageCard = ({ language, icon }) => {
  return (
    <div className="w-[47%] sm:w-[30%] lg:w-[18%]">
      <Card borderRadius="md">
        <div className="grid place-content-center">
          <div className="flex items-center gap-s1.5 py-s1">
            <div className="-mb-1 hidden w-s4 sm:block">
              <Image src={icon} alt={language} />
            </div>
            <p className="body text-white">{language}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LanguagesServed;
