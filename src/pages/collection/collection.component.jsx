import React from 'react'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'

import CollectionItem from '../../components/collection-item/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

import './collection.styles.scss'

const CollectionPage = ({ t, collection }) => {
  const { title, items } = collection
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  return (
    <div className='collection-page'>
      <h2 className='title'>
        {capitalizeFirstLetter(t(`text_${title.toLowerCase()}`))}
      </h2>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default withTranslation()(connect(mapStateToProps)(CollectionPage))
