import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navigation = () => {
    return (
        <Navbar className="navigation" variant="dark" expand="lg">
            <Navbar.Brand href="home"><img height="100px" src={logo} alt="logo" /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="navigation" />
            <Navbar.Collapse id="navigation">
                <Nav className="ml-auto">
                    <Link to="/home" className="nav-link green">Home</Link>
                    <Link to="/about" className="nav-link green">About</Link>
                    <Link to="/portfolio" className="nav-link green">Portfolio</Link>
                    <Link to="/contact" className="nav-link green">Contact</Link>
                    <Link to="/blog" className="nav-link green">Blog</Link>
                    <a className="nav-link green download-cv" href="https://drive.google.com/file/d/19YmP71zx3KUMNNrtV-XFXcRUWy42GTFt/view?usp=sharing" target="_blank">Download CV</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;