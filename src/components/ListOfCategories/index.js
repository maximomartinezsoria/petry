import React, { useState, useEffect } from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('')
      .then(res => res.json())
      .then(data => setCategories(data))
  })

  return (
    <List>
      {
        categories.map(category => <Item key={category}><Category /></Item>)
      }
    </List>
  )
}
