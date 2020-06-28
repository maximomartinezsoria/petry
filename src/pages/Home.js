import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfCards } from '../containers/ListOfCards'
import { Helmet } from 'react-helmet'

export const Home = ({ categoryId }) => {
  return (
    <>
      <Helmet>
        <title>Cute animal pictures | Petry 🦊</title>
      </Helmet>
      <ListOfCategories />
      <ListOfCards categoryId={categoryId} />
    </>
  )
}
