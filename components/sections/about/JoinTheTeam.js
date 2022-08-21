import Image from 'next/image';
import { useState } from 'react';
import { TEAM_OPEN_POSITIONS } from '../../../constants/constants';
import DottedBorder from '../../UI/DottedBorder';
import FormInput from '../../UI/FormInput';
import SelectInput from '../../UI/SelectInput';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import Button from '../../UI/Button';

const JoinTheTeam = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    country: '',
    email: '',
    linkedin: '',
    position: '',
    resume: null,
  });

  // refactoring in progress
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

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 text-center">
        <span className="gradient-text gradient-2">Join the Team</span>
      </h2>
      <form className="m-auto w-full md:w-9/12">
        <div className="items-starts flex flex-col justify-between md:flex-row">
          <div className="md:w-9/12">
            <FormInput onChange={handleChange} {...array[0]} />
          </div>
          <div className="md:w-1/5">
            <SelectInput text="Country" options={TEAM_OPEN_POSITIONS} />
          </div>
        </div>
        <FormInput onChange={handleChange} {...array[1]} />
        <FormInput onChange={handleChange} {...array[2]} />
        <SelectInput
          text="What position would you like to work as?"
          options={TEAM_OPEN_POSITIONS}
        />
        <UploadButton />
        <div className="mt-s4 flex justify-center ">
          <Button purpose="submit" type="primary">
            Send Message
          </Button>
        </div>
      </form>
    </section>
  );
};

const UploadButton = () => {
  return (
    <DottedBorder classes="block md:inline-block">
      <div className="flex flex-col items-center md:px-s10 py-s6">
        <Image src={UploadIcon} alt="Upload" />
        <p className="pt-s1 text-xl text-white">Upload Resume</p>
      </div>
    </DottedBorder>
  );
};
export default JoinTheTeam;
