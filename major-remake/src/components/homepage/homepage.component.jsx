import React from 'react';
import './homepage.style.scss';
import resumeData from '../../resumeData';
import { Link } from 'react-scroll'

const HomePage = () => (
    <div className="homepage">
        <div className="row banner">
            <div className="banner-text">
                <div className="flex-column-wrapper">
                    <p className="first">
                        <h1 data-splitting>Hi, I'm {resumeData.name}</h1>
                    </p>
                </div>

                <div className="flex-column-wrapper">
                    <p className="second">
                        <h3> A {resumeData.roleDescription}</h3>
                        <hr />
                        <ul className="social">
                            {
                                resumeData.socialLinks.map(item => {
                                    return (
                                        <div className="swing">
                                            <li key={item.name}>
                                                <a href={item.url} target="_blank" rel="noreferrer"><i className={item.className}> </i></a>
                                            </li>
                                        </div>
                                    )
                                }
                                )
                            }
                        </ul>
                    </p>
                </div>
            </div>
        </div>

        <div className="scrolldown">
            <div className="swing">
                <p className="third">
                    <Link to="about" spy={true} smooth={true}><i className="icon-down-circle"></i></Link>
                </p>
            </div>
        </div>
    </div >
)

export default HomePage
