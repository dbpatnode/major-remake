import React from 'react';
import './homepage.style.scss';
import resumeData from '../../resumeData';
import { Link } from 'react-scroll'

const HomePage = () => (
    <div className="homepage">
        <div className="row banner">
            <div className="banner-text">
                <div className="typewriter">
                    <h1 className="responsive-headline">Hi! I'm {resumeData.name}.</h1>
                </div>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>A {resumeData.role} located in {resumeData.location}. {resumeData.roleDescription}</h3>
                <hr />
                <ul className="social">
                    {
                        resumeData.socialLinks.map(item => {
                            return (
                                <li key={item.name}>
                                    <a href={item.url} target="_blank" rel="noreferrer"><i className={item.className}> </i></a>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </div>

        <ul>
            <p className="scrolldown">
                <li><Link to="about" spy={true} smooth={true}><i className="icon-down-circle"></i></Link></li>
            </p>
        </ul>
    </div >
)

export default HomePage
