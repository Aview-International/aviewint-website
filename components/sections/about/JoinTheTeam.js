import Image from 'next/image';
import { useState } from 'react';
import {
  COUNTRIES,
  JOIN_THE_TEAM,
  TEAM_OPEN_POSITIONS,
} from '../../../constants/constants';
import DottedBorder from '../../UI/DottedBorder';
import FormInput from '../../FormComponents/FormInput';
import CustomSelectInput from '../../FormComponents/CustomSelectInput';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import Button from '../../UI/Button';
import Border from '../../UI/Border';
import { data } from 'autoprefixer';
import Form from '../../FormComponents/Form';
import { submitFile } from '../../../utils/submit-form';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    console.log(e.target);
    if (
      !data.name ||
      !data.country ||
      !data.email ||
      !data.linkedin ||
      !data.position ||
      !data.resume
    )
      return;
    submitFile('team-applications', data);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 text-center">
        <span className="gradient-text gradient-2">Join the Team</span>
      </h2>
      <Form
        className="m-auto w-full md:w-9/12"
        submitHandler={handleSubmit}
        name="team-applications"
      >
        <div className="items-starts flex flex-col justify-between md:flex-row">
          <div className="md:w-[70%]">
            <FormInput onChange={handleChange} {...JOIN_THE_TEAM[0]} />
          </div>
          <div className="flex items-center md:w-[25%]">
            <Border borderRadius="[5px]">
              <select
                className="w-full rounded-[5px] bg-black p-s1 text-xl text-white"
                name="country"
                onChange={handleChange}
              >
                <option>Select Country</option>
                {COUNTRIES.map((country, i) => (
                  <option value={country} key={`country-${i}`}>
                    {country}
                  </option>
                ))}
              </select>
            </Border>
          </div>
        </div>
        <FormInput onChange={handleChange} {...JOIN_THE_TEAM[1]} />
        <FormInput onChange={handleChange} {...JOIN_THE_TEAM[2]} />
        <CustomSelectInput
          text="What position would you like to work as?"
          options={TEAM_OPEN_POSITIONS}
          onChange={(option) => setData({ ...data, position: option })}
        />
        <input type="hidden" name="position" value={data.position} />
        <UploadButton data={data} setData={setData} />
        <div className="mt-s5 flex justify-center ">
          <Button purpose="submit" type="primary">
            Send Message
          </Button>
        </div>
      </Form>
    </section>
  );
};

const UploadButton = ({ data, setData }) => {
  return (
    <DottedBorder classes="block md:inline-block">
      <label className="flex cursor-pointer flex-col items-center py-s6 md:px-s10">
        <Image src={UploadIcon} alt="Upload" />
        <p className="pt-s1 text-xl text-white">
          {data.resume === null ? 'Upload Resume' : data.resume.name}
        </p>
        <input
          type="file"
          name="resume"
          className="hidden"
          accept="application/doc, application/docx, application/pdf"
          onChange={(e) => setData({ ...data, resume: e.target.files[0] })}
        />
      </label>
    </DottedBorder>
  );
};
export default JoinTheTeam;
