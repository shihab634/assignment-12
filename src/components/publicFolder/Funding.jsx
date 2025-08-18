import axios from "axios";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CheckoutProvider, Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
const stripe = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Funding = () => {
  // Example funding data
  const [clientSecret, setClientSecret] = useState(null);
  const [funds, setFunds] = useState([
    {
      id: 1,
      name: "Shafi Ullah",
      amount: 1000,
      date: "2025-08-01T10:25:00Z",
    },
    {
      id: 2,
      name: "Amina Rahman",
      amount: 2000,
      date: "2025-07-25T08:10:00Z",
    },
  ]);

  const handleGiveFund = async () => {
    // TODO: Replace this with actual Stripe integration
    // Example: redirect to your backend or use Stripe JS SDK

    const amount = 60;
    const res = await axios.post(
      "https://assignment-12-wine.vercel.app/create-payment-intents",
      { amount }
    );

    setClientSecret(res.data.clientSecret);
  };

  const totalAmount = funds.reduce((acc, f) => acc + f.amount, 0);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Funds Dashboard</h2>
        <button className="btn btn-primary" onClick={handleGiveFund}>
          Give Fund
        </button>
      </div>

      <div className="mb-4">
        <p className="text-lg font-semibold">
          Total Funded: <span className="text-green-600">৳ {totalAmount}</span>
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Donor Name</th>
              <th>Amount (৳)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {funds.map((fund, idx) => (
              <tr key={fund.id}>
                <td>{idx + 1}</td>
                <td>{fund.name}</td>
                <td>{fund.amount}</td>
                <td>{new Date(fund.date).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Funding;
