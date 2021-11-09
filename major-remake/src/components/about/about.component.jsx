import React, { Component } from 'react';
import resumeData from '../../resumeData';
// import Headshot from './headshot.png'
import './about.style.scss'

export default class About extends Component {
    render() {

        return (
            <div id="about">
                <div className="content-container">
                    <div className="headshot-container">
                        <div className="profile-pic"></div>
                        {/* <img className="profile-pic" src={Headshot} alt="Daniel Patnode" /> */}
                    </div>

                    <div className="information-container">
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutme}
                        </p>
                        <h2>Contact Details</h2>
                        <p className="address">
                            <span>{resumeData.name}</span>
                            <br></br>
                            <span>
                                {resumeData.address}
                            </span>
                            <br></br>
                            <span>{resumeData.website}</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}