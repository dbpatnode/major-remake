import React from 'react';
import './homepage.style.scss';
import resumeData from '../../resumeData';
import CoolName from '../coolname/coolname.component'

const HomePage = () => (
    <div>
        <CoolName />
        {console.log(resumeData.name)}
        HomePage
    </div>
)

export default HomePage