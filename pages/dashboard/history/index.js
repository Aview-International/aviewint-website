import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import { getAllPendingJobs } from '../../api/firebase';

const History = () => {
  const [pendingJobs, setPendingJobs] = useState([]);
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

  const getAll = async () => await Promise.all([getPendingJobs()]);

  useEffect(() => {
    if (uid) getAll();
  }, [reloadTrigger]);

  console.log(pendingJobs);

  return (
    <>
      <PageTitle title="History" />
      <h2 className="mt-s2 text-4xl">History</h2>
      <Container pendingJobs={pendingJobs} />
    </>
  );
};

const Container = ({ pendingJobs }) => {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#ffffff26] to-[#ffffff0D] p-s3">
      <div className="grid grid-cols-[25%_20%_22%_20%_13%]">
        <p>Name</p>
        <p>Date</p>
        <p>Languages</p>
        <p>Status</p>
        <p>Download Link</p>
      </div>
      <hr className="my-s2 border-[rgba(255,255,255,0.6)]" />
      {pendingJobs.map((job, i) => (
        <div
          className="grid grid-cols-[25%_20%_25%_20%_10%] border-b border-[rgba(252,252,252,0.2)] py-s2"
          key={i}
        >
          <div>{job?.uploaded ? 'Uploaded Video' : job.videoData?.caption}</div>
          <p>{new Date(+job.timestamp).toDateString()}</p>
          <div>
            {typeof job?.languages === 'string'
              ? job.languages
              : job?.languages.map((lang, idx) => (
                  <p key={idx} className="mb-s1">
                    {lang}
                  </p>
                ))}
          </div>
          <div className="text-[#eab221]">{job.status}</div>
          <div>
            {job.status === 'complete' &&
              job?.downloadLink &&
              Object.keys(job.downloadLink).map((el, idx) => (
                <span key={idx}>
                  {el}:{' '}
                  <a
                    href={job.downloadLink[el]}
                    target="_blank"
                    className="text-blue underline"
                    rel="noreferrer"
                  >
                    Download
                  </a>
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

History.getLayout = DashboardLayout;

export default History;
