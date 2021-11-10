import React from 'react';
import './resume.style.scss';
import resumeData from '../../resumeData';

const Resume = () => (
    <div id="resume">
        <div className="education">
            <div className="header-column">
                <h1><span>Education</span></h1>
            </div>
            <div className="content-column">
                {
                    resumeData.education && resumeData.education.map((item) => {
                        return (
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3><a href={item.UniversityUrl} target="_blank" rel="noreferrer">{item.UniversityName}</a></h3>
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

        <div className="work">
            <div className="header-column">
                <h1><span>Work</span></h1>
            </div>
            <div className="content-column">
                {
                    resumeData.work && resumeData.work.map((item) => {
                        console.log(item.Achievements.map((a => <li>{a.achievment}</li>)))
                        return (
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3><a href={item.CompanyUrl} target="_blank" rel="noreferrer">{item.CompanyName}</a></h3>
                                    <p className="info">
                                        {item.specialization}
                                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                    <ul>
                                        {item.Achievements.map((a => <li>{a.achievment}</li>))}
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="skill-container">
            <div className="header-column">
                <h1><span>Skills</span></h1>
            </div>
            <div className="skills-column">
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
    </div>
)

export default Resume
