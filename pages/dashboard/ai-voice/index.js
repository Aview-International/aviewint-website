import React from 'react';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';
import AiVoice from '../../../components/dashboard/AiVoice';


const Aivoice = () => {
  return (
    <>
      <div className="mx-auto h-full max-w-[1200px] rounded-xl bg-white-transparent ">
        <PageTitle title="Upload Video" />
        <div className="p-s5">
          <AiVoice />
        </div>
      </div>
    </>
  )
}


Aivoice.getLayout = DashboardLayout;

export default Aivoice
