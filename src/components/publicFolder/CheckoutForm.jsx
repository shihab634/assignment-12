import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ clientSecret, data }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!stripe) {
      return;
    }

    setLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      // handleError(submitError);
      console.log("submitError", submitError);

      return;
    }

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      clientSecret,
      redirect: "if_required",
    });

    if (error) {
      // handleError(error);
      console.log("submitError", submitError);
      return;
    }

    console.log(paymentIntent, "paymentIntent");
    // mongodb request
    // data
  };

  return (
    <form onSubmit={submitHandler}>
      <PaymentElement options={{ layout: "auto" }} />
      <button disabled={loading}>Submit</button>
    </form>
  );
};

export default CheckoutForm;
