import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import PageTitle from '../../../components/SEO/PageTitle';

const Billing = () => {
  return (
    <>
      <PageTitle title="Billing" />
      <h2 className="mt-s10 text-center text-7xl text-white">
        Welcome to billing
      </h2>
    </>
  );
};

Billing.getLayout = DashboardLayout;

export default Billing;
