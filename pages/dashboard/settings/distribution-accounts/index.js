import Image from 'next/image';
import { SettingsLayout, Settings_Back_Button } from '..';
import Logo from '../../../../public/img/aview/logo.svg';

const Container = ({ left, right }) => (
  <div className="mb-s5 flex w-full flex-col items-start md:mb-s2 md:flex-row">
    <div className="w-full md:w-2/5 md:text-right">{left}</div>
    <div className="mt-s3 w-full md:ml-s5 md:mt-0 md:w-3/5">{right}</div>
  </div>
);

const Account = ({ picture, name, subscribers }) => (
  <div className="mb-s3 flex">
    <Image src={picture} alt="Logo" width={48} height={48} />
    <div className="ml-s2">
      <h4 className="text-xl">{name}</h4>
      <p className="text-sm">{subscribers}</p>
    </div>
  </div>
);

const DistriubtionAccounts = () => {
  const DISTRIBUTION_ACCOUNTS = [
    {
      account_type: 'Youtube',
      accounts: [
        {
          title: "Aview International Espan'ol",
          subscribers: '2.28K subscribers',
        },
        {
          title: 'Aview International Portuguese',
          subscribers: '2.28K subscribers',
        },
      ],
    },
    {
      account_type: 'Instagram',
      accounts: [
        {
          title: "Aview International Espan'ol",
          subscribers: '99 followers',
        },
      ],
    },
    {
      account_type: 'Facebook',
      accounts: [
        {
          title: "Aview International Espan'ol",
          subscribers: '46 followers',
        },
      ],
    },
    {
      account_type: 'TikTok',
      accounts: [
        {
          title: "Aview International Espan'ol",
          subscribers: '5 followers',
        },
      ],
    },
  ];
  return (
    <div>
      <Settings_Back_Button title="Distribution accounts" />
      {DISTRIBUTION_ACCOUNTS.map((item, index) => (
        <Container
          key={`account-${index}`}
          left={
            <h3 className="text-2xl">
              {item.account_type}{' '}
              <span className="inline md:hidden">
                {'('}
                {item.accounts.length}
                {')'}
              </span>
            </h3>
          }
          right={
            <>
              {item.accounts.map(() => (
                <Account
                  picture={Logo}
                  name="Aview International Espan'ol"
                  subscribers="2.28K subscribers"
                />
              ))}
            </>
          }
        />
      ))}
    </div>
  );
};

DistriubtionAccounts.getLayout = SettingsLayout;
export default DistriubtionAccounts;
