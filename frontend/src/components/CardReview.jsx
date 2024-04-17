import React from 'react'

// Library
import { Button, Col, Image, Row, Container, Card } from 'react-bootstrap'
import 'aos/dist/aos.css';
import { IoStarOutline, IoStar, IoStarHalf } from "react-icons/io5";
import { MdOutlineRestartAlt } from "react-icons/md";

// css
import '../assets/Global.css'
import '../assets/LandingSection.css'

export default function CardReview(proms) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={1}>
                            <div className='rounded-circle overflow-hidden'>
                                <Image src='/images/profil.png' className='w-100 mt-2 mb-2' roundedCircle />
                            </div>
                        </Col>
                        <Col>
                            <Row className=''>
                                <Col xs={5} className=" fw-medium">{proms.nama}</Col>
                            </Row>
                            <div className='fs-9 text-grey'>{proms.tanggal}</div>
                        </Col>
                    </Row>
                    <div className='text-justify fs-8 mt-3'>
                        {proms.review}
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
