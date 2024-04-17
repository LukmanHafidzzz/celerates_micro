import React from 'react'
import LandingSection3 from '../components/LandingSection3'
import NavbarAfter from '../components/NavbarAfter'
import Footer from '../components/Footer'
import { Container } from 'react-bootstrap'

export default function Koleksi() {
    return (
        <>
            <section className='bg-color-dark'>
                <header className='mt-1'>
                    <NavbarAfter />
                </header>
                <Container className='mt-7 mb-7'>
                    <LandingSection3 />
                </Container>
                <footer className='bg-pr-green'>
                    <Footer />
                </footer>
            </section>
        </>
    )
}
