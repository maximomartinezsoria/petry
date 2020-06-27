import React from 'react'
import { ImageWrapper, Image, Button, Article } from './styles'
import { useLazyLoad } from '../../hooks/useLazyLoad'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Card = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, card] = useLazyLoad()

  return (
    <Article ref={card}>
      { show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} />
            </ImageWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: { input: { id } } })
                }

                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>
        </>
      }
    </Article>
  )
}
