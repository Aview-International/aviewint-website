import { useState } from 'react';
import {
  COUNTRIES,
  JOIN_THE_TEAM,
  TEAM_OPEN_POSITIONS,
} from '../../../constants/constants';
import FormInput from '../../FormComponents/FormInput';
import CustomSelectInput from '../../FormComponents/CustomSelectInput';
import Button from '../../UI/Button';
import Border from '../../UI/Border';
import Form from '../../FormComponents/Form';
import { submitFile } from '../../../utils/submit-form';
import { useRouter } from 'next/router';
import UploadFile from '../../FormComponents/UploadFile';

const JoinTheTeam = () => {
  let router = useRouter();
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
    try {
      setHasSubmitted(true);
      if (
        !data.name ||
        !data.email ||
        !data.linkedin ||
        !data.position ||
        !data.resume
      )
        return;
      submitFile('team-applications', data);
      router.push('/success');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <section
      className="section m-horizontal"
      id="join-the-team"
      data-aos="fade-up-left"
    >
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
            <FormInput
              onChange={handleChange}
              isValid={JOIN_THE_TEAM[0].validator(data.name)}
              hasSubmitted={hasSubmitted}
              {...JOIN_THE_TEAM[0]}
            />
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
        <FormInput
          onChange={handleChange}
          hasSubmitted={hasSubmitted}
          isValid={JOIN_THE_TEAM[1].validator(data.email)}
          {...JOIN_THE_TEAM[1]}
        />
        <FormInput
          onChange={handleChange}
          isValid={JOIN_THE_TEAM[2].validator(data.linkedin)}
          hasSubmitted={hasSubmitted}
          {...JOIN_THE_TEAM[2]}
        />
        <CustomSelectInput
          text="What position would you like to work as?"
          options={TEAM_OPEN_POSITIONS}
          hasSubmitted={hasSubmitted}
          isValid={data.position}
          onChange={(option) => setData({ ...data, position: option })}
        />
        <input type="hidden" name="position" value={data.position} />
        <UploadFile
          data={data}
          setData={setData}
          hasSubmitted={hasSubmitted}
          isValid={data.resume}
        />
        <div className="mt-s5 flex justify-center ">
          <Button purpose="submit" type="primary">
            Send Message
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default JoinTheTeam;
