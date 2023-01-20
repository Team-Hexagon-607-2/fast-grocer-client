import React from 'react';

const FAQ = () => {
  return (
    <div className='w-10/12 md:w-7/12 mx-auto my-20'>
      <h2 className='text-xl md:text-3xl text-center font-bold py-5'>Frequently Asked Questions</h2>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-3">
        <div className="collapse-title text-xl font-medium">
          How does the site work?
        </div>
        <div className="collapse-content">
          <p>Fast Grocer Daily only serves one address per customer which you have to  fill out when signing up for the service. Orders are prepaid so you must recharge your Fast Grocer credit to place an order. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on place order. A Fast Grocer representative will then deliver your order right to your home or office. No cash needs to be exchanged , thereby ensuring hygiene and efficiency.</p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-3">
        <div className="collapse-title text-xl font-medium">
          How much do deliveries cost? 
        </div>
        <div className="collapse-content">
          <p>There is a BDT 19 delivery fee for every order.</p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-3">
        <div className="collapse-title text-xl font-medium">
        How do I pay? 
        </div>
        <div className="collapse-content">
          <p>we support debit cards, credit cards, bKash, and internet banking. </p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-3">
        <div className="collapse-title text-xl font-medium">
        Can I have multiple addresses under one account?
        </div>
        <div className="collapse-content">
          <p>No you cannot. One e-mail address and one contact number at a time can only be associated with one Fast Grocer Daily account.</p>
        </div>
      </div>

      <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-lg mb-3">
        <div className="collapse-title text-xl font-medium">
        I can’t find the product I am looking for. What do I do? 
        </div>
        <div className="collapse-content">
          <p>Fast Grocer only stocks basic necessities. You can request for more specific needs. </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;