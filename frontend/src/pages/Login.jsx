import React from 'react'

// Component
import InputAuth from '../components/InputAuth'

// Library
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { FaGoogle } from "react-icons/fa6";
import { Link } from 'react-router-dom';

// css
import '../assets/Auth.css'
import '../assets/Global.css'

export default function Login() {
    return (
        <>
            <Container className='position-absolute top-50 start-50 translate-middle'>
                <Row className='d-flex justify-content-center' data-aos="zoom-in" data-aos-duration='750'>
                    <Col xl={4} className='bg-fr-container d-flex justify-content-center rounded-start-2'>
                        <Image src='/images/signup.png' className='w-100' />
                    </Col>
                    <Col xl={5} className='p-5 bg-sc-container rounded-end-2'>
                        <div className='fw-bold fs-2'>Hey, Selamat Datang Kembali</div>
                        <div className='fs-7 mb-3'>Mempelajari lebih lanjut tentang Seni</div>
                        <Form>
                            <InputAuth label='E-mail' placeholder='Masukan alamat email Anda' type='email' />
                            <InputAuth label='Password' placeholder='Masukan password Anda' type='password' />
                        </Form>
                        <Row className='d-flex justify-content-center align-items-center gap-2 mb-4'>
                            <Col className="fs-9">
                                Lupa Password?
                            </Col>
                            <Col className="fs-9 text-end">
                                <Link to={'/register'} className='text-white text-decoration-none'>Daftar</Link>
                            </Col>
                        </Row>
                        <div className='mb-3'>
                            <Link to={'/home'}>
                                <Button className='fs-7 fw-medium auth-btn w-100' variant="outline-light">MASUK</Button>{' '}
                            </Link>
                        </div>
                        <Row className='d-flex justify-content-center align-items-center mb-3'>
                            <Col><hr /></Col>
                            <Col xl={1} className='fs-9'>Atau</Col>
                            <Col><hr /></Col>
                        </Row>
                        <div className='d-flex justify-content-center'>
                            <Button className='auth-btn-2 w-75 p-2' variant="outline-light">
                                <span className="fs-7"><FaGoogle /> Lanjutkan Dengan Google</span>
                            </Button>{' '}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
