import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfCards } from './components/ListOfCards'
import { Logo } from './components/Logo'

export const App = () => {
  const urlParams = new URLSearchParams(location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)

  return (
    <>
      <GlobalStyles />
      <Logo />
      <ListOfCategories />
      <ListOfCards categoryId={2} />
    </>
  )
}
