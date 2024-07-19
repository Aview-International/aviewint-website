import Row3 from '../../../layout/Row3';
import marketingMaterials from '../../../../public/img/graphics/corporate/business/marketing-materials.png';
import eLearningModules from '../../../../public/img/graphics/corporate/business/e-learning-modules.png';
import internalDocuments from '../../../../public/img/graphics/corporate/business/internal-documents.png';
import Card from '../../../UI/Card';
import Image from 'next/image';
import GlobalButton from '../../../UI/GlobalButton';

const ITEMS = [
  {
    title: 'Marketing Materials',
    description:
      'Our team of certified translators works in over 15 languages, taking care of language nuances in your videos and written marketing materials.',
    image: marketingMaterials,
  },
  {
    title: 'eLearning Modules',
    description:
      "We provide subtitles and voice-overs to fit your team's training and educational videos.",
    image: eLearningModules,
  },
  {
    title: 'Internal Documents',
    description:
      'We guarantee fast, professional, and accurate translations for all documents, including; legal, technical, and newsletters.',
    image: internalDocuments,
  },
];

export default function BusinessTranslationOverview() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-4 text-center">
        <span className="gradient-text gradient-2">Aview&apos;s</span> Business
        Translation Overview
      </h2>
      <p className="body mb-10 text-center">
        Translations are a powerful tool that can help you take your business
        global. The most successful brands have used international growth
        strategies to become globally recognized. At Aview, we specialize in
        translating business documents from marketing materials to e-learning
        videos and much more. By taking a personalized approach to each of our
        clients, we help businesses reach an international audience.
      </p>
      <Row3>
        {ITEMS.map((item) => (
          <Card borderRadius="2xl" key={item.title}>
            <div className="p-6">
              <div className="mx-auto max-w-[80%]">
                <Image src={item.image} alt={item.title} />
              </div>
              <p className="mb-4 text-4xl font-semibold text-white">
                {item.title}
              </p>
              <p className="body">{item.description}</p>
            </div>
          </Card>
        ))}
      </Row3>
      <div className="mt-10 text-center">
        <GlobalButton type="primary" purpose="route" route="#generate-aview">
          Get Started
        </GlobalButton>
      </div>
    </section>
  );
}
