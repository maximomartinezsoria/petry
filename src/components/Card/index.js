import React from 'react'
import { ImageWrapper, Image, Button, Article } from './styles'
import { useLazyLoad } from '../../hooks/useLazyLoad'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'

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

Card.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue == undefined) {
      return new Error(`${propName} must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} must be greather than 0`)
    }
  }
}
