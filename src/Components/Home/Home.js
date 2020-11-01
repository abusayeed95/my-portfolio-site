import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import me from '../../assets/my-img.png';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Typist from 'react-typist';
import Particles from 'react-particles-js';
import { Spring } from 'react-spring/renderprops';
import TypistLoop from 'react-typist-loop'
import Contact from '../Contact/Contact';

const Home = () => {
    const styles = {
        textAlign: "center",
        height: "100%",
        width: "100%",
        background: "transparent",
        position: "absolute",
        top: '0',
        zIndex: '-1'
    };
    return (
        <>
            <div style={styles}>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 100
                            },
                            "size": {
                                "value": 1
                            }
                        }
                    }}
                />
            </div>
            <div className="sticky-top">
                <div className="social-links d-flex flex-column justify-content-center align-items-center">
                    <a href="https://www.linkedin.com/in/abusayeed95/" target="_blank" className="social"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/ahmedmusa995" target="_blank" className="social"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.facebook.com/sayeedsayem95" target="_blank" className="social"><FontAwesomeIcon icon={faFacebook} /></a>
                </div>
            </div>
            <div className="home mt-3 d-flex flex-column align-items-center">
                <div>
                    <Spring
                        from={{
                            opacity: 0,
                        }}
                        to={{
                            opacity: 1,
                        }}
                        config={{ duration: 1000 }}
                    >
                        {props =>
                            <div style={props}>
                                <div className="my-img-container">
                                    <img src={me} alt="my-pic" />
                                    <div className="box" />
                                </div>
                            </div>}
                    </Spring>
                </div>
                <div className="intro-box">
                    <div className="d-flex mt-3 flex-column align-items-center justify-content-center">
                        <h5>
                            <Typist cursor={{ show: false }}>
                                Hey there, I'm
                            </Typist>
                        </h5>
                        <h1 style={{ fontSize: '50px', fontWeight: 'bold' }}>
                            <Typist cursor={{ show: false, element: '|' }} avgTypingDelay={100}>
                                <Typist.Delay ms={1500} />
                                <span className="green font-italic font-weight-bolder">SAYEED...!</span>
                            </Typist>
                        </h1>
                        <h3>
                            <TypistLoop>
                                {[
                                    `I'm a Front-end Developer`,
                                    `I'm a React Developer`,
                                    `I'm a Programmer`
                                ].map(text => <Typist startDelay={3000} cursor={{ hideWhenDoneDelay: 500, blink: true, element: '|' }} key={text}>
                                    <Typist.Delay ms={100} />
                                    <span className="green">{text}</span>
                                    <Typist.Backspace count={25} delay={1000} />
                                </Typist>)}
                            </TypistLoop>
                        </h3>

                    </div>
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
                    <div className="d-flex justify-content-center my-3 mb-5 pb-5">
                        <a className="hire" href="https://www.linkedin.com/in/abusayeed95" target="_blank">HIRE ME</a>
                        <a className="resume" href="https://drive.google.com/file/d/1n_WyOpWTddo8uBbx_PLidPB8ZviP1vBQ/view?usp=sharing" target="_blank">RESUME</a>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    );
};

export default Home;