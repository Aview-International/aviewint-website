import { useState } from 'react';
import {
  GENERATE_AVIEW_CHECKBOX,
  GENERATE_AVIEW_INPUT,
  LANGUAGES,
} from '../../../constants/constants';
import { submitForm } from '../../../utils/submit-form';
import CheckBox from '../../FormComponents/CheckBox';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormInput';
import Button from '../../UI/Button';
import MultipleSelectInput from '../../FormComponents/MultipleSelectInput';
import { useRouter } from 'next/router';

const GenerateAview = () => {
  let router = useRouter();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    url: '',
    email: '',
    languages: [],
    'Translations/Subtitles': 'No',
    Dubbing: 'No',
    Shorts: 'No',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setHasSubmitted(true);
      if (!data.name || !data.url || !data.email) return;
      submitForm('generate-aview', {
        name: data.name,
        url: data.url,
        email: data.email,
        languages: data.languages.toString(),
        'Translations/Subtitles': data['Translations/Subtitles'],
        Dubbing: data['Dubbing'],
        Shorts: data['Shorts'],
      });
      router.push('/success');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const hanldeCheckBox = (e) => {
    if (e.target.checked) {
      setData({
        ...data,
        [e.target.name]: 'Yes',
      });
    } else {
      setData({
        ...data,
        [e.target.name]: 'No',
      });
    }
  };
  const handleMutlipleCheckbox = (option) => {
    if (data.languages.includes(option)) {
      let newArray = [...data.languages];
      newArray.splice(newArray.indexOf(option), 1);
      setData({ ...data, languages: newArray });
    } else {
      let LANGUAGAESARRAY = [...data.languages];
      LANGUAGAESARRAY.push(option);
      setData({ ...data, languages: LANGUAGAESARRAY });
    }
  };

  return (
    <section
      className="section m-horizontal -mt-s4 pt-s4 md:-mt-s8 md:pt-s8"
      id="generate-aview"
      data-aos="fade-left"
    >
      <h2 className="title mb-s4 text-center">
        Start Generating <span className="gradient-text gradient-2">Aview</span>{' '}
        Today!
      </h2>
      <Form
        name="generate-aview"
        className="m-auto w-full md:w-9/12"
        submitHandler={handleSubmit}
      >
        {GENERATE_AVIEW_INPUT.map((item, i) => (
          <FormInput
            key={`input-${i}`}
            onChange={handleChange}
            hasSubmitted={hasSubmitted}
            isValid={item.validator(data[item.name])}
            {...item}
          />
        ))}
        <div className="w-full md:w-3/5">
          <MultipleSelectInput
            text="What languages do you need translations for?"
            options={LANGUAGES}
            answer={data.languages}
            onChange={(event) => handleMutlipleCheckbox(event)}
          />
          <input
            type="hidden"
            name="languages"
            value={data.languages.toString()}
          />
        </div>
        {GENERATE_AVIEW_CHECKBOX.map((checkbox, i) => (
          <CheckBox
            key={`checkbox-${i}`}
            onChange={hanldeCheckBox}
            {...checkbox}
          />
        ))}
        <div className="mt-s4 flex items-center justify-center">
          <Button type="secondary" purpose="submit" route="/#generate-aview">
            Submit
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default GenerateAview;
