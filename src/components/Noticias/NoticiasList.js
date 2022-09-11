import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import NoticiaCard from './NoticiaCard';
import "./noticiasList.css"

export default function NoticiasList({ articles }) {
  const [paginado, setPaginado] = useState(10)
  const [mostrarCargarMas, setmostrarCargarMas] = useState(true)
  useEffect(() => {
    console.log(articles);
    // fetch("https://62ffcbd734344b6431014f67.mockapi.io/store/api/usuarios").then(res => res.json().then(data => {
    //   console.log(data);
    // }))

    // fetch("https://countryapi.io/api/all",{
    //   headers : {
    //     'Authorization': 'Bearer 1OYBJWFy4BT8e43ugesMk86Qi52C7AU8OsKTjOMp'
    //   }
    // }).then(res=>res.json().then(data=>{
    //   console.log(data);
    // }))
  }, [])
  useEffect(() => {
    if (paginado+10 > articles.length) {
      setmostrarCargarMas(false)
    }
  }, [paginado])
  
  let cargarSiguientes = () => {
    setPaginado((prevState) => prevState + 10)

  }

  return (
    <Container>

      <Row xs={1} md={3} className="g-4">
        {
          articles
            .slice(0, paginado)
            .map(article => (
              <Col>
                <NoticiaCard article={article} />
              </Col>
            ))
        }
      </Row>
      {
        mostrarCargarMas &&
        <Button className='bloque mt-4 m-auto' onClick={cargarSiguientes} variant="success">
          <b>Cargar más</b>
        </Button>
      }
    </Container>
  )
}
