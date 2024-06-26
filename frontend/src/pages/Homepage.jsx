import React, { useEffect, useRef } from 'react'

// library
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Col, Image, Row, Container, Tab, Nav } from 'react-bootstrap'
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";

// component
import NavbarBefore from '../components/NavbarBefore'
import LandingSection1 from '../components/LandingSection1';
import LandingSection2Lagi from '../components/LandingSection2Lagi';
import LandingSection3 from '../components/LandingSection3';
import LandingSection4 from '../components/LandingSection4';
import LandingSection5 from '../components/LandingSection5';
import Footer from '../components/Footer';
import NavbarAfter from '../components/NavbarAfter';

// css
import '../assets/Landingpage.css'
import '../assets/Global.css'

export default function Homepage() {
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
                    <NavbarAfter />
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

                <Container className='m-container'>
                    <p className='fs-1' data-aos="fade-up">Research</p>
                    <section data-aos="fade-up" data-aos-duration='1000'>
                        <LandingSection2Lagi />
                    </section>
                </Container>

                <section className='bg-sc-container'>
                    <Container className='m-container text-center' data-aos="fade-up" data-aos-duration='1000'>
                        <Row className='d-flex justify-content-center align-items-center'>
                            <Col className='text-start'>
                                <p className='fs-1'>Collection</p>
                            </Col>
                            <Col className='text-end'>
                                Koleksi adalah kumpulan objek atau data dengan tema atau tujuan tertentu, seperti buku-buku di perpustakaan, karya seni, data statistik, barang pribadi, desain pakaian, musik, atau dokumen sejarah.
                            </Col>
                        </Row>
                        <section className="mt-5">
                            <LandingSection3/>
                        </section>
                    <Button className='fs-6 fw-medium show-btn mt-5' variant="outline-light">Show More</Button>{' '}
                    </Container>
                </section>

                <Container className='mb-5'>
                    <LandingSection4 />
                </Container>

                <section className='bg-tr-container p-5'>
                    <Container data-aos="fade-up" data-aos-duration='1000'>
                        <Row>
                            <Col className=''>
                                <Image src='/images/Frame.png' className='w-100 rounded-1'/>
                            </Col>
                            <Col className=''>
                                <Image src='/images/Frame-1.png' className='w-100 rounded-1'/>
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section>
                    <Container className='text-center p-4'>
                        <Row>
                            <Col></Col>
                            <Col xs={8}>
                                <p className='fs-1' data-aos="fade-up" data-aos-duration='1000'>Review</p>
                                <p className="text-grey" data-aos="fade-up" data-aos-duration='1000'>
                                    Penelitian adalah proses penyelidikan secara sistematis terhadap suatu subjek atau masalah untuk menemukan fakta, teori, atau prinsip baru, atau untuk menganalisis dan menginterpretasikan informasi yang sudah ada dengan cara yang baru. 
                                </p>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </section>
                
                <section className='bg-tr-container p-5'>
                    <LandingSection5 />
                </section>

                <footer className='bg-pr-green'>
                    <Footer />
                </footer>
            </section>
        </>
    );
}
