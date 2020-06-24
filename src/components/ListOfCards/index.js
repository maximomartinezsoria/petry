import React from 'react'
import { Card } from '../Card'
import { graphql } from 'react-apollo'
import { gql } from 'apollo-boost'

const withPhotos = graphql(gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`)

const ListOfCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {
        photos.map(photo => <li key={photo.id}><Card {...photo} /></li>)
      }
    </ul>
  )
}

export const ListOfCards = withPhotos(ListOfCardsComponent)
