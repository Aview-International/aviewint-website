import { useRouter } from 'next/router';
import { useState } from 'react';
import { GLOBAL_NEWSLETTER } from '../../../constants/constants';
import { emailValidator } from '../../../utils/regex';
import { submitForm } from '../../../utils/submit-form';
import Form from '../../FormComponents/Form';
import FormInput from '../../FormComponents/FormInput';
import FullWidthGradient from '../../layout/FullWidthGradient';
import Button from '../../UI/Button';

const GoGlobal = () => {
  let router = useRouter();
  const [mail, setMail] = useState({
    email: '',
    hasSubmitted: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(mail);
      setMail({ ...mail, hasSubmitted: false });
      submitForm('newsletter', { email: mail.email });
      router.push('/success');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section text-center">
      <FullWidthGradient>
        <h2 className="title mb-s2">Want To Go Global?</h2>
        <p className="body mb-s2">Give us your email. We will do the rest.</p>
        <Form name="newsletter" submitHandler={handleSubmit}>
          <div className="mx-auto max-w-[610px]">
            <FormInput
              onChange={(e) => setMail({ ...mail, email: e.target.value })}
              hasSubmitted={mail.hasSubmitted}
              isValid={emailValidator(mail.email)}
              {...GLOBAL_NEWSLETTER}
            />
          </div>
          <p className="mt-s1 mb-s4 text-left text-xs text-white md:text-center md:text-sm">
            By signing up you agree to receive communications via email. For
            more information please refer to our Privacy Policy.
          </p>
          <Button type="tertiary" purpose="submit">
            Subscribe
          </Button>
        </Form>
      </FullWidthGradient>
    </section>
  );
};

export default GoGlobal;
