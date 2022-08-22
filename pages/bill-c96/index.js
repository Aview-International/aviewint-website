import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import PreparingForBillC96 from '../../components/sections/bill-c96/PreparingForBillC96';
import WhatIsBillC96 from '../../components/sections/bill-c96/WhatIsBillC96';
import HowWeCanHelp from '../../components/sections/bill-c96/HowWeCanHelp';
import OurServices from '../../components/sections/reused/OurServices';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';

const BillC96 = () => {
  return (
    <>
      <SEO
        title="Bill C-96 - AVIEW"
        description="Bill C-96 reinforces the obligation of businesses offering goods and services. Aview is up to date with ongoing legislation Visit Today to save time!"
      />
      <Header curPage="Bill C-96" />
      <PreparingForBillC96 />
      <WhatIsBillC96 />
      <HowWeCanHelp />
      <OurServices />
      <Footer curPage="Bill C-96" />
      <Blobs />
    </>
  );
};

export default BillC96;
