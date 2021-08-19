import React from 'react';

import './project-item.style.scss';

const CollectionItem = ({ name, imgUrl, description }) => (
    <div className="project-item">
        <div
            className="image"
            style={{
                backgroundImage: `url(/images/${imgUrl})`
            }}
        >
        </div>
        <h1 className="name">{name}</h1>
        <a className="button" id="github-button"><i className="fa fa-github" /></a>
        <a className="button" id="demo-button"><i className="fa fa-link" /></a>
        <div className="collection-footer">
            <span className="description">{description}</span>
        </div>
    </div>
)

export default CollectionItem