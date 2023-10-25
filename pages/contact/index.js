import Footer from '../../components/navigation/Footer';
import Header from '../../components/navigation/Header';
import GenerateAviewForCompany from '../../components/sections/corporate/GenerateAviewForCompany';
import Blobs from '../../components/UI/Blobs';

const Contact = () => {
  return (
    <>
      <Header curPage="Corporate" />
      <GenerateAviewForCompany />
      <Footer curPage="Contact" />
      <Blobs />
    </>
  );
};

export default Contact;
