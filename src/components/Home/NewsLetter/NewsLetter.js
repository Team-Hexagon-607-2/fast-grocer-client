import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./newsLetter.css";
import { toast } from "react-hot-toast";

const NewsLetter = () => {
  const form = useRef();

  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const values = {
      email: email,
    };
    // console.log(email);
    emailjs
      .send("service_f25l0nk", "template_f9u1z6j", values, "N6uKPOggiBYhG0TQ-")
      .then(
        function (response) {
          // toast.success("SUCCESS!", response.status, response.text);
          e.target.reset();
          toast.success('You have subscribed successfully!');
        },
        function (error) {
          toast.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="bg text-center flex items-center justify-center px-4 mt-10">
      <div className="w-[500px]">
        <h2 className="text-xl md:text-3xl text-center font-bold py-5 mb-20 md:mb-0">
          Newsletter{" "}
        </h2>
        <p className="text-slate-500 mt-5">
          Subscribe to the weekly newsletter for all the latest OFFERS!!
        </p>

        <form
          ref={form}
          onSubmit={handleSubscribe}
          className="relative flex items-center mt-5"
        >
          <input
            type="email"
            name="email"
            className="border-2 border-slate-300 rounded-full w-full  px-4 py-3 focus:outline-2 focus:outline-[#17dc86] duration-500"
            placeholder="Your Email Address"
            required
          />
          <button className="absolute right-2 bg-[#8BA73B] hover:bg-[#15ba73] duration-500 text-white uppercase font-semibold px-6 py-2 rounded-full">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
