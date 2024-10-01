import { useState } from 'react';
import { useSelector } from 'react-redux';
import { createTranslator } from '../../../services/apis';
import { emailValidator } from '../../../utils/regex';
import ErrorHandler from '../../../utils/errorHandler';
import FormInput from '../../../components/FormComponents/FormInput';
import CustomSelectInput from '../../../components/FormComponents/CustomSelectInput';
import CheckBox from '../../../components/FormComponents/CheckBox';
import MultipleSelectInput from '../../../components/FormComponents/MultipleSelectInput';
import GlobalButton from '../../UI/GlobalButton';

const Onboarding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nativeLanguage: [],
    country: 'Select',
    checkedState: '',
    paymentDetails: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const supportedLanguages = useSelector((el) =>
    el.aview.supportedLanguages.map((item) => item.languageName).sort()
  );
  const countriesAndCodes = useSelector((el) =>
    el.aview.countriesAndCodes.map((item) => item.name).sort()
  );
  const paymentOptions = ['Remitly', 'Paypal', 'Xoom'];

  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const {
        name,
        email,
        nativeLanguage,
        country,
        checkedState,
        paymentDetails,
      } = formData;
      if (
        !name.trim() ||
        !email.trim() ||
        !emailValidator(email.trim()) ||
        nativeLanguage.length === 0 ||
        country === 'Select' ||
        !checkedState ||
        !paymentDetails.trim()
      ) {
        throw new Error('Please fill all fields correctly');
      }

      localStorage.setItem('emailForSignIn', email);

      await createTranslator(
        name.trim(),
        email.trim(),
        nativeLanguage,
        country,
        checkedState,
        paymentDetails.trim()
      );
      setSubmitted(true);
    } catch (error) {
      ErrorHandler(error);
    } finally {
      setLoading(false);
    }
  };

  const handleMultipleLanguages = (option) => {
    const updatedLanguages = formData.nativeLanguage.includes(option)
      ? formData.nativeLanguage.filter((lang) => lang !== option)
      : [...formData.nativeLanguage, option];
    handleInputChange('nativeLanguage', updatedLanguages);
  };

  return (
    <section className="section m-horizontal" data-aos="zoom-in-down">
      <div className="mx-auto max-w-4xl px-4 text-white">
        <h2 className="title text-center">
          <span className="gradient-text gradient-2">Work with us</span>
        </h2>

        <p className="mt-s2 mb-s5 text-center text-xl">
          Sign up today to become a translator and manage content.
        </p>

        <div className="rounded-2xl bg-white-transparent px-s4 pt-s4 pb-s14">
          <p className="mb-s2 text-3xl font-bold">Personal Information</p>
          <FormInput
            label="Name"
            placeholder="First and Last Name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            name="name"
          />

          <FormInput
            label="Email"
            value={formData.email}
            placeholder="Your email"
            onChange={(e) => handleInputChange('email', e.target.value)}
            name="email"
          />

          <MultipleSelectInput
            text="Native Languages"
            answer={formData.nativeLanguage}
            options={supportedLanguages}
            onChange={handleMultipleLanguages}
            hideCheckmark={true}
          />

          <CustomSelectInput
            text="Country"
            value={formData.country}
            options={countriesAndCodes}
            onChange={(selectedOption) =>
              handleInputChange('country', selectedOption)
            }
          />

          <div className="mt-s3 text-3xl font-bold">Payment method</div>

          {paymentOptions.map((el, idx) => (
            <div key={idx}>
              <div className="my-s1">
                <CheckBox
                  label={el}
                  onChange={() => handleInputChange('checkedState', el)}
                  name="checkbox"
                  isChecked={formData.checkedState === el}
                />
              </div>

              {formData.checkedState === el && (
                <FormInput
                  value={formData.paymentDetails}
                  placeholder="Name, username, email"
                  onChange={(e) =>
                    handleInputChange('paymentDetails', e.target.value)
                  }
                />
              )}
            </div>
          ))}
          <div className="float-right mt-s4 text-xl">
            {submitted ? (
              <p>Submission successful</p>
            ) : (
              <GlobalButton
                theme="light"
                onClick={handleSubmit}
                isLoading={loading}
                purpose={'onClick'}
              >
                Submit
              </GlobalButton>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
