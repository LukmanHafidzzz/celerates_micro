import React from 'react'

// Library
import { Button, Col, Image, Row, Container, Card } from 'react-bootstrap'
import 'aos/dist/aos.css';
import { IoStarOutline, IoStar, IoStarHalf } from "react-icons/io5";
import { MdOutlineRestartAlt } from "react-icons/md";

// css
import '../assets/Global.css'
import '../assets/LandingSection.css'

export default function CardReview() {
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
                                <Col xs={5} className=" fw-medium">Viezh Robert </Col>
                            </Row>
                            <div className='fs-9 text-grey'>5 maret 2024 at 12.08 pm</div>
                        </Col>
                    </Row>
                    <div className='text-justify fs-8 mt-3'>
                        “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
