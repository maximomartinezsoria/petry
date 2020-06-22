import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfCards } from './components/ListOfCards'
import { Logo } from './components/Logo'

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategories />
    <ListOfCards />
  </>
)
