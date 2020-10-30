import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';
import portrait from '../../assets/portrait.png';

const About = () => {
    return (
        <div className="about-container">
            <Row className="m-0">
                <Spring
                    from={{
                        opacity: 0,
                        transform: 'rotateY(360deg)'
                    }}
                    to={{
                        opacity: 1,
                        transform: 'rotateY(0deg)'
                    }}
                    config={{ duration: 1000 }}
                >
                    {props =>
                        <Col style={props} xs={5}>
                            <div className="img-container d-flex justify-content-end">
                                <img src={portrait} alt="Portrait" />
                            </div>
                        </Col>}
                </Spring>
                <Spring
                    from={{
                        opacity: 0,
                        transform: 'rotateY(0deg)'
                    }}
                    to={{
                        opacity: 1,
                        transform: 'rotateY(360deg)'
                    }}
                    config={{ duration: 1000 }}
                >
                    {props =>
                        <Col style={props} id="cv" className="d-flex flex-column justify-content-center align-items-center" xs={6}>
                            <div>
                                <h1 className="yellow font-weight-bold">
                                    Hello, I am <span className="green">SAYEED</span>,
                            </h1>
                                <p className="intro yellow mb-3">
                                    Highly skilled Web Developer with an illustrated history of working
                                    in the internet industry. Strong engineering professional skilled in
                                    HTML5/CSS3, Responsive Design, JavaScript, React.js, Node.js,
                                    Express.js, MongoDB, and more.
                            </p>
                                <div>
                                    <table>
                                        <tr>
                                            <td>Full Name </td>
                                            <td>: Abu Sayeed</td>
                                        </tr>
                                        <tr>
                                            <td>Father's Name </td>
                                            <td>: MD. Gias Uddin</td>
                                        </tr>
                                        <tr>
                                            <td>Mother's Name </td>
                                            <td>: Forida Parvin</td>
                                        </tr>
                                        <tr>
                                            <td>Address </td>
                                            <td>: Barlekha, Moulvibazar</td>
                                        </tr>
                                        <tr>
                                            <td>Phone </td>
                                            <td>: (+88) 01786230995</td>
                                        </tr>
                                        <tr>
                                            <td>Email </td>
                                            <td>: <a href="mailto:sayeedsayem8@gmail.com">sayeedsayem8@gmail.com</a> </td>
                                        </tr>
                                        <tr>
                                            <td>Gender</td>
                                            <td>: Male</td>
                                        </tr>
                                        <tr>
                                            <td>Date Of Birth </td>
                                            <td>: 22 November, 2000</td>
                                        </tr>
                                        <tr>
                                            <td>Marital Status </td>
                                            <td>: Unmarried</td>
                                        </tr>
                                        <tr>
                                            <td>Nationality</td>
                                            <td>: Islam</td>
                                        </tr>
                                        <tr>
                                            <td>Languages </td>
                                            <td>: Bengali(native), English(conversational)</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    }
                </Spring>


            </Row>
        </div>
    );
};

export default About;