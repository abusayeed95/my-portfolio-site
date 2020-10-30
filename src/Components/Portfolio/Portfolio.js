import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import creativeAgency from '../../assets/creative-agency.png';
import volunteerNetwork from '../../assets/volunteer-network.png';
import travelGuru from '../../assets/travel-guru.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Spring } from 'react-spring/renderprops';


const Portfolio = () => {
    return (
        <Spring
            from={{
                opacity: 0,
                position: 'absolute',
                left: '-1000px'
            }}
            to={{
                opacity: 1,
                position: 'relative',
                left: '0'
            }}
            config={{ duration: 1000 }}
        >
            {
                props =>
                    <div style={props} className="portfolio">
                        <div className="d-flex justify-content-center">
                            <h1>Some of My <span className="green project">Projects</span></h1>
                        </div>
                        <Row className="m-0 pt-5">
                            <Col className="d-flex justify-content-center" xs={4}>
                                <Card style={{ width: '80%' }}>
                                    <Card.Img variant="top" src={creativeAgency} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Row className="m-0">
                                                <Col xs={8}>
                                                    Creative Agency
                                                </Col>
                                                <Col xs={4}>
                                                    <a title="Live Website" href="https://creative-agency.netlify.app/"><FontAwesomeIcon icon={faLink} /> </a>
                                                    <FontAwesomeIcon icon={faEllipsisV} /> <span> </span>
                                                    <a title="Github repository" href="https://github.com/ahmedmusa995/client-creative-agency"><FontAwesomeIcon icon={faGithub} /> </a>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            A fully responsive web application that can be used by developers. Every service, reviews, and all those things are dynamic which means some sections may be change based on users/admins interaction.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="d-flex justify-content-center" xs={4}>
                                <Card style={{ width: '80%' }}>
                                    <Card.Img variant="top" src={volunteerNetwork} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Row className="m-0">
                                                <Col xs={8}>
                                                    Volunteer Network
                                    </Col>
                                                <Col xs={4}>
                                                    <a title="Live Website" href="https://volunteer-network-public.netlify.app/"><FontAwesomeIcon icon={faLink} /> </a>
                                                    <FontAwesomeIcon icon={faEllipsisV} /> <span> </span>
                                                    <a title="Github repository" href="https://github.com/ahmedmusa995/client-volunteer-network"><FontAwesomeIcon icon={faGithub} /> </a>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            A web application created with react.js that is fully responsive created for an NGO where users can see a lot of volunteering tasks and register. Admin can approve, cancel the registration, and also can add new volunteering tasks. This site is fully dynamic.
                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="d-flex justify-content-center" xs={4}>
                                <Card style={{ width: '80%' }}>
                                    <Card.Img variant="top" src={travelGuru} />
                                    <Card.Body>
                                        <Card.Title>
                                            <Row className="m-0">
                                                <Col xs={8}>
                                                    Travel Guru
                                    </Col>
                                                <Col xs={4}>
                                                    <a title="Live Website" href="https://travel-g-u-r-u.netlify.app/"><FontAwesomeIcon icon={faLink} /> </a>
                                                    <FontAwesomeIcon icon={faEllipsisV} /> <span> </span>
                                                    <a title="Github repository" href="https://github.com/ahmedmusa995/travel-guru-assignment"><FontAwesomeIcon icon={faGithub} /> </a>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            A travel agency website created with React.js which is serverless. Firebase was focused on this project. The interesting part is the map on this site.
                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
            }
        </Spring>

    );
};

export default Portfolio;