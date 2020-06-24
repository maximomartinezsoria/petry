import React from 'react'
import { ImageWrapper, Image, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useLazyLoad } from '../../hooks/useLazyLoad'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Card = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const [show, card] = useLazyLoad()

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={card}>
      { show &&
        <>
          <a href={`?detail/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </a>

          <Button onClick={() => setLiked(!liked)}>
            <Icon size="32px" />
            {likes} likes
          </Button>
        </>
      }
    </Article>
  )
}
