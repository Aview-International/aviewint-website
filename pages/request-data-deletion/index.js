const RequestDataDeletion = () => {
  return (
    <div className="text-center text-white">
      <h1 className="mt-s10 mb-s5 text-6xl">Now that you are here</h1>
      <p className="m-auto w-full text-xl md:w-1/2">
        If you would like to Access, Modify, Delete, or Challenge the Data
        Collected , If you would like to know if we have collected your personal
        data, how we have used your personal data, if we have disclosed your
        personal data and to who we disclosed your personal data, if you would
        like your data to be deleted or modified in any way, or if you would
        like to exercise any of your other rights under the GDPR, please contact
        our data protection officer here: Julia McKay{' '}
        <a
          href="mailto:julia@aviewint.com"
          className="gradient-1 gradient-text"
        >
          julia@aviewint.com
        </a>{' '}
        or call{' '}
        <a href="tel:+19059021724" className="gradient-1 gradient-text">
          +1 (905) 902-1724
        </a>
      </p>
    </div>
  );
};

export default RequestDataDeletion;
