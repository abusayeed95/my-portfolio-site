import { faBootstrap, faCss3, faGitAlt, faGithub, faGitlab, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import single from '../../assets/single.png';

const About = () => {
    return (
        <div className="about">
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Row className="m-0">
                    <Col className="d-flex justify-content-center align-items-center" xs={6}>
                        <div className="pl-5">
                            <h1 style={{ fontSize: '70px' }}>
                                Who am I...?
                        </h1>
                            <h1 style={{ fontSize: '50px', fontWeight: '900' }}>
                                <span style={{ fontSize: '20px' }}>I'm</span> <br /> <span className="green">Abu Sayeed</span>
                            </h1>
                            <h3 className="pb-3">
                                a front-end web developer
                        </h3>
                            <p style={{ fontSize: '1.2rem' }}>
                                Highly skilled Web Developer with an illustrated history of working
                                in the internet industry. Strong engineering professional skilled in
                                HTML5/CSS3, Responsive Design, JavaScript, React.js, Node.js,
                                Express.js, MongoDB, and more.
                            </p>
                            <div className="d-flex justify-content-center my-3 mb-5 pb-5">
                                <a className="hire" href="https://www.linkedin.com/in/abusayeed95" target="_blank">HIRE ME</a>
                                <a className="resume" href="https://drive.google.com/file/d/16CRHp_QOdqXOJT4fq-MLXSv4oamYWE-_/view?usp=sharing" target="_blank">RESUME</a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="about-img">
                            <img src={single} alt="single-img" />
                        </div>
                    </Col>
                </Row>
            </div>
            <div>
                <div className=" skill d-flex justify-content-center">
                    <h1 className="green">Skills</h1>
                </div>
                <div>
                    <Row className="m-0 justify-content-center skills-logo">
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faReact} />
                            <h2>React.js</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faJsSquare} />
                            <h2>JavaScript</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faNodeJs} />
                            <h2>Node.js</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faReact} />
                            <h2>Express.js</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faReact} />
                            <h2>MongoDB</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faFire} />
                            <h2>Firebase</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faBootstrap} />
                            <h2>Bootstrap</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faReact} />
                            <h2>Material UI</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faHtml5} />
                            <h2>HTML5</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faCss3} />
                            <h2>CSS3</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faGitAlt} />
                            <h2>Git</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faGithub} />
                            <h2>GitHub</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faBootstrap} />
                            <h2>Heroku</h2>
                        </Col>
                        <Col className="d-flex flex-column align-items-center justify-content-center" xs={2}>
                            <FontAwesomeIcon icon={faReact} />
                            <h2>Netlify</h2>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default About;