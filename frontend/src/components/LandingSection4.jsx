import React from 'react'

// Library
import { Button, Col, Image, Row, Container } from 'react-bootstrap'
import { TbHistory } from "react-icons/tb";
import { TbCurrentLocation } from "react-icons/tb";
import { TbBook } from "react-icons/tb";
import 'aos/dist/aos.css';

// css
import '../assets/Global.css'
import '../assets/LandingSection.css'

export default function LandingSection4() {
    return (
        <>
            <p className="fs-1 text-center" data-aos="fade-up" data-aos-duration='1000'>Penelitian</p>
            <p className="text-grey text-justify" data-aos="fade-up" data-aos-duration='1000'>
                Penelitian adalah proses penyelidikan secara sistematis terhadap suatu subjek atau masalah untuk menemukan fakta, teori, atau prinsip baru, atau untuk menganalisis dan menginterpretasikan informasi yang sudah ada dengan cara yang baru.
            </p>
            <Row className='mt-4 d-flex justify-content-center align-items-center' data-aos="fade-up" data-aos-duration='1000'>
                <Col className=''>
                    <Image src='/images/Rectangle 23792.png' className='img-research' />
                </Col>
                <Col className=''>
                    <Row className=" mb-4">
                        <Col xl={2} className=" d-flex justify-content-center">
                            <div className='box-icon fs-5'>
                                <TbHistory />
                            </div>
                        </Col>
                        <Col className="">
                            <Row className=" fs-5 fw-medium">
                                Sejarah
                            </Row>
                            <Row className=" pt-2">
                                Museum ini dibangun sejak lama, karya yang ditampilkan berasal dari seniman lama yang terkenal.
                            </Row>
                        </Col>
                    </Row>
                    <Row className=" mb-4">
                        <Col xl={2} className=" d-flex justify-content-center">
                            <div className='box-icon fs-5'>
                                <TbBook />
                            </div>
                        </Col>
                        <Col className="">
                            <Row className=" fs-5 fw-medium">
                                Fungsional
                            </Row>
                            <Row className=" pt-2">
                                Museum ini dibangun sebagai wadah bagi para seniman untuk menampung karya seni.
                            </Row>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xl={2} className=" d-flex justify-content-center">
                            <div className='box-icon fs-5'>
                                <TbCurrentLocation />
                            </div>
                        </Col>
                        <Col className="">
                            <Row className=" fs-5 fw-medium">
                                Lokasi
                            </Row>
                            <Row className=" pt-2">
                                Bandung, Jawa Barat.
                            </Row>
                        </Col>
                    </Row>
                    <Container className='d-flex justify-content-center mt-5'>
                        <Button className='fs-6 fw-medium show-btn-2' variant="outline-light">Lebih banyak</Button>{' '}
                    </Container>
                </Col>
            </Row>
        </>
    )
}
