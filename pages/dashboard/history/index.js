import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import PageTitle from "../../../components/SEO/PageTitle";

const History = () => {
  return (
    <>
    <PageTitle title="History" />
      <h2 className="mt-s10 text-center text-7xl text-white">
        Welcome to History
      </h2>
    </>
  );
};

History.getLayout = DashboardLayout;

export default History;
