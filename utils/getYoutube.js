import { getChannelVideos } from '../services/apis';

const downloadYoutubeVideos = async (channelId, pageToken = null) => {
  //  console.count("in the youtube api ",channelId, pageToken === '' && channelId)

  try {
    if (channelId || pageToken) {
      const getVideos = await getChannelVideos(channelId, pageToken);
      const youtubeVideos = getVideos.items.map((vid) => ({
        type: 'youtube',
        id: vid.snippet.resourceId.videoId,
        caption: vid.snippet.title,
        timestamp: vid.snippet.publishedAt,
        thumbnail: vid.snippet.thumbnails.maxres
          ? vid.snippet.thumbnails.maxres.url
          : vid.snippet.thumbnails.default.url,
        permalink: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
        videoUrl: `https://www.youtube.com/watch?v=${vid.snippet.resourceId.videoId}`,
      }));

      return {
        videos: youtubeVideos,
        totalResults: getVideos.pageInfo.totalResults,
        nextPageToken: getVideos.nextPageToken || null,
      };
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default downloadYoutubeVideos;
