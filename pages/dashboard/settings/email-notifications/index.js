import { useState } from 'react';
import { SettingsLayout, Settings_Back_Button } from '..';

const ToggleButton = ({ handleChange, isChecked }) => {
  return (
    <label
      className={`relative inline-block h-6 w-12 cursor-pointer rounded-3xl transition-all ${
        isChecked ? 'gradient-2' : 'bg-gray-1'
      }`}
    >
      <input
        type="checkbox"
        className="invisible"
        checked={isChecked}
        onChange={handleChange}
      />
      <div
        className={`absolute top-1/2 grid h-6 w-6 -translate-y-1/2 place-content-center rounded-full p-s1 transition-all ease-linear ${
          isChecked ? 'gradient-1 left-6' : 'left-0 bg-gray-1'
        }`}
      >
        <span className={`inline-block h-5 w-5 rounded-full bg-white`}></span>
      </div>
    </label>
  );
};

const MobileToggle = ({ title, info }) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleChange = (e) => setIsChecked(e.target.checked);

  return (
    <div className="flex items-center justify-between border-y border-white-transparent py-s2 px-s3 md:hidden">
      <div>
        <h4 className="text-xl">{title}</h4>
        <p className="text-xs">{info}</p>
      </div>
      <ToggleButton isChecked={isChecked} handleChange={handleChange} />
    </div>
  );
};

const NOTIFICATIONS = [
  {
    title: 'Newsletter emails',
    info: 'Subscribe to our weekly newsletter.',
  },
  {
    title: 'Product emails',
    info: 'Get tips and resources about Aview&#39;s tools.',
  },
  {
    title: 'News emails',
    info: 'Learn about new Aview features.',
  },
  {
    title: 'Support emails',
    info: 'Get help with using Aview&#39;s platform.',
  },
];

const EmailNotifications = () => {
  return (
    <div className="mt-s5 text-white">
      <div></div>
      <Settings_Back_Button title={'Email Notifications'} />
      <p className="mb-s5 px-s1 text-center text-lg">
        Select what and when you want to hear from us.
      </p>
      {NOTIFICATIONS.map((item, index) => (
        <MobileToggle key={`settinng-${index}`} {...item} />
      ))}
    </div>
  );
};

EmailNotifications.getLayout = SettingsLayout;
export default EmailNotifications;
