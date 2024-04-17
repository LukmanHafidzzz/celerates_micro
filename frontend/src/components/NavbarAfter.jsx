import React from 'react'

// Library
import { Container, Nav, Navbar, NavDropdown, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

// css
import '../assets/Navbar.css'
import '../assets/Global.css'

export default function NavbarAfter() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className='p-3' bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src='/images/logo-1.png' className='w-50' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"></Nav>
                        <Nav>
                            <Link to={'/home'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Home</Link>
                            <Link to={'/home'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Learn</Link>
                            <Link to={'/home'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Collections</Link>
                            <Link to={'/home'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Review</Link>
                            <Link to={'/home'} className='text-link text-decoration-none me-3 d-flex align-items-center'>Agenda</Link>
                            <Link to={'/home'} className='text-link text-decoration-none me-3 d-flex align-items-center'>News</Link>
                            <Nav.Link href="#deets" className='me-3'>|</Nav.Link>
                            <Link to={'/'} className='text-decoration-none log-btn d-flex align-items-center justify-content-center'>Keluar</Link>
                            <Link to={'/'} className='text-decoration-none user-btn d-flex align-items-center justify-content-center'><CgProfile /></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
