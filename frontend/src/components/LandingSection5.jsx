import React from 'react'

// Library
import { Button, Col, Image, Row, Container, Form, InputGroup } from 'react-bootstrap'
import 'aos/dist/aos.css';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import { BsSend } from "react-icons/bs";

// css
import '../assets/Global.css'
import '../assets/LandingSection.css'

//component
import CardReview from './CardReview';

export default function LandingSection5() {
    var splideOptions = {
        arrows: false,
        type: 'loop',
        direction: 'ttb',
        height: '22rem',
        gap: '6rem',
        focus: 'center',
        wheel: true,
        speed: 3000,
        pagination: false,
        arrowPath: '',
        perPage: 3,
    };

    return (
        <>
            <Container data-aos="fade-up" data-aos-duration='1000'>
                <Row className='d-flex justify-content-center align-items-center'>
                    <Col xs={6} className=''>
                        <Image src='/images/pangeran diponegoro 1.png' className='w-100 rounded-3' />
                    </Col>
                    <Col className='d-flex align-items-center'>
                        <Splide aria-label='My Favorite Images' options={splideOptions}>
                            <SplideSlide>
                                <CardReview nama={'Viezh Robert'} tanggal={'5 maret 2024 at 12.08 pm'} review={'“Penggunaan warna yang diberikan pada lukisan ini sangat ringan tetapi jelas.”'}/>
                            </SplideSlide>
                            <SplideSlide>
                                <CardReview nama={'Herman William'} tanggal={'10 maret 2024 at 11.30 pm'} review={'“Lukisan yang dibuat seniman ini sangat mempunyai makna yang sangat mendalam. Terlihat mempunyai kandungan historis yang sangat kental.”'}/>
                            </SplideSlide>
                            <SplideSlide>
                                <CardReview nama={'Joshep Stall'} tanggal={'25 maret 2024 at 08.15 pm'} review={'“Penggunaan canvas dan cat yang digunakan terlihat berkualitas sehingga sangat mempengaruhi hasil dari lukisan ini.”'}/>
                            </SplideSlide>
                        </Splide>
                    </Col>
                </Row>
                <Form className='mt-5 d-flex justify-content-end' inline>
                    <Form.Control type="text" placeholder="Search" className='form-comment' />
                    <Button type="submit" className='btn-send position-absolute'><BsSend /></Button>
                </Form>
            </Container>
        </>
    )
}
