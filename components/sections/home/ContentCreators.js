import React from 'react';
import { LANDING_PAGE_TYPES } from '../../../constants/constants';
import Image from 'next/image';
import testimonial_1 from '../../../public/img/graphics/new-landing-images/testimonial-1.webp';
import testimonial_2 from '../../../public/img/graphics/new-landing-images/testimonial-2.webp';
import testimonial_3 from '../../../public/img/graphics/new-landing-images/testimonial-3.webp';
import testimonial_4 from '../../../public/img/graphics/new-landing-images/testimonial-4.webp';
import testimonial_5 from '../../../public/img/graphics/new-landing-images/testimonial-5.webp';
import testimonial_6 from '../../../public/img/graphics/new-landing-images/testimonial-6.webp';
import testimonial_7 from '../../../public/img/graphics/new-landing-images/testimonial-7.webp';
import testimonial_8 from '../../../public/img/graphics/new-landing-images/testimonial-8.webp';

const ContentCreators = () => {
  return (
    <section className="section m-horizontal text-white" data-aos="zoom-in">
      <div className="mx-auto grid w-full grid-cols-1 place-content-center place-items-center gap-s20 p-3 md:w-4/5 md:p-8">
        {React.Children.toArray(
          LANDING_PAGE_TYPES.map((itemType) => {
            return (
              <>
                <div
                  className="flex w-full flex-col gap-s5 md:flex-row md:gap-s14"
                  key={itemType.id}
                >
                  <Image
                    src={itemType.image}
                    alt={`about-${itemType.title}`}
                    width="450"
                    height="400"
                    className=""
                  />
                  <div className="flex w-full flex-col gap-y-5 p-0 md:w-4/5 md:p-5">
                    <p className="h2 w-full md:w-5/6">{itemType.title}</p>
                    <p className="body">{itemType.description}</p>
                    {/* <Button type="tertiary">{itemType.button_text}</Button> */}
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
      <ScrollVerticalAnime />
    </section>
  );
};

const ScrollVerticalAnime = () => {
  return (
    <>
      <div className="mt-s16 grid h-[944px] w-full max-w-[1240px] grid-cols-1 place-content-center justify-items-center gap-8 rounded-2xl bg-white-transparent md:h-[560px] md:grid-cols-2">
        <div className="flex h-full w-[90%] items-center justify-start p-s1">
          <h2 className="h2">
            Chosen by the World&apos;s Leading Creators and Innovative Enterprises
          </h2>
        </div>
        <div className="flex flex-row justify-center gap-3 overflow-hidden whitespace-nowrap">
          <div className="animate-images flex flex-col gap-y-4 justify-center">
            <div className="h-36 w-36 md:h-72 md:w-72">
              <Image
                src={testimonial_1}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_2}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_3}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_4}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_1}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_2}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>

            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_3}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_4}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_1}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_2}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>

            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_3}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_4}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_1}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
          </div>
          <div className="animate-images-reverse flex flex-col gap-y-4 justify-center">
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_5}
                alt="testinomial-1"
                width="180"
                height="180"
                className="rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_6}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_7}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_8}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_5}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_6}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_7}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_8}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_5}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_6}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_7}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_8}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
            <div className="h-36 w-36 md:h-60 md:w-60">
              <Image
                src={testimonial_5}
                alt="testinomial-1"
                width="180"
                height="180"
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentCreators;
