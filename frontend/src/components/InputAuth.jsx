import React from 'react'

// Library
import { Col, Container, Image, Row, Form } from 'react-bootstrap'

// css
import '../assets/Auth.css'
import '../assets/Global.css'

export default function InputAuth(props) {
    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className='fs-7'>{props.label}</Form.Label>
                <Form.Control className='form-auth fs-7' type={props.type} placeholder={props.placeholder} />
            </Form.Group>
        </>
    )
}
