import Cookies from 'js-cookie';
import { useEffect } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { getS3DownloadLink } from '../../../services/apis';
import { getJobsHistory } from '../../../services/apis';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCompletedJobs,
  setPendingJobs,
} from '../../../store/reducers/history.reducer';
import ErrorHandler from '../../../utils/errorHandler';
import { subscribeToHistory } from '../../../services/firebase';

const History = () => {
  const dispatch = useDispatch();
  const { completedJobs, pendingJobs } = useSelector((el) => el.history);
  const uid = Cookies.get('uid');

  useEffect(() => {
    (async () => {
      try {
        const completedArray = await getJobsHistory();
        dispatch(setCompletedJobs(completedArray));
      } catch (error) {
        ErrorHandler(error);
      }
    })();
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeToHistory(uid, (data) => {
      const pendingArray = data
        ? Object.values(data).sort(
            (a, b) => parseInt(b.timestamp) - parseInt(a.timestamp)
          )
        : [];
      dispatch(setPendingJobs(pendingArray));
    });

    return () => unsubscribe(); // cleanup
  }, []);

  return (
    <>
      <PageTitle title="History" />
      <h2 className="mt-s2 text-4xl">History</h2>
      <Container pendingJobs={pendingJobs} completedJobs={completedJobs} />
    </>
  );
};

const Container = ({ pendingJobs, completedJobs }) => {
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
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#ffffff26] to-[#ffffff0D] p-s3">
      <div className="grid grid-cols-[27%_20%_22%_16%_15%]">
        <p>Name</p>
        <p>Date</p>
        <p>Languages</p>
        <p className="text-center">Status</p>
        <p>Download Link</p>
      </div>
      <hr className="my-s2 border-[rgba(255,255,255,0.6)]" />
      {[...pendingJobs, ...completedJobs].map((job, i) => (
        <div
          className="grid grid-cols-[27%_20%_22%_16%_15%] border-b border-[rgba(252,252,252,0.2)] py-s2"
          key={i}
        >
          <div>{job.videoData?.caption?.replace(/\.mp4$/i, '')}</div>
          <p>{new Date(+job.timestamp).toDateString()}</p>
          <div className="">
            {job?.translatedLanguage
              ? job.translatedLanguage
              : typeof job?.languages === 'string'
              ? job.languages
              : job?.languages?.map((lang, idx) => (
                  <p key={idx} className="mb-s1">
                    {lang}
                  </p>
                ))}
          </div>
          <div className="text-center text-[#eab221]">{job.status}</div>
          <div>
            {job.status === 'complete' && (
              <button
                onClick={() => handleDownload(job)}
                className="cursor-pointer text-blue underline"
              >
                Download
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

History.getLayout = DashboardLayout;

export default History;
