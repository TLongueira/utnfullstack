import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import noticiasContext from '../../context/noticiasContext'
import NoticiasList from '../Noticias/NoticiasList'

export default function InicioScreen() {
  const { state: { filter, data } } = useContext(noticiasContext)
  const [articles, setarticles] = useState([])
  useEffect(() => {
    setarticles(data.articles)
    console.log(articles);
  }, [data])

  return (
    <>
      <div>InicioScreen</div>
      {
        articles &&
        <NoticiasList articles={articles} setarticles={setarticles} />
      }
      {
        !articles &&
        <div>CARGANDO REEEEY</div>
      }
    </>
  )
}
