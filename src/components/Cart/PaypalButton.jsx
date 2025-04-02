import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
const PaypalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AaBBEyDlB7B5PBjAgFsSQgzDx5OfjuUqei_olbm4Ca4h4tXlEgdi0aLvhVWPdkY2xXGTAJfd9acbiC_i",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{ amount: { value: amount } }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(onSuccess);
        }}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalButton;
