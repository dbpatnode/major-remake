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
                    </div>

                    <div className="information-container">
                        <h2>About Me</h2>
                        <p>
                            {resumeData.aboutme} Feel free to reach out with any inquiries <a href="/contact">here</a>.

                        </p>
                    </div>
                </div>
            </div>
        );
    }
}