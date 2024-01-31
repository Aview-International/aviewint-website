import { useState } from 'react';
import dashboard from '../../public/img/creators/dashboard.png';
import Image from 'next/image';
import CheckBox from '../FormComponents/CheckBox';

const PENDING_VIDEOS = [
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['French', 'Hindi', 'Spanish'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['French'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['French', 'Hindi', 'Hindi', 'Spanish'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['French', 'Hindi', 'Spanish', 'Hindi', 'Spanish'],
  },
];

const COMPLETED_VIDEOS = [
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd j',
    languagesArray: ['French', 'Hindi', 'Spanish'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd ji',
    languagesArray: ['French'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jid',
    languagesArray: ['French', 'Hindi', 'Hindi', 'Spanish'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jide',
    languagesArray: ['French', 'Hindi', 'Hindi'],
  },
];

const RECOMENDED_VIDEOS = [
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['French', 'Hin', 'Spanish'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['Fren'],
  },
  {
    pic: dashboard,
    title: 'lorem epsum nnkndknskndknscna jkdnknadn jdiiadiamdimaimd jidj',
    languagesArray: ['French', 'Hindi', 'Spani'],
  },
];

const RecommendVideos = () => {
  const [activeComponent, setActiveComponent] = useState('Pending');
  const [selectVideosLength, setSelectVideosLength] = useState(0);

  return (
    <div className="mt-s3 flex h-full w-full gap-x-8">
      <div className="gradient-dark w-full basis-1/2 rounded-2xl p-s0">
        <div className="flex">
          <div className="basis-1/2">
            <p
              className={`cursor-pointer px-2 py-4 text-center ${
                activeComponent === 'Pending'
                  ? 'border-b-2 border-b-white/80'
                  : 'border-b border-b-white/20'
              }`}
              onClick={() => setActiveComponent('Pending')}
            >
              Pending
            </p>
          </div>
          <div className="basis-1/2">
            <p
              className={`cursor-pointer px-2 py-4 text-center ${
                activeComponent === 'Completed'
                  ? 'border-b-2 border-b-white/80'
                  : 'border-b border-b-white/20'
              }`}
              onClick={() => setActiveComponent('Completed')}
            >
              Completed
            </p>
          </div>
        </div>
        {activeComponent === 'Pending' && (
          <Reusable VideoArray={PENDING_VIDEOS} />
        )}
        {activeComponent === 'Completed' && (
          <Reusable VideoArray={COMPLETED_VIDEOS} />
        )}
      </div>
      <div className="gradient-dark relative basis-1/2 rounded-2xl p-s0">
        <div className="basis-1/2">
          <p className="border-b border-b-white/20 px-2 py-4 text-start">
            Recommended
          </p>
        </div>
        <Reusable
          VideoArray={RECOMENDED_VIDEOS}
          isCompletedVideo={true}
          count={setSelectVideosLength}
        />
        {
          <div className="absolute left-0 right-0 bottom-0 z-10 rounded-2xl rounded-tl-none rounded-tr-none p-2 backdrop-blur-md">
            <p>
              <span className="text-xl font-semibold">
                {selectVideosLength}
                {` `}
              </span>
              Videos Selected
            </p>
          </div>
        }
      </div>
    </div>
  );
};

const Reusable = ({ VideoArray, isCompletedVideo, count }) => {
  const [titlesArray, setTitlesArray] = useState([]);

  const handleArrayOptions = (e) => {
    const newArray = titlesArray;

    if (newArray.includes(e.target.name))
      newArray.splice(newArray.indexOf(e.target.name), 1);
    else newArray.push(e.target.name);

    setTitlesArray(newArray);
    count(newArray.length);
  };

  return (
    <div className="relative mt-1 flex h-80 w-full flex-col gap-y-5 overflow-y-auto p-s1.5">
      {VideoArray.map((VideoItem, index) => {
        return (
          <div key={index} className="flex h-full flex-row justify-center">
            {isCompletedVideo ? (
              <CheckBox name={VideoItem.title} onChange={handleArrayOptions} />
            ) : null}
            <div className="basis-1/4">
              <Image
                src={VideoItem.pic}
                alt={`${VideoItem.title}`}
                width={125}
                height={75}
                className="rounded-xl"
              />
            </div>
            <div
              className={`${
                isCompletedVideo ? 'basis-4/6' : 'basis-3/4'
              } h-full`}
            >
              <p>{VideoItem.title}</p>
              <div className="flex flex-row items-center justify-start gap-x-1">
                {VideoItem.languagesArray.map((language, i) => {
                  return (
                    <p key={i}>
                      <span className="rounded-lg bg-white-transparent px-2 py-1 text-xs">
                        {language}
                      </span>
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecommendVideos;
