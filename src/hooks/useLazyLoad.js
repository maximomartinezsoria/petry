import { useState, useEffect, useRef } from 'react'

export function useLazyLoad () {
  const [show, setShow] = useState(false)
  const element = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new IntersectionObserver(([entry]) => {
        const { isIntersecting } = entry
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      observer.observe(element.current)
    })
  }, [element])

  return [show, element]
}
