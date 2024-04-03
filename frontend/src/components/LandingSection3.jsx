import React from 'react'

// library
import { Tab, Nav, Card, CardGroup } from 'react-bootstrap'

// css
import '../assets/LandingSection.css'
import '../assets/Global.css'

export default function LandingSection3() {
    return (
        <>
            <Tab.Container id="pills-tab" defaultActiveKey="home">
                <Nav variant="pills" className='justify-content-center' data-aos="fade-up" data-aos-duration='500'>
                    <Nav.Item>
                        <Nav.Link eventKey="home" className="custom-nav-link p-tab">Popular</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="painting" className="custom-nav-link p-tab">Painting</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="sculpture" className="custom-nav-link p-tab">Sculpture</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="craft" className="custom-nav-link p-tab">Craft</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="artist" className="custom-nav-link p-tab">Artist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="research" className="custom-nav-link p-tab">Research</Nav.Link>
                    </Nav.Item>
                </Nav>
                <section data-aos="fade-up" data-aos-duration='1000'>
                <Tab.Content className='text-center mt-5'>
                    <Tab.Pane eventKey="home">
                        <CardGroup className='gap-5'>
                            <Card style={{ width: '18rem' }} className='card-collection'>
                                <Card.Img variant="top" src="/images/Catalog 2.png" />
                                <Card.Body className="card-img-overlay d-flex flex-column justify-content-end">
                                    <Card.Title className="text-center text-white">Arca Garuda</Card.Title>
                                    <Card.Text className="text-center text-white mb-2">Adil Rahmat</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className='card-collection'>
                                <Card.Img variant="top" src="/images/Catalog 3.png" />
                                <Card.Body className="card-img-overlay d-flex flex-column justify-content-end">
                                    <Card.Title className="text-center text-white">Arca Garuda</Card.Title>
                                    <Card.Text className="text-center text-white mb-2">Adil Rahmat</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className='card-collection'>
                                <Card.Img variant="top" src="/images/Catalog 4.png" />
                                <Card.Body className="card-img-overlay d-flex flex-column justify-content-end">
                                    <Card.Title className="text-center text-white">Arca Garuda</Card.Title>
                                    <Card.Text className="text-center text-white mb-2">Adil Rahmat</Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="painting">
                        2
                    </Tab.Pane>
                    <Tab.Pane eventKey="sculpture">
                        3
                    </Tab.Pane>
                    <Tab.Pane eventKey="craft">
                        4
                    </Tab.Pane>
                    <Tab.Pane eventKey="artist">
                        5
                    </Tab.Pane>
                    <Tab.Pane eventKey="research">
                        6
                    </Tab.Pane>
                </Tab.Content>
                </section>
            </Tab.Container>
        </>
    )
}
