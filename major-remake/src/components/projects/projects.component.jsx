import React from 'react';
import resumeData from '../../resumeData';
import './projects.style.scss'
import ProjectItem from '../projectitem/project-item.component';
// import { Images } from '../../images'

const Projects = () => {
    return (
        <div className="projects-container">
            <div className='projects'>
                {
                    resumeData.portfolio && resumeData.portfolio.map((item) => {
                        // console.log('item', item.imgUrl)
                        return <ProjectItem
                            key={item.name}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            description={item.description}

                            item={item}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Projects