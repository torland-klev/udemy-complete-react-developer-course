import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import { addItem } from '../../redux/cart/cart.actions'

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  NameContainer,
  PriceContainer,
} from './collection-item.styles'
import CollectionItemImage from './collection-item-image.component'

const CollectionItem = ({ t, item, addItem }) => {
  const { name, price, imageUrl } = item

  return (
    <CollectionItemContainer>
      <CollectionItemImage imageUrl={imageUrl} title={name} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        {t('text_add_to_cart')}
      </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
})

export default withTranslation()(
  connect(null, mapDispatchToProps)(CollectionItem)
)
