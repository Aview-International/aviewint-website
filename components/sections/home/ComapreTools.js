import Image from 'next/image';
import { ComparisionTools } from '../../../constants/constants';
import check from '../../../public/img/icons/green-check-circle.svg';
import uncheck from '../../../public/img/icons/incorrect.svg';

const CompareTools = () => {
  return (
    <section className="m-horizontal section text-white" data-aos="fade-in">
      <h2 className="mx-auto text-center text-5xl font-bold lg:text-[48px]">
        Aview Goes Beyond Translations
      </h2>
      <div className="mt-s8 grid h-full w-full grid-cols-1 gap-8 md:grid-cols-2">
        {ComparisionTools.map((options) => (
          <div
            className="flex flex-col items-center justify-center gap-y-8"
            key={options.index}
          >
            <div className="flex h-[48px] items-center">
              {options.title ? (
                <h4 className="text-xl font-semibold md:text-5xl">
                  {options.title}
                </h4>
              ) : (
                <div className="h-12 w-32">
                  <Image
                    src={options.image}
                    alt="Aview-International"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
            </div>

            <div className="h-auto w-full">
              <OptionContainer optionsArray={options.options1} />
            </div>
            <div className="h-auto w-full">
              <OptionContainer optionsArray={options.options2} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const OptionContainer = ({ optionsArray }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white-transparent p-s3">
      {optionsArray.map((option, index) => {
        const isLastItem = index === optionsArray.length - 1;
        return (
          <div
            className={`flex items-start justify-start gap-x-4 ${
              !isLastItem ? 'mb-3' : ''
            }`}
            key={index}
          >
            <Image
              src={option.boolean ? check : uncheck}
              alt={option}
              width={20}
              height={20}
            />
            <p className="text-sm md:text-base">{option.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CompareTools;
