import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withTranslation } from 'react-i18next';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';



const CheckoutPage = ({ t, cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>{t('text_product')}</span>
      </div> 
      <div className='header-block'>
        <span>{t('text_description')}</span>
      </div> 
      <div className='header-block'>
        <span>{t('text_quantity')}</span>
      </div> 
      <div className='header-block'>
        <span>{t('text_price')}</span>
      </div> 
      <div className='header-block'>
        <span>{t('text_remove')}</span>
      </div>
    </div>
    {
      cartItems.map(item => 
        <CheckoutItem key={item.id} item={item}/>  
      )
    }
    <div className='total'>
      <span>{t('text_sum').toUpperCase()}: &nbsp;&nbsp;{total},-</span>
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default withTranslation()(connect(mapStateToProps)(CheckoutPage));