import Image from 'next/image';
import Link from 'next/link';
import arrowRight from '../../../public/img/icons/arrow-right.svg';

const LANGUAGES = [
  'English',
  'Urdu',
  'French',
  'Indonesian',
  'Hindi',
  'German',
  'Spanish',
  'Japanese',
  'Arabic',
  'Marathi',
  'Portuguese',
  'Telugu',
  'Bengali',
  'Russian',
];

export default function AvailableLanguages() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10">
        Available <span className="gradient-text gradient-2">Languages</span>
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {LANGUAGES.map((language) => (
          <Link href={`/languages/${language.toLowerCase()}`} key={language}>
            <a className="flex cursor-pointer items-center gap-6">
              <div className="h-6 w-6">
                <Image src={arrowRight} alt="arrow right" />
              </div>
              <p className="mt-1 text-lg text-white md:text-xl">{language}</p>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
