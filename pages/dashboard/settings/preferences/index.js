import { useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import Container from '../../../../components/UI/Container';
import CustomSelectInput from '../../../../components/FormComponents/CustomSelectInput';

const languageOptionsArray = [
  'English',
  'Hindi',
  'Arabic',
  'Spanish',
  'Japanese',
  'Chinese',
];

const Preference = () => {
  const [languageOption, setLanguageOption] = useState('English');

  const handleLanguageChange = (e) => {
    setLanguageOption(e.target.value);
  };

  return (
    <div>
      <Settings_Back_Button title="Preferences" />
      <Container
        left={
          <>
            <p className="text-xl">Preferences settings</p>
            <p className="text-sm">Manage your notifications and custom settings here.</p>
          </>
        }
        isHeaderSection={true}
      />
      <Container
        left={<p className="text-xl">Language</p>}
        right={
          <div className="">
            <CustomSelectInput
              hasText={true}
              options={languageOptionsArray}
              onChange={handleLanguageChange}
              value={languageOption}
            />
          </div>
        }
      />
    </div>
  );
};

Preference.getLayout = SettingsLayout;
export default Preference;
