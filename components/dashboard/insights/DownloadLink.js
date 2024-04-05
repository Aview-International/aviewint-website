import { getS3DownloadLink } from '../../../services/apis';

const DownloadLink = ({ job }) => {
  const handleDownload = async (job) => {
    const downloadLink = await getS3DownloadLink(
      job.timestamp,
      job.translatedLanguage
    );
    if (downloadLink) {
      const anchor = document.createElement('a');
      anchor.href = downloadLink;
      anchor.download = job.s3ObjectKey || 'download';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  };

  return (
    <div>
      <button
        onClick={() => handleDownload(job)}
        className="cursor-pointer text-blue underline"
      >
        Download
      </button>
    </div>
  );
};

export default DownloadLink;
