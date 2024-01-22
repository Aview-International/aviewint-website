import { useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';
import ToggleButton from '../../../../components/FormComponents/ToggleButton';
import Container from '../../../../components/UI/Container';

const NOTIFICATIONS = [
  {
    title: 'Newsletter emails',
    info: 'Subscribe to our weekly newsletter.',
    value: true,
  },
  {
    title: 'Product emails',
    info: 'Get tips and resources about Aview&#39;s tools.',
    value: true,
  },
  {
    title: 'News emails',
    info: 'Learn about new Aview features.',
    value: true,
  },
  {
    title: 'Support emails',
    info: 'Get help with using Aview&#39;s platform.',
    value: true,
  },
  {
    title: 'Unsubscribe from all',
    info: 'I dont want to receive any emails about the product or new offers.',
    value: false,
  },
];

const MobileToggle = ({ title, info, value }) => {
  const [isChecked, setIsChecked] = useState(value);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <Container
      left={
        <>
          <h4 className="text-xl">{title}</h4>
          <p className="text-xs">{info}</p>
        </>
      }
      right={<ToggleButton isChecked={isChecked} handleChange={handleChange} />}
    />
  );
};

const EmailNotifications = () => {
  return (
    <div>
      <Settings_Back_Button title={'Email Notifications'} />
      <Container
        left={
          <div className="flex flex-col justify-start gap-y-1">
            <p className="text-xl">Notification Settings</p>
            <p className="text-sm">Manage your notification and email settings here.</p>
          </div>
        }
        isHeaderSection={true}
      />
      {NOTIFICATIONS.map((item, index) => (
        <MobileToggle key={`settinng-${index}`} {...item} />
      ))}
    </div>
  );
};

EmailNotifications.getLayout = SettingsLayout;
export default EmailNotifications;
