import { SettingsLayout, Settings_Back_Button } from '..';

const Privacy = () => {
  return (
    <div>
      <Settings_Back_Button title={"Privacy and Security"} />

      <p className="text-xl">Privacy and Settings</p>
    </div>
  );
};

Privacy.getLayout = SettingsLayout;
export default Privacy;
