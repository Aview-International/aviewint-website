import { useState } from 'react';
import { LANDING_PAGE_FAQ } from '../../../constants/constants';
import HorizontalLine from '../../UI/HorizontalLine';

const FAQs = () => {
  return (
    <section className="section m-horizontal">
      <h2 className="title text-center">
        <span className="gradient-text gradient-2">FAQ</span>
      </h2>
      <p className="body mb-s6 md:mb-s10 md:text-center">
        Question not answered below? Email us at{' '}
        <a href="mailto:julai@aviewint.com">julia@aviewint.com</a>
      </p>
      <div>
        <HorizontalLine />
        {LANDING_PAGE_FAQ.map((faq, i) => (
          <Question key={`faq-${i}`} {...faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer pl-s3 transition-all duration-1000 ease-in-out ${
          isOpen ? 'max-h-[65rem]' : 'max-h-40'
        }`}
      >
        <h3 className="align-center mt-s3 mb-s3 flex justify-between text-xl text-white md:text-2xl">
          {question}
          <div className="relative">
            <span className="inline-block h-[4px] w-6 bg-white"></span>
            <span
              className={`absolute top-[16px] left-[0px] h-[4px] w-6 rotate-90 bg-white ${
                isOpen ? 'hidden' : 'inline-block'
              }`}
            ></span>
          </div>
        </h3>
        <p
          className={`body mt-s3 mb-s3 ${
            isOpen ? 'block' : 'hidden'
          }`}
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      </div>
      <HorizontalLine />
    </>
  );
};
