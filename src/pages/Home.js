import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfCards } from '../containers/ListOfCards'
import { Helmet } from 'react-helmet'

export const HomePage = ({ categoryId }) => {
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

export const Home = React.memo(HomePage, (prevProps, props) => prevProps.categoryId === props.categoryId)
