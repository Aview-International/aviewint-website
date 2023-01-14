import HoverShowImageOrText from '../../../layout/HoverShowImageOrText';
import subtitles from '../../../../public/img/graphics/corporate/e-learning/subtitles.png';
import voiceOvers from '../../../../public/img/graphics/corporate/e-learning/voice-overs.png';
import courseMaterials from '../../../../public/img/graphics/corporate/e-learning/course-materials.png';
import websiteTaxonomy from '../../../../public/img/graphics/corporate/e-learning/website-taxonomy.png';
import graphics from '../../../../public/img/graphics/corporate/e-learning/graphics.png';
import employeeOrientation from '../../../../public/img/graphics/corporate/e-learning/employee-orientation.png';

const ITEMS = [
  {
    title: 'Subtitles',
    description:
      'Videos are a key part of any eLearning course. At AVIEW, we provide high-quality subtitles for educational videos. We localize all transcripts to make your audience feel at home while watching your videos.',
    image: subtitles,
  },
  {
    title: 'Voice-Overs',
    description:
      'If you want to give your audience the best experience, translated voice-overs are the way to go. Our talented voice actors provide amazing dubbing services so that you can produce the highest quality educational videos.',
    image: voiceOvers,
  },
  {
    title: 'Course Materials',
    description:
      "Any online course has lots of text. It's important to translate everything within a course so that it can be fully understood by people that speak different languages. We translate articles, e-books, tests, and much more.",
    image: courseMaterials,
  },
  {
    title: 'Website Taxonomy',
    description:
      "For multi-lingual users to have access to your course, they must be able to navigate your website. That's why website localization is so important. At AVIEW, we translate all website taxonomy to give your users an amazing experience.",
    image: websiteTaxonomy,
  },
  {
    title: 'Graphics',
    description:
      "It's not uncommon to use infographics in online courses. The information in the images must be translated into all the necessary languages for a course to function properly. At AVIEW, we localize images for you.",
    image: graphics,
  },
  {
    title: 'Employee Orientation',
    description:
      'Language barriers can make training employees unnecessarily hard. This is where orientation translations come in. We help you translate and localize all training material so you can get all your employees up to speed.',
    image: employeeOrientation,
  },
];

export default function ELearningServices() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-4 text-center">
        High Quality E-Learning{' '}
        <span className="gradient-text gradient-2">Translation</span> and
        Localization
      </h2>
      <HoverShowImageOrText items={ITEMS} />
    </section>
  );
}
