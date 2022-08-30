import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

export default function CustomNavbar() {
  return (
    <>
    <Navbar bg="light" expand="lg" className='m-auto'>
        <Navbar.Brand href="inicio">TLongueira App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="inicio">Inicio</Nav.Link>
            <Nav.Link href="tiendas">Tiendas</Nav.Link>
            <Nav.Link href="personal">Personal</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}
