import React from 'react'

// Library
import { Container, Row, Col, Image } from 'react-bootstrap'
import { MdEmail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


// css
import '../assets/Global.css'
import '../assets/Footer.css'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <Container className='pt-4 pb-5'>
                <Row className=''>
                    <Col xs={7} className=''>
                        <Image src='/images/logo-1.png' width={50} />
                        <Row className='d-flex flex-column mt-2 g-3 gap-3'>
                            <Col className='pe-6'>
                                Visi kami adalah memberikan kemudahan dan membantu meningkatkan bisnis penjualan Anda.
                            </Col>
                            <Col className='d-flex gap-2 mt-3'>
                                <Link className='icon-box'>
                                    <MdEmail />
                                </Link>
                                <Link className="icon-box">
                                    <FaTwitter />
                                </Link>
                                <Link className="icon-box">
                                    <RiInstagramFill />
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col className=''>
                        <p className='fw-semibold'>Tentang</p>
                        <Row className='d-flex flex-column g-3 fs-7'>
                            <Col>Unggulan</Col>
                            <Col>Kemitraan</Col>
                            <Col>Hubungan Bisnis</Col>
                        </Row>
                    </Col>
                    <Col className=''>
                        <p className='fw-semibold'>Komunitas</p>
                        <Row className='d-flex flex-column g-3 fs-7'>
                            <Col>Acara</Col>
                            <Col>Blog</Col>
                            <Col>Siniar</Col>
                            <Col>Undang Teman</Col>
                        </Row>
                    </Col>
                    <Col className=''>
                        <p className='fw-semibold'>Sosial</p>
                        <Row className='d-flex flex-column g-3 fs-7'>
                            <Col>Discord</Col>
                            <Col>Instagram</Col>
                            <Col>Twitter</Col>
                            <Col>Facebook</Col>
                        </Row>
                    </Col>
                </Row>
                <div className='mt-5 mb-5 border border-1'></div>
                <Row>
                    <Col>
                        ©2022 Otomatis Cepat · Seluruh hak cipta
                    </Col>
                    <Col className='d-flex justify-content-end text-end'>
                        <Col>Kebijakan Pribadi</Col>
                        <Col>Syarat & Ketentuan</Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
