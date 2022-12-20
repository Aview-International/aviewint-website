import Header from '../../components/navigation/Header';
import Hero from '../../components/layout/Hero';
import CompaniesWeWorkedWith from '../../components/sections/corporate/CompaniesWeWorkedWith';
import ScientificTranslationOverview from '../../components/sections/corporate/ScientificTranslationOverview';
import FeaturedBlogs from '../../components/sections/reused/FeaturedBlogs';
import scientificGraphic from '../../public/img/graphics/corporate/scientific.png';

export default function Scientific() {
  return (
    <>
      <Header curPage="Corporate" />
      <Hero
        title="Scientific Translation <span class='gradient-text gradient-2'>Services</span>"
        description="Work with certified professionals to translate scientific material."
        buttonText="Get Started"
        buttonLink="#generate-aview"
        image={scientificGraphic}
      />
      <CompaniesWeWorkedWith />
      <ScientificTranslationOverview />
      <FeaturedBlogs />
    </>
  );
}
