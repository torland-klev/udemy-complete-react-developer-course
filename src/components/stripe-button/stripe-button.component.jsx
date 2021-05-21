import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51ItZOmEjXv5LiqR3MoTOvGDyO3cI0B0KzFPzpan3MQybpYwJpD0YAhOUe5zElCdNJHXl3chBHqN60aWusxT75p4U00HDegVQBy';

  const onToken = token => {
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='FinmarksFlue'
      billingAddress
      shippingAddress
      currency="NOK"
      image={`${process.env.PUBLIC_URL}/fish.svg`}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;