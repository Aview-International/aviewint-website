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
import SelectInput from '../../FormComponents/SelectInput';
import Button from '../../UI/Button';

const GenerateAviewForCompany = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    url: '',
    email: '',
    language: '',
    'Translations/Subtitles': 'No',
    Dubbing: 'No',
    Shorts: 'No',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    console.log(e.target);
    submitForm('generate-aview', data);
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

  return (
    <section className="section m-horizontal">
      <h2 className="title mb-s4 text-center">
        Start Generating <span className="gradient-text gradient-2">Aview</span>{' '}
        Today!
      </h2>
      <Form
        className="m-auto w-full md:w-9/12"
        onSubmit={handleSubmit}
        name="generate-aview"
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
          <SelectInput
            text="What languages do you need translations for?"
            options={LANGUAGES}
            onChange={(option) => setData({ ...data, language: option })}
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
            Become a Creator
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default GenerateAviewForCompany;
