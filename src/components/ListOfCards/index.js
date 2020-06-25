import React from 'react'
import { Card } from '../Card'

export const ListOfCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <li key={photo.id}><Card {...photo} /></li>)
      }
    </ul>
  )
}
