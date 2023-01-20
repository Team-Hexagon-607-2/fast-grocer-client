import React from 'react';

const FAQ = () => {
  return (
    <div className='w-10/12 md:w-7/12 mx-auto my-20'>
      <h2 className='text-center mb-10 font-semibold text-3xl'>Frequently Asked Questions</h2>
      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          Focus me to see content
        </div>
        <div className="collapse-content">
          <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;