import React from 'react'
import { Card } from '../components/Card'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto ($id: ID!){
    photo (id: $id){
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const renderProp = ({ loading, error, data = {} }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Ups, something went wrong. Please try again!</p>
  const { photo = {} } = data
  return <Card {...photo} />
}

export const CardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
)
