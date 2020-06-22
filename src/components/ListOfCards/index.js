import React from 'react'
import { List, Item } from './styles'
import { Card } from '../Card'

export const ListOfCards = () => {
  return (
    <ul>
      {
        [1, 2, 3].map(card => <li key={card}><Card /></li>)
      }
    </ul>
  )
}
