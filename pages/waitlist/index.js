import React from 'react';
import Waitlist from '../../components/sections/waitlist/Waitlist';
import SEO from '../../components/SEO/SEO';
import Header from '../../components/navigation/Header';
import Footer from '../../components/navigation/Footer';
import Blobs from '../../components/UI/Blobs';
import ScrollToTopButton from '../../components/UI/ScrollToTopButton';
import ProgressBar from '../../components/UI/ProgressBar';

const index = () => {
  return (
    <>
      <SEO
        title="Waitlist"
        description="Translate Your Favorite Influencer Videos! Apply to gain experience and become a translator, dubber, or editor. Apply Now!"
      />
      <ProgressBar />
      <Header />
      <Waitlist />
      <ScrollToTopButton />
      <Footer curPage="Join Waitlist"/>
      <Blobs />
    </>
  );
};

export default index;
