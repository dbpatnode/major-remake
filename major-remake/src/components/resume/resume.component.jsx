import React, { Component } from 'react';
import './resume.style.scss';
import resumeData from '../../resumeData';

export default class Resume extends Component {
    render() {
        return (
            <section id="resume">

                <div className="row education">

                    <div className="header-column">
                        <h1><span>Education</span></h1>
                    </div>

                    <div className="content-column">
                        {
                            resumeData.education && resumeData.education.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3><a href={item.UniversityUrl}>{item.UniversityName}</a></h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div >
                    <div className="header-column">
                        <h1><span>Work</span></h1>
                    </div>

                    <div className="content-column">
                        {
                            resumeData.work && resumeData.work.map((item) => {
                                return (
                                    <div className="row item">
                                        <div className="twelve columns">
                                            <h3>{item.CompanyName}</h3>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                            <p>
                                                {item.Achievements}
                                            </p>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                </div>


                <div className="row skill">

                    <div className="skills-header">
                        <h1><span>Skills</span></h1>
                    </div>

                    <div className="skills-column">

                        {/* <p>
                            {resumeData.skillsDescription}
                        </p> */}

                        <div className="bars">

                            <ul className="skills">
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return (
                                            <li>
                                                <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                                                </span><em>{item.skillname}</em>
                                            </li>
                                        )
                                    })
                                }

                            </ul>

                        </div>

                    </div>

                </div>

            </section>
        )
    }
}
