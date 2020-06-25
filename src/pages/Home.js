import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfCards } from '../containers/ListOfCards'

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategories />
      <ListOfCards categoryId={categoryId} />
    </>
  )
}
