import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="contact-area">
            <div className="d-flex justify-content-center">
                <h1 className=" d-inline-block">
                    <h1 className="green d-inline-block font-weight-bold">GET IN</h1> <h1 className="yellow touch d-inline-block font-weight-bold">TOUCH</h1>
                </h1>
            </div>
            <Row className="m-0">
                <Col className="d-flex justify-content-center align-items-center" xs={7}>
                    <Form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" required />
                        <textarea row={3} placeholder="Your Message" required />
                        <button type="submit">Submit</button>
                    </Form>
                </Col>
                <Col xs={5}>
                    <div className="vl" />
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-center">
                            <h2 className="green">Contact Information</h2>
                            <h3>Abu Sayeed</h3>
                            <h4>Barlekha(3250), Moulvibazar</h4>
                            <a className="h4 yellow d-inline-block mb-2" href="mailto:sayeedsayem8@gmail.com">sayeedsayem8@gmail.com</a>
                            <h4>(+88) 01786230995</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;