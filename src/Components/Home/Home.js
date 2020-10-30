import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../../assets/my-img.png';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typist from 'react-typist';
import Particles from 'react-particles-js';
import { Spring } from 'react-spring/renderprops';

const Home = () => {
    const styles = {
        root: {
            textAlign: "center",
            height: "100%",
            width: "100%",
            background: "transparent",
            position: "absolute",
            top: '0',
            zIndex: '-1'
        }
    };
    return (
        <>
            <div style={styles.root}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 70
                            },
                            "size": {
                                "value": 3
                            }
                        }
                    }}
                />
            </div>
            <div className="home d-flex flex-column justify-content-center align-items-center">
                <Spring
                    from={{
                        opacity: 0,
                        position: 'absolute',
                        right: '-600px',
                        transform: 'rotate(0deg)'
                    }}
                    to={{
                        opacity: 1,
                        transform: 'rotate(360deg)',
                        position: 'relative',
                        right: '0'
                    }}
                    config={{ duration: 1000 }}
                >
                    {props =>
                        <div style={props}>
                            <div>
                                <div className="my-img-container">
                                    <img src={me} alt="my-pic" />
                                    <div className="box" />
                                </div>
                            </div>
                        </div>}
                </Spring>
                <div className="intro-box">
                    <h1 className="text-center yellow  font-weight-bold">
                        <Typist cursor={{ hideWhenDone: true }}>
                            Hey there, I am <span className="green font-italic font-weight-bolder">SAYEED</span>,
                        </Typist>
                    </h1>
                    <Spring
                        from={{
                            opacity: 0,
                            position: 'absolute',
                            left: '-1000px',
                        }}
                        to={{
                            opacity: 1,
                            position: 'relative',
                            left: '0',
                        }}
                        config={{ duration: 1000 }}
                    >
                        {props =>
                            <div style={props}>
                                <p className="intro yellow">
                                    Highly skilled Web Developer with an illustrated history of working
                                    in the internet industry. Strong engineering professional skilled in
                                    HTML5/CSS3, Responsive Design, JavaScript, React.js, Node.js,
                                    Express.js, MongoDB, and more.
                                </p>
                            </div>}
                    </Spring>
                    <div className="d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/abusayeed95/" target="_blank" className="primary-btn"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/ahmedmusa995" target="_blank" className="primary-btn"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://www.facebook.com/sayeedsayem95" target="_blank" className="primary-btn"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Home;