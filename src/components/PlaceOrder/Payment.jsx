import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { StateContext } from "../../contexts/AuthProvider";
import CheckoutForm from "./CheckoutForm ";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import UseTitle from "../../hooks/UseTitle";
const stripePromise = loadStripe(
  "pk_test_51M6RZkBTug5LZU4zCk5W0QrAY49XMvfelTEHbrn78yqa2CdZeGxYBI306Oo2ZbcdKwsykWHnvcayykkCp1GwnDON000h0oFDBQ"
);
const Payment = () => {
  UseTitle('Payment')
  const { state } = useLocation();

  return (
    <div className="flex flex-col items-center h-[50vh] mt-10">
      <p className="text-xl">
        Please pay <strong>৳{state?.total_price}</strong> for your Order
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm order={state} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

// REACT_APP_STRIPE_PK=pk_test_51M7uaiKLQOSRZ6tDZ1WUbir3Kq90mGPqiWZ6xZN9GiO3f37zaqxVrIOuzQo7wYCse6SytLjOnGs4FOK8A2rBXo9200roMZOJah
