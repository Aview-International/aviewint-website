import Image from 'next/image';
import { useState } from 'react';
import Button from '../../UI/Button';
import howSubtitlesWorkS from '../../../public/img/graphics/corporate/how-subtitles-work-sm.svg';
import howSubtitlesWorkL from '../../../public/img/graphics/corporate/how-subtitles-work-lg.svg';
import howDubbingWorksL from '../../../public/img/graphics/corporate/how-dubbing-works-lg.svg';
import howDubbingWorksS from '../../../public/img/graphics/corporate/how-dubbing-works-sm.svg';

export default function HowItWorks() {
  const [process, setProcess] = useState('subtitles');

  return (
    <section className="section m-horizontal text-center">
      <h2 className="title mb-s2">
        How It <span className="gradient-text gradient-1">Works</span>
      </h2>
      <p className="body mb-s10">
        Have your content professionally translated.
      </p>
      <div className="mb-s4 lg:hidden">
        <Image
          src={process === 'subtitles' ? howSubtitlesWorkS : howDubbingWorksS}
          alt="How it works"
        />
      </div>
      <div className="mb-s4 hidden lg:block">
        <Image
          src={process === 'subtitles' ? howSubtitlesWorkL : howDubbingWorksL}
          alt="How it works"
        />
      </div>
      <div className="flex flex-row justify-center gap-s2">
        <Button
          type={process === 'subtitles' ? 'primary' : 'secondary'}
          purpose="onClick"
          onClick={setProcess.bind(null, 'subtitles')}
        >
          Subtitles
        </Button>
        <Button
          type={process === 'dubbing' ? 'primary' : 'secondary'}
          purpose="onClick"
          onClick={setProcess.bind(null, 'dubbing')}
        >
          Dubbing
        </Button>
      </div>
    </section>
  );
}
