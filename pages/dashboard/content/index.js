import DashboardLayout from "../../../components/dashboard/DashboardLayout";

const Content = () => {
  return (
    <>
      <h2 className="mt-s10 text-center text-7xl text-white">
        Welcome to content
      </h2>
    </>
  );
};

Content.getLayout = DashboardLayout;

export default Content;