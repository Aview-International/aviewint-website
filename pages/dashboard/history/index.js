import { Fragment } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';

const PLACEHOLDER_HISTORY = [
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
  {
    title: 'KSI Left Prime',
    date: '3/24/23',
    service: ['Translation', 'Dubbing', 'Distribution', 'Subtitling'],
    link: [
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
      'https://www.youtube.com/',
    ],
  },
];

const History = () => {
  return (
    <>
      <PageTitle title="History" />
      <div className="mx-auto flex h-[80vh] max-w-[1200px] flex-col">
        <h2 className="mb-4 px-6 text-left text-4xl font-bold text-white">
          History
        </h2>
        <div className="max-h-full flex-grow overflow-y-scroll rounded-xl bg-white-transparent p-6">
          <div className="mb-4 grid grid-cols-[2fr_1fr_1fr_2fr]">
            <p className="text-xl text-white">Name</p>
            <p className="text-xl text-white">Date</p>
            <p className="text-xl text-white">Service</p>
            <p className="text-xl text-white">Link</p>
          </div>
          <hr className="border-t-1 mb-4 border-white opacity-60" />
          <div>
            {PLACEHOLDER_HISTORY.map((history, i) => (
              <Fragment key={i}>
                <div className="grid grid-cols-[2fr_1fr_1fr_2fr]">
                  <p className="text-lg text-white">{history.title}</p>
                  <p className="text-lg text-white">{history.date}</p>
                  <div className="grid gap-2">
                    {history.service.map((service, i) => (
                      <p className="text-lg text-white" key={i}>
                        {service}
                      </p>
                    ))}
                  </div>
                  <div className="grid gap-2">
                    {history.link.map((link, i) => (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-blue underline"
                        key={i}
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
                {i !== PLACEHOLDER_HISTORY.length - 1 ? (
                  <hr className="border-t-1 my-6 border-white opacity-30" />
                ) : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

History.getLayout = DashboardLayout;

export default History;
