import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';

const Settings = () => {
  return (
    <>
      <PageTitle title="Settings" />
      <h2 className="mt-s10 text-center text-7xl text-white">
        Welcome to settings
      </h2>
    </>
  );
};

Settings.getLayout = DashboardLayout;

export default Settings;
