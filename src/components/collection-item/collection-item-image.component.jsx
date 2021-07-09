import React from 'react'

import Spinner from '../spinner/spinner.component'
import './collection-item-image.styles.scss'

const CollectionItemImage = ({ imageUrl, title }) => {
  const [loading, setLoading] = React.useState(true)
  const spinner = loading ? <Spinner /> : null
  const img = (
    <img
      src={imageUrl}
      onLoad={() => setLoading(false)}
      alt={title}
      style={{ display: loading ? 'none' : 'block' }}
    />
  )
  return (
    <div className='collection-item-image' title={title}>
      {spinner} {img}
    </div>
  )
}

export default CollectionItemImage
