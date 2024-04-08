import React from 'react'

// Library
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

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
                            <Link to={'/'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Home</Link>
                            <Link to={'/'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Learn</Link>
                            <Link to={'/'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Collections</Link>
                            <Link to={'/'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Review</Link>
                            <Link to={'/'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Agenda</Link>
                            <Link to={'/'} className='text-link text-decoration-none me-3 d-flex align-items-center'>News</Link>
                            <Nav.Link href="#deets" className='me-3'>|</Nav.Link>
                            <Link to={'/register'} className='text-link text-decoration-none me-3 d-flex align-items-center justify-content-center'>Sign Up</Link>
                            <Link to={'/login'} className='text-decoration-none log-btn d-flex align-items-center justify-content-center'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
