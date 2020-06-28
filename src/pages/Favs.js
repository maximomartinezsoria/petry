import React from 'react'
import { FavsWithQuery } from '../containers/GetFavourites'
import { Layout } from '../components/Layout'

export default function Favs () {
  return (
    <Layout title="Your favourites">
      <FavsWithQuery/>
    </Layout>
  )
}
