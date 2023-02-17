import React, { useState } from 'react';

const FAQ = () => {
  const [toggle, setToggle] = useState(false);

  const faqs = [
    {
      _id: 1,
      question: 'How does the site work?',
      answer: 'Fast Grocer Daily only serves one address per customer which you have to  fill out when signing up for the service. Orders are prepaid so you must recharge your Fast Grocer credit to place an order. You can browse the site or use our search engine to find your desired products. You can then add them to your shopping bag and click on place order. A Fast Grocer representative will then deliver your order right to your home or office. No cash needs to be exchanged , thereby ensuring hygiene and efficiency.',
    },
    {
      _id: 2,
      question: 'How much do deliveries cost?',
      answer: 'There is a BDT 29 delivery fee for every order inside Dhaka city..',
    },
    {
      _id: 3,
      question: 'How do I pay? ',
      answer: 'we support debit cards, credit cards, bKash, and internet banking.',
    },
    {
      _id: 4,
      question: ' Can I have multiple addresses under one account?',
      answer: 'No you cannot. One e-mail address and one contact number at a time can only be associated with one Fast Grocer Daily account.',
    },
    {
      _id: 5,
      question: 'I can not find the product I am looking for. What do I do? ',
      answer: 'Fast Grocer only stocks basic necessities. You can request for more specific needs. '
    }
  ];

  return (
    <div className='w-10/12 md:w-7/12 mx-auto mb-20 pt-10'>
      <h2 className='text-xl md:text-3xl text-center font-bold py-5'>Frequently Asked Questions</h2>
      {
        faqs.map(faq =>
          <div onClick={() => setToggle(!toggle)} tabIndex={faq._id} key={faq._id} className="collapse collapse-plus cursor-pointer shadow hover:shadow-stone-400 border border-base-300 bg-base-100 rounded-lg mb-3">
            <div className="collapse-title text-xl font-medium">
              {faq.question}
            </div>
            <div className={toggle ? "collapse-content hidden" : "collapse-content"}>
              <p>{faq.answer}</p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default FAQ;