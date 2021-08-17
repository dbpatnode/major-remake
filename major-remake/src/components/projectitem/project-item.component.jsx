import React from 'react';

import './project-item.style.scss';

const CollectionItem = ({ name, imgUrl, description }) => (
    // console.log(imageUrl)
    <div className="project-item">
        {console.log(imgUrl)}
        <img
            className="image"
            src={`images/${imgUrl}`}
            // src='images/dark-pattern.jpg'

            alt={description}
        />
        <div className="name">{name}</div>
        <div className="collection-footer">
            <span className="description">{description}</span>
        </div>
    </div>
)

export default CollectionItem