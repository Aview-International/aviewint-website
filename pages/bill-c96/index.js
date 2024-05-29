import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import PreparingForBillC96 from '../../components/sections/bill-c96/PreparingForBillC96';
import WhatIsBillC96 from '../../components/sections/bill-c96/WhatIsBillC96';
import HowWeCanHelp from '../../components/sections/bill-c96/HowWeCanHelp';
import OurServices from '../../components/sections/reused/OurServices';
import Blobs from '../../components/UI/Blobs';
import SEO from '../../components/SEO/SEO';
import GenerateAviewForCompany from '../../components/sections/corporate/GenerateAviewForCompany';

const BillC96 = () => {
  return (
    <>
      <SEO
        title="Bill C-96 - AVIEW"
        description="All-in-one solution for content creators and brands to monetize international audiences. Leverage tools for context-based translations, voice-over dubbing, and global distribution"
      />
      <Header curPage="Bill C-96" />
      <PreparingForBillC96 />
      <WhatIsBillC96 />
      <HowWeCanHelp />
      <OurServices />
      <GenerateAviewForCompany title="Get a free quote today!" />
      <Footer curPage="Bill C-96" />
      <Blobs />
    </>
  );
};

export default BillC96;
