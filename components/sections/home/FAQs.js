import Link from 'next/link';
import { useState } from 'react';
import {
  CORPORATE_PAGE_FAQ,
  LANDING_PAGE_FAQ,
} from '../../../constants/constants';


const FAQs = ({ page }) => {
  return (
    <section className="section m-horizontal" data-aos="zoom-out">
      <h2 className="title text-center">
        <span className="gradient-text gradient-2">FAQ</span>
      </h2>
      <p className="body mb-s6 md:mb-s10 md:text-center">
        Question not answered below? Email us at{' '}
        <a href="mailto:julai@aviewint.com">julia@aviewint.com</a>
      </p>
      <div>
        {page === 'corporate'
          ? CORPORATE_PAGE_FAQ.map((faq, i) => (
              <Question key={`faq-${i}`} {...faq} />
            ))
          : LANDING_PAGE_FAQ.map((faq, i) => (
              <Question key={`faq-${i}`} {...faq} />
            ))}
        <CLICKHERE_QUESTION page={page} />
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
        className={`cursor-pointer pl-s3 ${
          isOpen ? 'max-h-[65rem]' : 'max-h-40'
        }`}
      >
        <h3 className="align-center mt-s3 mb-s3 flex justify-between text-xl text-white md:text-2xl">
          {question}
          <div className="relative pr-s3">
            <span className="inline-block h-[3px] w-6 bg-white"></span>
            <span
              className={`absolute top-[18px] left-[0px] h-[3px] w-6 rotate-90 bg-white ${
                isOpen ? 'hidden' : 'inline-block'
              }`}
            ></span>
          </div>
        </h3>
        <p
          className={`body mt-s3 mb-s3 ${isOpen ? 'block' : 'hidden'}`}
          dangerouslySetInnerHTML={{
            __html: answer,
          }}
        />
      </div>
      <HorizontalLine />
    </>
  );
};

const CLICKHERE_QUESTION = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer pl-s3 ${
          isOpen ? 'max-h-[65rem]' : 'max-h-40'
        }`}
      >
        <h3 className="align-center mt-s3 mb-s3 flex justify-between text-xl text-white md:text-2xl">
          {page === 'corporate'
            ? 'How much does it cost?'
            : 'How can I get started?'}
          <div className="relative pr-s3">
          <span className="inline-block h-[3px] w-6 bg-white"></span>
            <span
              className={`absolute top-[18px] left-[0px] h-[3px] w-6 rotate-90 bg-white ${
                isOpen ? 'hidden' : 'inline-block'
              }`}
            ></span>
          </div>
        </h3>
        {page === 'corporate' ? (
          <p className={`body mt-s3 mb-s3 ${isOpen ? 'block' : 'hidden'}`}>
            AVIEW creates a pricing plan for each corporate client. We ensure
            that you see a return on our services! If you would like a quote,
            please click{' '}
            <Link href="/corporate#generate-aview">
              <a className="underline">here! </a>
            </Link>
          </p>
        ) : (
          <p className={`body mt-s3 mb-s3 ${isOpen ? 'block' : 'hidden'}`}>
            Click{' '}
            <Link href="/#generate-aview">
              <a className="underline">here</a>
            </Link>{' '}
            to get started!
          </p>
        )}
      </div>
      <HorizontalLine />
    </>
  );
};
