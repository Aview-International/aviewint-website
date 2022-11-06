import DashboardLayout from '../../../components/dashboard/DashboardLayout';

const Messages = () => {
  return (
    <>
      <h2 className="mt-s10 text-center text-7xl text-white">
        Welcome to messages
      </h2>
    </>
  );
};

Messages.getLayout = DashboardLayout;

export default Messages;
