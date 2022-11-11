import Image from 'next/image';
import next from '../../../public/img/graphics/corporate/next.png';
import seekDiscomfort from '../../../public/img/graphics/corporate/seek-discomfort.png';
import valnet from '../../../public/img/graphics/corporate/valnet.png';
import wayfound from '../../../public/img/graphics/corporate/wayfound.png';
import maverick from '../../../public/img/graphics/corporate/maverick.png';
import underknown from '../../../public/img/graphics/corporate/underknown.png';
import millionTeachers from '../../../public/img/graphics/corporate/1-million-teachers.png';

const COMPANIES = [
  { name: 'NEXT', logo: next },
  { name: 'Seek Discomfort', logo: seekDiscomfort },
  { name: 'Valnet', logo: valnet },
  { name: 'Wayfound', logo: wayfound },
  { name: 'Maverick', logo: maverick },
  { name: 'Underknown', logo: underknown },
  { name: '1 Million Teachers', logo: millionTeachers },
];

export default function CompaniesWeWorkedWith() {
  return (
    <section className="section m-horizontal text-center">
      <p className="mb-s4 text-xl font-bold text-white md:mb-s8 md:text-2xl">
        Companies We&apos;ve Worked With
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-y-s10 gap-x-[20%] md:gap-x-[5%] lg:gap-x-[5%]">
        {COMPANIES.map((company, i) => (
          <div
            className="grid w-[40%] place-content-center md:w-[30%] lg:w-[20%]"
            key={company.name}
          >
            <Image src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </section>
  );
}
