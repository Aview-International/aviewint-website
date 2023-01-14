import HoverShowImageOrText from '../../../layout/HoverShowImageOrText';
import reports from '../../../../public/img/graphics/corporate/medical/reports.png';
import manuals from '../../../../public/img/graphics/corporate/medical/manuals.png';
import trials from '../../../../public/img/graphics/corporate/medical/trials.png';
import websiteTaxonomy from '../../../../public/img/graphics/corporate/medical/website-taxonomy.png';
import contracts from '../../../../public/img/graphics/corporate/medical/contracts.png';
import marketingMaterials from '../../../../public/img/graphics/corporate/medical/marketing-materials.png';

const ITEMS = [
  {
    title: 'Reports',
    description:
      "A medical report is a crucial document that is used to keep records for clients. They include the clients' medical history, background, treatments, and more. Translations help people that speak other languages understand the reports.",
    image: reports,
  },
  {
    title: 'Manuals & Guides',
    description:
      "Guides and manuals help professionals understand the best way complete procedures. With the increase of multilingual medical professionals, having all procedures written out in everyone's native language is important.",
    image: manuals,
  },
  {
    title: 'Trials',
    description:
      'Clinical trials are conducted to collect valuable medical information. To work around language barriers when sharing the results of tests, translating the material is key.',
    image: trials,
  },
  {
    title: 'Website Taxonomy',
    description:
      'Many people seek out medical treatment online. To reach an international audience having a multilingual website is crucial. At AVIEW, we translate all website taxonomy, so that users can feel at home while browsing your site.',
    image: websiteTaxonomy,
  },
  {
    title: 'Contracts',
    description:
      'Agreements between providers and patients must be understood by both parties. By translating contracts, providers can ensure that their patients clearly understand the agreement.',
    image: contracts,
  },
  {
    title: 'Marketing Materials',
    description:
      'To reach patients, medical providers and businesses must market their services. Translating marketing materials allows you to reach patients from all backgrounds.',
    image: marketingMaterials,
  },
];

export default function MedicalTranslations() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-4 text-center">
        Accurate and Reliable Medical{' '}
        <span className="gradient-text gradient-2">Translation</span>
      </h2>
      <HoverShowImageOrText items={ITEMS} />
    </section>
  );
}
