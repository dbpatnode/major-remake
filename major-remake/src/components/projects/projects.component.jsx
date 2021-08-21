import React from 'react';
import resumeData from '../../resumeData';
import './projects.style.scss'
import ProjectItem from '../project-item/project-item.component';

const Projects = () => {
    return (
        <div className="projects-container">
            <div className='projects'>
                {
                    resumeData.portfolio && resumeData.portfolio.map((item) => {
                        console.log(item.techStack)
                        return <ProjectItem
                            key={item.name}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            description={item.description}
                            githubUrl={item.githubUrl}
                            linkUrl={item.linkUrl}
                            item={item}
                            techStack={item.techStack}
                            youtube={item.youtube}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Projects
