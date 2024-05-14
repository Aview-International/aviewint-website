import { useState } from 'react';
import {
  CORPORATE_PAGE_FAQ,
  E_LEARNING_FAQ,
  LANDING_PAGE_FAQ,
  VOICEOVER_FAQ,
} from '../../../constants/constants';

const FAQ = ({ page }) => {
  return (
    <section className="section m-horizontal" data-test="faq">
      <h2 className="h2 text-center">Frequently Asked Questions</h2>
      <div className="mt-s2 flex flex-col gap-y-5">
        {page === 'e-learning'
          ? E_LEARNING_FAQ.map((faq, i) => (
              <Question key={`faq-${i}`} {...faq} />
            ))
          : null}
        {page === 'corporate'
          ? CORPORATE_PAGE_FAQ.map((faq, i) => (
              <Question key={`faq-${i}`} {...faq} />
            ))
          : null}
        {page === 'landing'
          ? LANDING_PAGE_FAQ.map((faq, i) => (
               <Question key={`faq-${i}`} {...faq} />
            ))
          : null}
        {page === 'voiceover'
          ? VOICEOVER_FAQ.map((faq, i) => (
              <Question key={`faq-${i}`} {...faq} />
            ))
          : null}
      </div>
    </section>
  );
};

export default FAQ;

const Question = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        id={id}
        className="cursor-pointer rounded-2xl bg-white-transparent px-3 py-4 md:px-6 md:py-7"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        <div className="flex items-center justify-between">
          <h3 className="-mb-1 text-xl font-medium text-white md:text-3xl">
            {question}
          </h3>
          <div className="relative h-5 w-5">
            <div className="absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-white md:h-[3px] md:w-7"></div>
            <div
              className={`transition-300 absolute top-1/2 left-1/2 h-5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-white md:h-7 md:w-[3px] ${
                isOpen && 'h-0 md:h-0'
              }`}
            ></div>
          </div>
        </div>
        <p
          className={`mt-5 text-lg text-white md:text-xl ${
            !isOpen && 'hidden'
          }`}
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      </div>
    </>
  );
};
