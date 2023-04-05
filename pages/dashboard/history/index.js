import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { getAllPendingJobs } from '../../api/firebase';

const History = () => {
  const [jobs, setJobs] = useState([]);
  const [reloadTrigger, setReloadTrigger] = useState(0);
  const uid = Cookies.get('uid');

  const getPendingJobs = async () => {
    const res = await getAllPendingJobs(uid);
    setJobs(
      res
        ? Object.values(res).map((item, i) => ({
            ...item,
            jobId: Object.keys(res)[i],
          }))
        : []
    );
  };

  useEffect(() => {
    if (uid) getPendingJobs();
  }, [reloadTrigger]);

  return (
    <>
      <PageTitle title="History" />
      <h2 className="mt-s2 text-4xl">History</h2>
      <Container jobs={jobs} />
    </>
  );
};

const Container = ({ jobs }) => {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#ffffff26] to-[#ffffff0D] p-s3">
      <div className="grid grid-cols-[30%_20%_20%_30%]">
        <p>Name</p>
        <p>Date</p>
        <p>Service</p>
        <p>Link</p>
      </div>
      <hr className="my-s2 border-[rgba(255,255,255,0.6)]" />
      {jobs.map((job, i) => (
        <div className="grid grid-cols-[30%_20%_20%_30%]" key={i}>
          <div>
            {job.videoData.map(({ title }, idx) => (
              <p key={idx} className="mb-s1">
                {title}
              </p>
            ))}
          </div>
          <p>{new Date(job.createdAt).toDateString()}</p>

          <div>
            {job.services.map((service, idx) => (
              <p key={idx} className="mb-s1">
                {service}
              </p>
            ))}
          </div>
          <div>
            {job.videoData.map(({ videoId }, idx) => (
              <a
                key={idx}
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noreferrer"
                className="mb-s1 block text-blue underline"
              >
                https://www.youtube.com/watch?v={videoId}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

History.getLayout = DashboardLayout;

export default History;
