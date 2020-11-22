import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar className="navigation" variant="dark" expand="lg">
            <Navbar.Brand href="home">
                <h1 style={{ fontFamily: 'Luckiest Guy', fontSize: '60px', letterSpacing: '.5rem' }}>
                    <FontAwesomeIcon icon={faLaptopCode} /> SAYEED
                </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation" />
            <Navbar.Collapse id="navigation">
                <Nav className="ml-auto">
                    <Link to="/home" className="nav-link green">Home</Link>
                    <Link to="/about" className="nav-link green">About</Link>
                    <Link to="/portfolio" className="nav-link green">Portfolio</Link>
                    <Link to="/contact" className="nav-link green">Contact</Link>
                    <Link to="/blog" className="nav-link green">Blog</Link>
                    <a className="nav-link green download-cv" href="https://drive.google.com/file/d/1xgl4dZSYkepxl6cJ9j3uRdrq4_GTeSTZ/view?usp=sharing" target="_blank">Download CV</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;