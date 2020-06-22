import React, { useState, useEffect } from 'react'
import { List, Item } from './styles'
import { Category } from '../Category'
import { url } from '../../helpers'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`${url}/categories/`)
      .then(res => res.json())
      .then(data => setCategories(data))
    setLoading(false)
  }, [])

  return { categories, loading }
}

export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      if (showFixed !== newShowFixed) setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item><Category/></Item>
          : categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )

  if (loading) return 'Loading...'

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
