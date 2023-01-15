import StaggeredTextAndGraphic from '../../../layout/StaggeredTextAndImage';
import subtitles from '../../../../public/img/graphics/corporate/translations/subtitles.png';
import voiceOvers from '../../../../public/img/graphics/corporate/translations/voice-overs.png';
import documentTranslation from '../../../../public/img/graphics/corporate/translations/documents.png';
import english from '../../../../public/img/graphics/corporate/translations/english.png';

const ITEMS = [
  {
    title: 'Subtitles',
    description:
      'Adding English subtitles to your videos can help you reach a much wider audience. At AVIEW, we provide professional English subtitle services for all types of videos. We focus on producing English subtitles that are both accurate and engaging.',
    image: subtitles,
  },
  {
    title: 'Voice-Overs',
    description:
      'English voice-overs are a great way to increase engagement. They allow you to repurpose your content to reach more people. Our experienced voice actors can create dialogue that will make your audience feel at home.',
    image: voiceOvers,
  },
  {
    title: 'Document Translation',
    description:
      'We specialize in translating all types of documents from marketing materials to resumes and more. Get your documents translated to or from English today.',
    image: documentTranslation,
  },
  {
    title: 'English Localization',
    description:
      "If you're looking to create the best material for an international audience, localization is key. Our professional translators take into account cultural differences to ensure that your audience has a great experience.",
    image: english,
  },
];

export default function OurServices() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        Our <span className="gradient-text gradient-2">Services</span>
      </h2>
      <StaggeredTextAndGraphic items={ITEMS} />
    </section>
  );
}
