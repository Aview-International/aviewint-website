import { useState } from 'react';
import {
  CAREER_APPLY_TODAY,
  LANGUAGES,
  TEAM_OPEN_POSITIONS,
} from '../../../constants/constants';
import FormInput from '../../FormComponents/FormInput';
import CustomSelectInput from '../../FormComponents/CustomSelectInput';
import Button from '../../UI/Button';
import Form from '../../FormComponents/Form';
import { submitFile } from '../../../utils/submit-form';
import MultipleSelectInput from '../../FormComponents/MultipleSelectInput';
import { useRouter } from 'next/router';
import UploadFile from '../../FormComponents/UploadFile';
import { emailValidator } from '../../../utils/regex';

const ApplyToday = () => {
  const router = useRouter();

  const [hasSubmitted, setHasSubmitted] = useState(false);

  const [data, setData] = useState({
    name: '',
    email: '',
    languages: [],
    'Voice acting/Dubbing': '',
    position: '',
    resume: null,
    isEmpty: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setHasSubmitted(true);
      if (
        !data.name ||
        !data.email ||
        data.languages.length < 1 ||
        !data['Voice acting/Dubbing'] ||
        !data.position ||
        !data.resume
      ) {
        setData({ ...data, isEmpty: true });
        return;
      }

      submitFile('translator-applications', {
        name: data.name,
        email: data.email,
        languages: data.languages.toString(),
        'Voice acting/Dubbing': data['Voice acting/Dubbing'],
        position: data.position,
        resume: data.resume,
      });

      router.push('/success');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleMutlipleCheckbox = (option) => {
    if (data.languages.includes(option)) {
      let newArray = [...data.languages];
      newArray.splice(newArray.indexOf(option), 1);
      setData({ ...data, languages: newArray });
    } else {
      let languagesArray = [...data.languages];
      languagesArray.push(option);
      setData({ ...data, languages: languagesArray });
    }
  };

  return (
    <section
      className="section m-horizontal"
      id="apply-today"
      data-aos="zoom-out-up"
    >
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
          isValid={data.name.length > 2}
          {...CAREER_APPLY_TODAY[0]}
        />
        <FormInput
          onChange={handleChange}
          hasSubmitted={hasSubmitted}
          isValid={emailValidator(data.email)}
          {...CAREER_APPLY_TODAY[1]}
        />
        <div className="w-full md:w-3/5 text-white">
          <MultipleSelectInput
            text="What languages can you translate?"
            options={LANGUAGES}
            answer={data.languages}
            hasSubmitted={hasSubmitted}
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
              setData({ ...data, ['Voice acting/Dubbing']: option })
            }
            value={data['Voice acting/Dubbing']}
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
            value={data.position}
          />
          <input type="hidden" name="position" value={data.position} />
        </div>
        <UploadFile
          data={data}
          setData={setData}
          hasSubmitted={hasSubmitted}
          isValid={data.resume}
        />
        {data.isEmpty && (
          <p className="my-s3 text-center text-xl text-white">
            Please select from the options above to continue
          </p>
        )}
        <div className="mt-s5 flex justify-center ">
          <Button purpose="submit" type="primary">
            Send Message
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default ApplyToday;
