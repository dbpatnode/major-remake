import React from 'react';

import './project-item.style.scss';

const CollectionItem = ({ name, imgUrl, description, githubUrl, linkUrl }) => (
    <div className="project-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(/images/${imgUrl})`
            }}
        >
        </div>
        <h1 className="name">{name}</h1>
        <a href={githubUrl} id="github-button" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a>
        <a href={linkUrl} id="demo-button" target="_blank" rel="noreferrer"><i className="fa fa-link" /></a>
        <div className="collection-footer">
            <span className="description">{description}</span>
        </div>
    </div>
)

export default CollectionItem