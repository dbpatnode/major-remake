import React from 'react';
import './resume.style.scss';
import resumeData from '../../resumeData';

const Resume = () => (
    <div id="resume">
        {/* <div className="education"> */}
        <div className="resume-section education">
            <div className="header-column">
                <h1><span>Education</span></h1>
            </div>
            <div className="content-column">
                {
                    resumeData.education && resumeData.education.map((item) => {
                        return (
                            <div>
                                <h3><a href={item.UniversityUrl} target="_blank" rel="noreferrer">{item.UniversityName}</a></h3>
                                <p className="info">
                                    {item.specialization}
                                    <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                <p>
                                    {item.Achievements}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="resume-section work">
            <div className="header-column">
                <h1><span>Work</span></h1>
            </div>
            <div className="content-column">
                {
                    resumeData.work && resumeData.work.map((item) => {
                        console.log(item.Achievements.map((a => <li>{a.achievment}</li>)))
                        return (

                            <div>
                                <h3><a href={item.CompanyUrl} target="_blank" rel="noreferrer">{item.CompanyName}</a></h3>
                                <p className="info">
                                    {item.specialization}
                                    <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                <ul className="resume-bullet-points">
                                    {item.Achievements.map((a => <li>{a.achievment}</li>))}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>

        <div className="resume-section skills">
            <div className="header-column">
                <h1><span>Skills</span></h1>
            </div>
            <div className="content-column">
                <div className="bars">
                    <ul className="skills-list">
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
