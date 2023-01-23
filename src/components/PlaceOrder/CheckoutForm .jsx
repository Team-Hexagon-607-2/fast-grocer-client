import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const CheckoutForm = ({ order }) => {
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const { total_price } = order;
  const price = total_price / 100;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    setLoading(true);
    fetch("https://fg-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.clientSecret);
        setClientSecret(data?.clientSecret);
      })
      .catch((error) => console.log(error))
      .finally((solve) => setLoading(false));
    setLoading(false);
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);
    // confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: order?.name,
            email: order?.email,
          },
        },
      });

    console.log(paymentIntent);
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      toast.success("payment success");

      //store order info in the database
      const orderWithPayment = {
        ...order,
        paid: true,
        transactionId: paymentIntent?.id,
      };
      console.log(orderWithPayment);
      setProcessing(false);
      setLoading(true);
      fetch("https://fg-server.vercel.app/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderWithPayment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.status === true) {
            setLoading(false);
            setProcessing(false);
            setSuccess("Congrats! your payment completed");
            setTransactionId(paymentIntent?.id);
            toast.success("order success");
          }
        });
    }
    setProcessing(false);
    setLoading(false);
  };

  if (loading) return <div>Loading...</div>;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn  mt-10 px-10 bg-[#FF5F3D] border-[#FF5F3D]  "
          type="submit"
          disabled={!stripe || processing || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardError}</p>
      {success && (
        <div className="mt-10">
          <p className="text-green-500 text-xl">{success}</p>
          <p className="mt-2 font-bold text-xl">
            Your transactionId: {""}
            <span className="font-bold text-[#FF5F3D]">{transactionId}</span>
          </p>
          <Link
            to="/dashboard/my-orders"
            className="underline mt-[10px] font-semibold text-blue"
          >
            See Your Order
          </Link>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
