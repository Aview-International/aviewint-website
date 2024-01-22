import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';

const Privacy = () => {
  return (
    <div>
      <Settings_Back_Button title={'Privacy and Security'} />
      <Container
        left={
          <>
            <p className="text-xl">Privacy Settings</p>
            <p>Manage your privacy settings here.</p>
          </>
        }
        isHeaderSection={true}
      />
    </div>
  );
};

Privacy.getLayout = SettingsLayout;
export default Privacy;
