import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { withTranslation } from "react-i18next";

const StripeCheckoutButton = ({ t, i18n, price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51ItZOmEjXv5LiqR3MoTOvGDyO3cI0B0KzFPzpan3MQybpYwJpD0YAhOUe5zElCdNJHXl3chBHqN60aWusxT75p4U00HDegVQBy";

  const onToken = (token) => {
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label={t("text_pay_now")}
      name="FinmarksFlue"
      billingAddress
      shippingAddress
      currency="NOK"
      image={`${process.env.PUBLIC_URL}/fish.svg`}
      description={`${t("text_your_total_is")} ${price} NOK`}
      locale={i18n.language}
      amount={priceForStripe}
      panelLabel={t("text_pay_now")}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withTranslation()(StripeCheckoutButton);
