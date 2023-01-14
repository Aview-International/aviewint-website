import StaggeredTextAndGraphic from '../../../layout/StaggeredTextAndImage';
import cvAndResume from '../../../../public/img/graphics/corporate/resume/cv-resume.png';
import portfolios from '../../../../public/img/graphics/corporate/resume/portfolio.png';

const ITEMS = [
  {
    title: 'CVs and Resumes',
    description:
      "Employers want to know your past experiences and skills. But language barriers can make it hard to show them your credentials. That's why we translate certifications, biographies, work experiences, and more.",
    image: cvAndResume,
  },
  {
    title: 'Professional Portfolios',
    description:
      "It's not uncommon for job applications to require examples of work. These examples are typically in an applicant's portfolio. At AVIEW, we translate projects, writing, case studies, and anything else you want to include in your portfolio.",
    image: portfolios,
  },
];

export default function ProfessionalVoiceOvers() {
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-10 md:text-center">
        Accurate and Engaging{' '}
        <span className="gradient-text gradient-2">Resume</span> Translations
      </h2>
      <StaggeredTextAndGraphic items={ITEMS} />
    </section>
  );
}
