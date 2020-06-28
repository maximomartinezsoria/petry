import React from 'react'
import { FavsWithQuery } from '../containers/GetFavourites'
import { Layout } from '../components/Layout'

export const Favs = () => (
  <>
    <Layout title="Your favourites">
      <FavsWithQuery/>
    </Layout>
  </>
)
