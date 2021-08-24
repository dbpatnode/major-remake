import React from 'react';
import './blog-item.style.scss';

const BlogItem = ({ title, link, thumbnail, content }) => (
    <div className="collection-item">
        <a href={link} target="_blank" rel="noreferrer">
            <div className="blogCard" border="outline-info" bg="dark" key={title}>
                <img className="cardImgTop" variant="top" src={thumbnail} alt="blog post" width="400" height="auto" />
                <h1>{title}</h1>
            </div>
        </a>
    </div >
)

export default BlogItem