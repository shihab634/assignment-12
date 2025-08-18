import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe(import.meta.env.VITE_STRIPE_PK);

const CheckoutFormInit = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    amount: null,
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const amount = form.amount.value;

    const res = await axios.post(
      "https://assignment-12-wine.vercel.app/create-payment-intents",
      { amount: amount }
    );

    setData({ name, email, amount });
    setClientSecret(res.data.clientSecret);
  };

  return (
    <div>
      {!clientSecret && (
        <form onSubmit={onSubmit}>
          {/* name, email, amount */}

          <button>Next</button>
        </form>
      )}

      {clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} data={data} />
        </Elements>
      )}
    </div>
  );
};

export default CheckoutFormInit;
