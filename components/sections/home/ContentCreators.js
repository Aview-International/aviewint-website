import Button from '../../UI/Button';
import { WORKED_WITH } from '../../../constants/constants';
import Image from 'next/image';
import Link from 'next/link';

const ContentCreators = () => {
  return (
    <section className="section m-horizontal text-center" data-aos="zoom-in">
      <h2 className="title mb-s4 text-left md:mb-s10 md:text-center">
        <span className="gradient-text gradient-2">Content Creators</span>{' '}
        We&apos;ve Worked With
      </h2>
      <div className="mx-auto mb-s4 grid max-w-[400px] grid-cols-2 gap-s5 md:mb-s10 md:max-w-[820px] md:grid-cols-3 md:gap-x-s22 md:gap-y-s5">
        {WORKED_WITH.map((creator) => (
          <Link key={creator.id} href={creator.link}>
            <a className="group">
              <Image
                src={creator.icon}
                alt={creator.name}
                className="overflow-hidden rounded-full"
              />
              <p className="group-hover:gradient-text group-hover:gradient-2 mt-s2 text-lg text-white group-hover:inline-block md:text-xl">
                {creator.name}
              </p>
            </a>
          </Link>
        ))}
      </div>
      <Button type="primary" purpose="route" route="/#generate-aview">
        Become a Creator
      </Button>
    </section>
  );
};

export default ContentCreators;
