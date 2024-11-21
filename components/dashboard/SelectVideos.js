import { toast } from 'react-toastify';
import GlobalButton from '../Onboarding/button';
import Insights from './insights/Insights';
import Videos from './Videos';
import { getYoutubeVideosStats } from '../../services/apis';

const SelectVideos = ({
  setIsSelected,
  isLoading,
  setSelectedVideos,
  selectedVideos,
  setVideoStats,
}) => {
  const handleTranslate = async () => {
    try {
      if (selectedVideos.length < 1) {
        toast.error('Please select a video');
      } else {
        getYoutubeVideosStats(selectedVideos)
          .then((stats) => {
            const sumStats = stats.reduce(
              (sum, { statistics: s }) => ({
                totalViews: sum.totalViews + Number(s.viewCount || 0),
                totalLikes: sum.totalLikes + Number(s.likeCount || 0),
                totalFavorites:
                  sum.totalFavorites + Number(s.favoriteCount || 0),
                totalComments: sum.totalFavorites + Number(s.commentCount || 0),
              }),
              {
                totalViews: 0,
                totalLikes: 0,
                totalFavorites: 0,
                totalComments: 0,
              }
            );
            setVideoStats(sumStats);
          })
          .catch();
        setIsSelected(true);
      }
    } catch (error) {}
  };

  return (
    <>
      <Insights />
      <Videos
        isLoading={isLoading}
        selectedVideos={selectedVideos}
        setSelectedVideos={setSelectedVideos}
      />
      <br />
      <div className="ml-auto w-full md:w-[155px]">
        <GlobalButton onClick={handleTranslate}>Next</GlobalButton>
      </div>
    </>
  );
};

export default SelectVideos;
