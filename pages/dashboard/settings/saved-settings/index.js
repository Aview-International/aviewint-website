import { SettingsLayout, Settings_Back_Button } from '..';

const SavedSettings = () => {
  return (
    <div>
      <Settings_Back_Button title={"Saved Settings"} />
      <p className="text-xl">Saved Settings</p>
    </div>
  );
};

SavedSettings.getLayout = SettingsLayout;
export default SavedSettings;
