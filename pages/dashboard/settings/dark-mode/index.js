import { useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';
import ToggleButton from '../../../../components/FormComponents/ToggleButton';

const DarkMode = () => {
  const [optionTheme, setOptionTheme] = useState(true);
  const [systemTheme, setSystemTheme] = useState(true);

  const handleThemeOption = (e) => setOptionTheme(e.target.checked);
  const handleSystemThemeOption = (e) => setSystemTheme(e.target.checked);

  return (
    <div>
      <Settings_Back_Button title="Dark Mode" />
      <Container
        left={
          <>
            <p className="text-xl">Dark Mode settings</p>
            <p className="text-sm">Manage your dark mode settings here.</p>
          </>
        }
        isHeaderSection={true}
      />
      <Container
        left={
          <div className="flex flex-col gap-y-4">
            <p className="text-xl">Select theme.</p>
            <p className="text-sm">
              Choose between dark mode, light mode, or depending on your system
              settings.
            </p>
          </div>
        }
        right={
          <>
            <div className="flex flex-row items-center justify-center gap-x-4 pt-8">
              <ToggleButton
                isChecked={optionTheme}
                handleChange={handleThemeOption}
              />
              <p>{optionTheme ? 'Dark' : 'Light'} theme</p>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-4 pt-3">
              <ToggleButton
                isChecked={systemTheme}
                handleChange={handleSystemThemeOption}
              />
              <p>System theme</p>
            </div>
          </>
        }
      />
    </div>
  );
};

DarkMode.getLayout = SettingsLayout;
export default DarkMode;
