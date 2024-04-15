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
            <p className="fs-1 text-center" data-aos="fade-up" data-aos-duration='1000'>Research</p>
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
                                History
                            </Row>
                            <Row className=" pt-2">
                                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.
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
                                Functional
                            </Row>
                            <Row className=" pt-2">
                                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.
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
                                Location
                            </Row>
                            <Row className=" pt-2">
                                Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices.
                            </Row>
                        </Col>
                    </Row>
                    <Container className='d-flex justify-content-center mt-5'>
                        <Button className='fs-6 fw-medium show-btn-2' variant="outline-light">Show More</Button>{' '}
                    </Container>
                </Col>
            </Row>
        </>
    )
}
