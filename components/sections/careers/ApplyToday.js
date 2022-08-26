import Image from 'next/image';
import { useState } from 'react';
import {
  CAREER_APPLY_TODAY,
  LANGUAGES,
  TEAM_OPEN_POSITIONS,
} from '../../../constants/constants';
import DottedBorder from '../../UI/DottedBorder';
import FormInput from '../../FormComponents/FormInput';
import CustomSelectInput from '../../FormComponents/CustomSelectInput';
import UploadIcon from '../../../public/img/icons/upload-icon1.svg';
import Button from '../../UI/Button';
import Form from '../../FormComponents/Form';
import { submitFile } from '../../../utils/submit-form';
import MultipleSelectInput from '../../FormComponents/MultipleSelectInput';

const ApplyToday = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    languages: [],
    'Voice acting/Dubbing': '',
    position: '',
    resume: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (
      !data.name ||
      !data.email ||
      data.languages.length < 1 ||
      !data['Voice acting/Dubbing'] ||
      !data.position ||
      !data.resume
    )
      return;
    submitFile('translator-applications', {
      name: data.name,
      email: data.email,
      languages: data.languages.toString(),
      'Voice acting/Dubbing': data['Voice acting/Dubbing'],
      position: data.position,
      resume: data.resume,
    });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleMutlipleCheckbox = (e) => {
    if (data.languages.includes(e.target.textContent)) {
      let newArray = [...data.languages];
      newArray.splice(newArray.indexOf(e.target.textContent), 1);
      setData({ ...data, languages: newArray });
    } else {
      let LANGUAGAESARRAY = [...data.languages];
      LANGUAGAESARRAY.push(e.target.textContent);
      setData({ ...data, languages: LANGUAGAESARRAY });
    }
  };

  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 text-center">
        <span className="gradient-text gradient-2">Apply Today!</span>
      </h2>
      <Form
        className="m-auto w-full md:w-9/12"
        submitHandler={handleSubmit}
        name="translator-applications"
      >
        <FormInput
          onChange={handleChange}
          hasSubmitted={hasSubmitted}
          {...CAREER_APPLY_TODAY[0]}
        />
        <FormInput
          onChange={handleChange}
          hasSubmitted={hasSubmitted}
          {...CAREER_APPLY_TODAY[1]}
        />
        <div className="w-full md:w-3/5">
          <MultipleSelectInput
            text="What languages can you translate?"
            options={LANGUAGES}
            onChange={(event) => handleMutlipleCheckbox(event)}
          />
          <input
            type="hidden"
            name="languages"
            value={data.languages.toString()}
          />
        </div>
        <div className="w-full md:w-3/5">
          <CustomSelectInput
            text="Can you do voice acting/dubbing?"
            hasSubmitted={hasSubmitted}
            options={['No', 'Yes']}
            isValid={data['Voice acting/Dubbing']}
            onChange={(option) =>
              setData({ ...data, 'Voice acting/Dubbing': option })
            }
          />
          <input
            type="hidden"
            name="Voice acting/Dubbing"
            value={data['Voice acting/Dubbing']}
          />
        </div>
        <div className="w-full md:w-3/5">
          <CustomSelectInput
            text="What position are you applying to?"
            hasSubmitted={hasSubmitted}
            isValid={data.position}
            options={TEAM_OPEN_POSITIONS}
            onChange={(option) => setData({ ...data, position: option })}
          />
          <input type="hidden" name="position" value={data.position} />
        </div>
        <UPLOADBUTTON data={data} setData={setData} />
        <div className="mt-s5 flex justify-center ">
          <Button purpose="submit" type="primary">
            Send Message
          </Button>
        </div>
      </Form>
    </section>
  );
};

const UPLOADBUTTON = ({ data, setData }) => {
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
export default ApplyToday;
