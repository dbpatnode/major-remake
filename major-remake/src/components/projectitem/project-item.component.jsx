import React from 'react';

import './project-item.style.scss';

const CollectionItem = ({ name, imgUrl, description }) => (
    <div className="project-item">
        <img
            className="image"
            src={`images/${imgUrl}`}
            alt={description}
        />
        <h1 className="name">{name}</h1>
        <a className="button" id="github-button">Github</a>
        <a className="button" id="demo-button">Demo</a>
        <div className="collection-footer">
            <span className="description">{description}</span>
        </div>
    </div>
)

export default CollectionItem