import React from 'react'

// Library
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'

// css
import '../assets/NavbarBefore.css'
import '../assets/Global.css'

export default function NavbarBefore() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='p-4' bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">Infinity Insight</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link href="#deets">Learn</Nav.Link>
                            <Nav.Link href="#deets">Collections</Nav.Link>
                            <Nav.Link href="#deets">Review</Nav.Link>
                            <Nav.Link href="#deets">Agenda</Nav.Link>
                            <Nav.Link href="#deets" className='me-3'>News</Nav.Link>
                            <Nav.Link href="#deets" className='me-3'>|</Nav.Link>
                            <Nav.Link href="#deets" className='me-3'>Sign Up</Nav.Link>
                            <Nav.Link href="#deets" className='log-btn'>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
