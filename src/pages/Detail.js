import React from 'react'
import { CardWithQuery } from '../containers/CardWithQuery'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => (
  <Layout title={`Picture ${detailId}`}>
    <CardWithQuery id={detailId} />
  </Layout>
)
