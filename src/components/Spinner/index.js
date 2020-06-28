import React from 'react'
import { SpinnerBox, LoadingIcon } from './styles'

export const Spinner = () => {
  return (
    <SpinnerBox className="spinner-box">
      <LoadingIcon className="loading-icon" />
      <span>Loading...</span>
    </SpinnerBox>
  )
}
