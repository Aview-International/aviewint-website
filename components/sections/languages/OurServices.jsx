import StaggeredTextAndGraphic from '../../layout/StaggeredTextAndImage';
import subtitles from '../../../public/img/graphics/languages/subtitles.png';
import voiceOvers from '../../../public/img/graphics/languages/voice-overs.png';
import documentTranslation from '../../../public/img/graphics/languages/documents.png';
import localization from '../../../public/img/graphics/languages/localization.png';

export default function OurServices({ language }) {
  const ITEMS = [
    {
      title: 'Subtitles',
      description: `Adding ${language} subtitles to your videos can help you reach a much wider audience. At AVIEW, we provide professional ${language.toLowerCase()} subtitle services for all types of videos. We focus on producing ${language} subtitles that are both accurate and engaging.`,
      image: subtitles,
    },
    {
      title: 'Voice-Overs',
      description: `${language} voice-overs are a great way to increase engagement. They allow you to repurpose your content to reach more people. Our experienced voice actors can create dialogue that will make your audience feel at home.`,
      image: voiceOvers,
    },
    {
      title: 'Document Translation',
      description: `We specialize in translating all types of documents from marketing materials to resumes and more. Get your documents translated to or from ${language.toLowerCase()} today.`,
      image: documentTranslation,
    },
    {
      title: `${language} Localization`,
      description:
        "If you're looking to create the best material for an international audience, localization is key. Our professional translators take into account cultural differences to ensure that your audience has a great experience.",
      image: localization,
    },
  ];

  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        Our <span className="gradient-text gradient-2">Services</span>
      </h2>
      <StaggeredTextAndGraphic items={ITEMS} />
    </section>
  );
}
