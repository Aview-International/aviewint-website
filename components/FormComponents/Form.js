import { useState } from 'react';

/**
 * Container for forms
 *
 * @prop name: Name of the form
 * @prop formState: State containing form inputs
 * @prop children: Form input elements
 */
function Form({ name, submitHandler, className, children }) {
  const [honeypot, setHoneypot] = useState('');

  function honeypotChangeHandler(e) {
    setHoneypot(e.target.value);
  }

  function onSubmit(e) {
    if (honeypot === '') {
      submitHandler(e);
    }
  }

  return (
    <form
      name={name}
      method="POST"
      autoComplete="on"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
      onSubmit={onSubmit}
      className={className}
    >
      <div className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:
          <input
            name="bot-field"
            value={honeypot}
            onChange={honeypotChangeHandler}
          />
        </label>
      </div>
      {children}
    </form>
  );
}

export default Form;
