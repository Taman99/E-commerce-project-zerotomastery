import React from 'react';
import StripeCheckout from 'react-stripe-checkout'; 

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const STRIPE_PUBLISHABLE_KEY = 'pk_test_51K40QDSD5vfnQaQ3tAN2Hkbcp4ekmAANwjYWgfWW2O1PTdxg4BoBsMDTLMnPEb3SRmXIwheUapDKrNJEXzQVDoZz001J9AA3VU';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return (
        <div>
            <StripeCheckout
                label='Pay now'
                name='CROWN Clothing'
                billingAddress
                shippingAddress
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='pay'
                token={onToken} // callback func : returns result of stripe request
                stripeKey={STRIPE_PUBLISHABLE_KEY}
           />
        </div>
    )
}

export default StripeButton;
