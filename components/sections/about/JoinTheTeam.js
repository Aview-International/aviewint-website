import { useState } from 'react';
import DottedBorder from '../../UI/DottedBorder';
import FormInput from '../../UI/FormInput';
import SelectInput from '../../UI/SelectInput';

const JoinTheTeam = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const array = [
    {
      _id: 'name',
      label: 'Name',
      placeholder: 'Your Name',
      name: 'name',
    },
    {
      _id: 'email',
      label: 'Email address',
      placeholder: 'Your email address',
      name: 'email',
    },
    {
      _id: 'linkedin',
      label: 'LinkedIn',
      placeholder: 'LinkedIn URL',
      name: 'linkedin',
    },
  ];
  return (
    <section>
      <h2 className="title mb-s4 text-center">
        <span className="gradient-text gradient-2">Join the Team</span>
      </h2>
      <form className="m-auto w-full md:w-9/12">
        <div className="items-starts flex">
          <FormInput {...array[0]} />
          <div className="w-1/5">{/* <SelectInput text="Country" /> */}</div>
        </div>
        <FormInput {...array[1]} />
        <FormInput {...array[2]} />
        <DottedBorder>
          <p className="rounded-[15px] bg-black p-s2 text-white">
            Upload Resume
          </p>
        </DottedBorder>
      </form>
    </section>
  );
};

export default JoinTheTeam;
