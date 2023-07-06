import React from 'react';

const ComingSoon = ({ children, stage }) => {
  return (
    <div className="border-slate-100 relative cursor-not-allowed rounded-2xl">
      {children}
      <div
        className={`absolute inset-0 ${
          stage && 'bg-black/70'
        } z-50 bg-black/70 ${
          stage == 1 &&
          'flex items-center md:mr-8 mr-0 justify-center text-center text-2xl font-bold'
        }`}
      >
        {stage == 1 ? 'Coming Soon' : ''}
      </div>
    </div>
  );
};

export default ComingSoon;
