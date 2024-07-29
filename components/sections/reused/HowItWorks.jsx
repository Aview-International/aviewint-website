import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import GlobalButton from '../../UI/GlobalButton';
import howSubtitlesWorksCreatorsL from '../../../public/img/graphics/corporate/how-subtitles-works-lg.svg';
import howSubtitlesWorksCreatorsS from '../../../public/img/graphics/corporate/how-subtitles-works-sm.svg';
import howDubbingWorksCreatorsL from '../../../public/img/graphics/corporate/how-dubbing-works-lg.svg';
import howDubbingWorksCreatorsS from '../../../public/img/graphics/corporate/how-dubbing-works-sm.svg';
import howSubtitlesWorksCorporateL from '../../../public/img/graphics/corporate/how-subtitles-works-lg.svg';
import howSubtitlesWorksCorporateS from '../../../public/img/graphics/corporate/how-subtitles-works-sm.svg';
import howDubbingWorksCorporateL from '../../../public/img/graphics/corporate/how-dubbing-works-lg.svg';
import howDubbingWorksCorporateS from '../../../public/img/graphics/corporate/how-dubbing-works-sm.svg';

export default function HowItWorks() {
  const router = useRouter();

  const path = router.pathname;

  let howSubtitlesWorkS;
  let howSubtitlesWorkL;
  let howDubbingWorksS;
  let howDubbingWorksL;

  if (path === '/creators') {
    howSubtitlesWorkS = howSubtitlesWorksCreatorsS;
    howSubtitlesWorkL = howSubtitlesWorksCreatorsL;
    howDubbingWorksS = howDubbingWorksCreatorsS;
    howDubbingWorksL = howDubbingWorksCreatorsL;
  } else {
    howSubtitlesWorkS = howSubtitlesWorksCorporateS;
    howSubtitlesWorkL = howSubtitlesWorksCorporateL;
    howDubbingWorksS = howDubbingWorksCorporateS;
    howDubbingWorksL = howDubbingWorksCorporateL;
  }

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
        <GlobalButton
          type={process === 'subtitles' ? 'primary' : 'secondary'}
          purpose="onClick"
          onClick={setProcess.bind(null, 'subtitles')}
        >
          Subtitles
        </GlobalButton>
        <GlobalButton
          type={process === 'dubbing' ? 'primary' : 'secondary'}
          purpose="onClick"
          onClick={setProcess.bind(null, 'dubbing')}
        >
          Dubbing
        </GlobalButton>
      </div>
    </section>
  );
}
