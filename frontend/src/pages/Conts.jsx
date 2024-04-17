import React from 'react'

// Library
import { Container, Image } from 'react-bootstrap';
import Spline from '@splinetool/react-spline';

// Components
import Footer from '../components/Footer';
import NavbarAfter from '../components/NavbarAfter';

// css
import '../assets/Landingpage.css'
import '../assets/Global.css'

export default function Conts() {
    return (
        <>
            <section>
                <header className='mt-1'>
                    <NavbarAfter />
                </header>
                <Container className='mt-7 mb-7'>
                    <Image src='/images/collection-1.png' className='w-100' data-aos='fade-up' data-aos-duration='1000'/>
                    <div className='fw-semibold fs-3 mt-3' data-aos='fade-up' data-aos-duration='1000'>Pemburuan Rusa</div>
                    <div className='fw-semibold fs-6 mt-1' data-aos='fade-up' data-aos-duration='1000'>Galeri Nasional Indonesia</div>
                    <hr data-aos='fade-up' data-aos-duration='1000'/>
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        Lukisan dengan nama internasional “The Deer Hunt” ini terjual di Singapura seharga 1.8 miliar dolar pada tahun 1996. Karya ini merupakan salah satu lukisan paling simbolis Raden Saleh yang menggambarkan perjuangan untuk bertahan hidup.
                    Pada era ini, Raden Saleh juga menciptakan berbagai lukisan, antara lain The Lion Hunt (1841), The Bull Hunt (1851), dan juga Fighting the Lion (1870).
                    </div>
                    <div data-aos='fade-up' data-aos-duration='1000'>
                        <Spline scene="https://prod.spline.design/TpybHMknILDf6cXS/scene.splinecode" />
                    </div>
                </Container>
                <footer className='bg-pr-green'>
                    <Footer />
                </footer>
            </section>
        </>
    )
}
