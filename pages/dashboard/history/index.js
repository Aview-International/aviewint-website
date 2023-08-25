import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { getAllCompletedJobs, getAllPendingJobs } from '../../api/firebase';

const History = () => {
  const [pendingJobs, setPendingJobs] = useState([]);
  const [completedJobs, setCompletedJobs] = useState([]);
  const [reloadTrigger, setReloadTrigger] = useState(0);
  const uid = Cookies.get('uid');

  const getPendingJobs = async () => {
    const res = await getAllPendingJobs(uid);
    setPendingJobs(
      res
        ? Object.values(res).map((item, i) => ({
            ...item,
            jobId: Object.keys(res)[i],
          }))
        : []
    );
  };
  const getCompletedJobs = async () => {
    const res = await getAllCompletedJobs(uid);
    setCompletedJobs(
      res
        ? Object.values(res).map((item, i) => ({
            ...item,
            jobId: Object.keys(res)[i],
          }))
        : []
    );
  };

  const getAll = async () =>
    await Promise.all([getPendingJobs(), getCompletedJobs()]);

  useEffect(() => {
    if (uid) getAll();
  }, [reloadTrigger]);

  return (
    <>
      <PageTitle title="History" />
      <h2 className="mt-s2 text-4xl">History</h2>
      <Container pendingJobs={pendingJobs} completedJobs={completedJobs} />
    </>
  );
};

const Container = ({ pendingJobs, completedJobs }) => {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#ffffff26] to-[#ffffff0D] p-s3">
      <div className="grid grid-cols-[30%_20%_20%_30%]">
        <p>Name</p>
        <p>Date</p>
        <p>Service</p>
        <p>Link</p>
      </div>
      <hr className="my-s2 border-[rgba(255,255,255,0.6)]" />
      {pendingJobs.map((job, i) => (
        <div
          className="grid grid-cols-[30%_20%_20%_30%] border-b border-[rgba(252,252,252,0.2)] py-s2"
          key={i}
        >
          <div>
            {job.videoData.map(({ caption }, idx) => (
              <p key={idx} className="mb-s1">
                {caption}
              </p>
            ))}
          </div>
          <p>{new Date(job.createdAt).toDateString()}</p>
          <div>
            {job.languages.map((service, idx) => (
              <p key={idx} className="mb-s1">
                {service}
              </p>
            ))}
          </div>
          <div className="text-[#eab221]">In progress</div>
        </div>
      ))}

      {completedJobs.map((job, i) => (
        <div
          className="grid grid-cols-[30%_20%_20%_30%] border-b border-[rgba(252,252,252,0.2)] py-s2"
          key={i}
        >
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
            <a
              href={job.jobUrl}
              target="_blank"
              rel="noreferrer"
              className="mb-s1 block text-blue underline"
            >
              {job.jobUrl}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

History.getLayout = DashboardLayout;

export default History;
