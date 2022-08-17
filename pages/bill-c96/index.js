import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import PreparingForBillC96 from '../../components/sections/bill-c96/PreparingForBillC96';
import WhatIsBillC96 from '../../components/sections/bill-c96/WhatIsBillC96';
import HowWeCanHelp from '../../components/sections/bill-c96/HowWeCanHelp';
import OurServices from '../../components/sections/reused/OurServices';
import Blobs from '../../components/UI/Blobs';

const BillC96 = () => {
  return (
    <>
      <Header />
      <PreparingForBillC96 />
      <WhatIsBillC96 />
      <HowWeCanHelp />
      <OurServices />
      <Footer />
      <Blobs />
    </>
  );
};

export default BillC96;
