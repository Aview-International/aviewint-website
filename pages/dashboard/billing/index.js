import Image from 'next/image';
import DashboardLayout from '../../../components/dashboard/DashboardLayout';
import OnboardingButton from '../../../components/Onboarding/button';
import PageTitle from '../../../components/SEO/PageTitle';
import Blobs from '../../../components/UI/Blobs';
import Button from '../../../components/UI/Button';
import Visa from '../../../public/img/icons/visa.svg';

const Billing = () => {
  return (
    <>
    <div className='w-[1111px] mx-auto mt-5'>
    <PageTitle title="Billing" />
      <BillingDetails />
      <Transactions />
      <Blobs />
    </div>
      
    </>
  );
};

Billing.getLayout = DashboardLayout;

export default Billing;

const BillingDetails = () => {
  return (
    <div className="text-white">
      <h2 className="text-4xl">Billing Details</h2>
      <div className="gradient-dark flex items-center justify-between rounded-2xl p-s2">
        <div className="flex">
          <p>Card on file:</p>
          <div className="mx-s5">
            <Image src={Visa} alt="" width={40} height={26} />
          </div>
          <p>Visa ending in 6099</p>
        </div>
        <div>
          <OnboardingButton theme="dark">Edit</OnboardingButton>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const TableData = [
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
    {
      date: '11/26/2022',
      services: 'Translation, short, dubs, distribution',
      payment: 'Visa ending in 6099',
      total: '$40.00',
    },
  ];
  return (
    <div className="mt-s4 text-white">
      <h3 className="mb-s2 text-2xl">Transactions</h3>
      <div className="gradient-dark rounded-2xl p-s3">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.15)] text-center text-xl">
              <th className="pb-s2">Date</th>
              <th className="pb-s2">Service(s)</th>
              <th className="pb-s2">Payment</th>
              <th className="pb-s2">Total</th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((data, index) => (
              <tr className="mt-s2 text-center text-lg" key={`row-${index}`}>
                <td className="py-s2">{data.date}</td>
                <td className="py-s2">{data.services}</td>
                <td className="py-s2">{data.payment}</td>
                <td className="py-s2">{data.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
