import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CustomNavbar() {
  return (
    <>
      <Navbar bg="light" expand="lg" className='m-auto'>
        <Container>
          <Navbar.Brand>TLongueira App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="noticias">Noticias</Nav.Link>
              <Nav.Link as={Link} to="configuracion">Configuracion</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
