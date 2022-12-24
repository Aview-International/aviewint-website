import termsAndConditions from '../../../../public/img/graphics/corporate/legal/terms-and-conditions.png';
import patents from '../../../../public/img/graphics/corporate/legal/patents.png';
import litigation from '../../../../public/img/graphics/corporate/legal/litigation.png';
import licenses from '../../../../public/img/graphics/corporate/legal/licenses.png';
import immigrationDocuments from '../../../../public/img/graphics/corporate/legal/immigration-documents.png';
import financialRecords from '../../../../public/img/graphics/corporate/legal/financial-records.png';
import HoverShowImageOrText from '../../../layout/HoverShowImageOrText';

const ITEMS = [
  {
    title: 'Terms and Conditions',
    description:
      "When there are multiple parties involved in an agreement, terms and conditions are important. But what if the parties speak different languages? That's why at AVIEW, we help you transcribe all your terms and conditions.",
    image: termsAndConditions,
  },
  {
    title: 'Patents',
    description:
      'If you would like to file for a patent in a foreign country, you may require translations. Patent translations require expert knowledge of both languages and the relevant laws. Get your patents translated at AVIEW.',
    image: patents,
  },
  {
    title: 'Litigation',
    description:
      "International litigation is becoming increasingly common. Cross-border business deals are made possible by breaking down language barriers. Litigation material requires high-quality translations. That's why at AVIEW, our translators are certified.",
    image: litigation,
  },
  {
    title: 'Licenses',
    description:
      "When there are multiple parties involved in an agreement, terms and conditions are important. But what if the parties speak different languages? That's why at AVIEW, we help you transcribe all your terms and conditions.",
    image: licenses,
  },
  {
    title: 'Immigration Documents',
    description:
      'There are many documents related to immigration that may need translations. For example, green card applications and citizen applications are both important documents to translate. Our certified transcribers will help you with all immigration-related material.',
    image: immigrationDocuments,
  },
  {
    title: 'Financial Records',
    description:
      "If your business is using a global growth strategy, language barriers may pose a problem. It's critical to have all your financial records translated into the necessary languages.",
    image: financialRecords,
  },
];

export default function LegalTranslationOverview() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-4 md:text-center">
        Aview&apos;s Legal Translation{' '}
        <span className="gradient-text gradient-2">Overview</span>
      </h2>
      <p className="body mb-10 md:text-center">
        There are many situations where legal documents require translations.
        Whether you need immigration papers or financial records translated,
        we&apos;ve got you covered at AVIEW. When it comes to legal transitions,
        accuracy is critical. Our expert translators provide high-quality
        transcriptions with a fast turnaround time.
      </p>
      <HoverShowImageOrText items={ITEMS} />
    </section>
  );
}
