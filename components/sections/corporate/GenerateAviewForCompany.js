import { useState } from 'react';
import {
  GENERATE_AVIEW_CHECKBOX,
  GENERATE_AVIEW_COMPANY_INPUT,
  LANGUAGES,
} from '../../../constants/constants';
import { submitForm } from '../../../utils/submit-form';
import CheckBox from '../../FormComponents/CheckBox';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormInput';
import PhoneNumberInput from '../../FormComponents/PhoneNumberInput';
import MultipleSelectInput from '../../FormComponents/MultipleSelectInput';
import Button from '../../UI/Button';
import { useRouter } from 'next/router';
import Textarea from '../../FormComponents/Textarea';

const GenerateAviewForCompany = ({ title }) => {
  let router = useRouter();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [data, setData] = useState({
    name: '',
    companyName: '',
    companyUrl: '',
    email: '',
    phone: '',
    languages: [],
    additionalInfo: '',
    'Translations/Subtitles': 'No',
    Dubbing: 'No',
    Shorts: 'No',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setHasSubmitted(true);
      if (
        !data.name ||
        !data.companyName ||
        !data.companyUrl ||
        data.phone.length < 10 ||
        data.phone.length > 18
      )
        return;
      await submitForm('generate-aview-for-company', {
        name: data.name,
        companyName: data.companyName,
        companyUrl: data.companyUrl,
        email: data.email,
        phone: data.phone,
        languages: data.languages.toString(),
        additionalInfo: data.additionalInfo,
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
  const handleCheckBox = (e) => {
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

  const textarea = {
    _id: 'additionalInfo',
    placeholder: 'Additional information',
    label: "Is there anything else you'd like us to know? (Optional)",
    name: 'additionalInfo',
  };
  return (
    <section className="section m-horizontal" id="generate-aview">
      <h2 className="title mb-s4 text-center">
        <span className="gradient-text gradient-2">{title}</span>
      </h2>
      <Form
        className="m-auto w-full md:w-9/12"
        submitHandler={handleSubmit}
        name="generate-aview-for-company"
      >
        {GENERATE_AVIEW_COMPANY_INPUT.map((item, i) => (
          <FormInput
            key={`input-${i}`}
            onChange={handleChange}
            hasSubmitted={hasSubmitted}
            isValid={item.validator(data[item.name])}
            {...item}
          />
        ))}
        <div className="mb-s5">
          <PhoneNumberInput
            label="Phone Number"
            hasSubmitted={hasSubmitted}
            value={data.phone}
            isValid={data.phone?.length > 10 && data.phone?.length < 18}
            onChange={(number) => setData({ ...data, phone: number })}
          />
          <input type="hidden" name="phone" value={data.phone} />
        </div>
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
        <Textarea onChange={handleChange} {...textarea} />
        {GENERATE_AVIEW_CHECKBOX.map((checkbox, i) => (
          <CheckBox
            key={`checkbox-${i}`}
            onChange={handleCheckBox}
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

export default GenerateAviewForCompany;
