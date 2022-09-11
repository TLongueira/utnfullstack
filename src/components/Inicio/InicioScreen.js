import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { actions } from '../../actions/noticiasActions'
import noticiasContext from '../../context/noticiasContext'
import NoticiasList from '../Noticias/NoticiasList'
import './inicioScreen.css'

export default function InicioScreen() {
  const { state: { filter, data },dispatch } = useContext(noticiasContext)
  const [articles, setarticles] = useState([])
  useEffect(() => {
    setarticles(data.articles)
    console.log(articles);
  }, [data])

  useEffect(() => {
    let url="https://newsapi.org/v2/top-headlines?";
    let {q,pais,categoria}=filter
    if (pais) {
      url=url+"country="+pais.value+"&"
    }
    if(categoria){
      url=url+"category="+categoria.value+"&"
    }
    if(q){
      url=url+"q="+q+"&"
    }
    if(!pais&&!categoria&&!q)
    {
      url=url+"country=ar&"
    }
    url=url+"apiKey=c6f7a287fb6d45e68ca50c958701107d"
    fetch(url)
    .then((res) => res.json())
    .then((json) =>
      dispatch({
        type: actions.set_data,
        payload: json,
      })
    );
    console.log(url);
  }, [filter])


  return (
    <>
      {
        articles &&
        <NoticiasList articles={articles} setarticles={setarticles} />
      }
      {
        !articles &&
        <Container >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </Container>
      }
    </>
  )
}
