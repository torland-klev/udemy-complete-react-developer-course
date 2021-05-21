import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ t, item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}/>
        <div className='collection-footer'>
          <span className='name'>{ name }</span>
          <span className='price'>{ price }</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {t('text_add_to_cart')}
      </CustomButton>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default withTranslation()(
  connect(
    null,
    mapDispatchToProps
    )(CollectionItem)
);