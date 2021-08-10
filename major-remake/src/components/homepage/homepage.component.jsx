import React from 'react';
import './homepage.style.scss';
import resumeData from '../../resumeData';
// import 'font-awesome/css/font-awesome.min.css';
// import CoolName from '../coolname/coolname.component'

const HomePage = () => (
    <div className="homepage">
        {console.log(resumeData.socialLinks)}
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">Hi! I'm {resumeData.name}.</h1>
                <h3 style={{ color: '#fff', fontFamily: 'sans-serif ' }}>A {resumeData.role} located in {resumeData.location}. {resumeData.roleDescription}
                </h3>
                <hr />
                <ul className="social">
                    {
                        resumeData.socialLinks.map(item => {
                            return (
                                <li key={item.name}>
                                    {/* /*/}
                                    <a href={item.url} target="_blank" rel="noreferrer"><i className={item.className}> </i></a>
                                </li>
                            )
                        }
                        )
                    }
                </ul>
            </div>
        </div>
    </div >
)

export default HomePage