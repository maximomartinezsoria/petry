import React from 'react'
import { ImageWrapper, Image, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Card = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  return (
    <article>
      <a href={id}>
        <ImageWrapper>
          <Image src={src} />
        </ImageWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size="32px" />
        {likes} likes
      </Button>
    </article>
  )
}
