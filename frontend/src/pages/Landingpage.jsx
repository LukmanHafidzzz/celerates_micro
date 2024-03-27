import React, { useEffect, useRef } from 'react'

// library
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Col, Image, Row, Container } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

// component
import NavbarBefore from '../components/NavbarBefore'
import LandingSection1 from '../components/LandingSection1';
import LandingSection2 from '../components/LandingSection2';
import LandingSection2Lagi from '../components/LandingSection2Lagi';

// css
import '../assets/Landingpage.css'

export default function Landingpage() {
    useEffect(() => {
        AOS.init();
    }, []);

    const splideRef = React.useRef(null);

    const handlePrevClick = () => {
        if (splideRef.current) {
            splideRef.current.go('-1');
        }
    };

    const handleNextClick = () => {
        if (splideRef.current) {
            splideRef.current.go('+1');
        }
    };

    return (
        <>
            <section className='bg-color-dark'>
                <header className='mt-1'>
                    <NavbarBefore />
                </header>
                <section className='position-relative d-inline-block'>
                    <LandingSection1 splideRef={splideRef} />
                    <div className='position-absolute top-50 start-50 text-center translate-middle text-white fs-1 fw-medium'>
                        <p className='text-main' data-aos='fade-up' data-aos-duration='1000'>DIVE INTO CREATIVITY WITH OUR GALLERY COLLECTION</p>
                    </div>
                    <Container className="position-absolute bottom-0 start-50 text-center translate-middle w-100" data-aos='fade-up' data-aos-duration='2000'>
                        <Row className='d-flex justify-content-center align-items-end'>
                            <Col className='mb-5 text-white text-about'>
                                Pada platform kami ini akan menampilkan banyak sekali edukasi seni untuk anda dapat pelajari lebih detail. Dan tentunya menjadi platform yang selalu update, bagi kebutuhan anda.
                            </Col>
                            <Col className='justify-content-center align-items-end'>
                                <Button className='fs-5 visit-btn' variant="outline-light">Visit Gallery</Button>{' '}
                            </Col>
                            <Col className='mb-5 d-flex justify-content-end gap-3'>
                                <div className='pagination-btn' onClick={handlePrevClick}>
                                    <FaChevronLeft />
                                </div>
                                <div className='pagination-btn' onClick={handleNextClick}>
                                    <FaChevronRight />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <Container className='mb-5'>
                    <p className='fs-1 mt-5' data-aos="fade-up">Research</p>
                    <section>
                        <LandingSection2 />
                        <h4 className='fw-medium mt-3 text-center'>
                            Museum Indonesia
                        </h4>
                        <Container>
                            Museum Nasional Indonesia, atau yang sering disebut dengan Museum Gajah, adalah sebuah museum arkeologi, sejarah, etnografi, dan geografi yang terletak di Jakarta Pusat dan persisnya di Jalan Merdeka Barat 12. Museum ini merupakan museum pertama dan terbesar di Asia Tenggara.
                        </Container>
                    </section>
                </Container>
            </section>
        </>
    );
}
