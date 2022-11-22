import Image from 'next/image';
import DashboardLayout from './DashboardLayout';
import Arrow from '../../public/img/icons/arrow-back.svg';
import { useRouter } from 'next/router';
import TranslateOptions from './TranslateOptions';
import YoutubeVideoFrame from './YoutubeVideoFrame';
import axios from 'axios';
import { saveVideo } from '../../pages/api/onboarding';
import { toast } from 'react-toastify';
import { useState } from 'react';

const SubmitVideos = ({
  setIsSelected,
  selectedVideos,
  setPayload,
  payload,
  user,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleLanguages = (value) => {
    const newLanguages = [...payload.languages];
    if (newLanguages.includes(value))
      newLanguages.splice(newLanguages.indexOf(value), 1);
    else newLanguages.push(value);
    setPayload({ ...payload, languages: newLanguages });
  };

  const handleServices = (value) => {
    const newServices = [...payload.services];
    if (newServices.includes(value))
      newServices.splice(newServices.indexOf(value), 1);
    else newServices.push(value);
    setPayload({ ...payload, services: newServices });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    let result = [];
    try {
      for (let i = 0; i < selectedVideos.length; i++) {
        let markup = `## Video - ${i + 1}
 **Title** = ${selectedVideos[i].title} 
 **Link** = https://www.youtube.com/watch?v=${selectedVideos[i].videoId}
 
---
`;
        result.push(markup);
      }
      const description = `${result.join(
        ''
      )} **Services Required** : ${payload.services.join(', ')} 
**Language(s) to be translated** : ${payload.languages.join(', ')}, ${
        payload.otherLanguages
      }
${
  payload.additionalNote
    ? '**Additional Note** : ' + payload.additionalNote
    : ''
}
**Can we post this video** : ${payload.allowUsPostVideo ? 'Yes' : 'No'}`;
      console.log(description);

      saveVideo(user.youtubeChannelId, { videos: payload.languages });
      const res = await axios.post('/api/submit-new-requests?create=board', {
        boardName: user.youtubeChannelName,
      });
      const createList = await axios.post(
        '/api/submit-new-requests?create=list',
        {
          boardName: user.youtubeChannelName,
          idBoard: res.data.id,
        }
      );
      await axios.post('/api/submit-new-requests?create=card', {
        cardName: encodeURI('New Video Request'),
        idList: createList.data.id,
        desc: encodeURIComponent(description),
      });
      setIsLoading(false);
      toast('Succesfully submitted tasks');
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex p-s4 text-white">
      <div className="w-1/2">
        <SelectedVideos
          router={router}
          setIsSelected={setIsSelected}
          selectedVideos={selectedVideos}
        />
      </div>
      <div className="w-1/2">
        <TranslateOptions
          handleServices={handleServices}
          handleLanguages={handleLanguages}
          handleSubmit={handleSubmit}
          payload={payload}
          setPayload={setPayload}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

const SelectedVideos = ({ setIsSelected, selectedVideos }) => {
  return (
    <div>
      <div
        className="mb-s3 flex cursor-pointer items-start text-2xl"
        onClick={() => setIsSelected(false)}
      >
        <span className="ml-s3 mr-s2 brightness-0 invert">
          <Image src={Arrow} alt="" width={8} height={16} />
        </span>
        <span>Videos Selected</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {selectedVideos.map((item, index) => (
          <YoutubeVideoFrame
            key={`video-${index}`}
            handleVideos={() => null}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

SubmitVideos.getLayout = DashboardLayout;

export default SubmitVideos;
