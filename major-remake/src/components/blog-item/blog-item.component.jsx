import React from 'react';
import './blog-item.style.scss';

import Card from 'react-bootstrap/Card'

const BlogItem = ({ title, link, thumbnail, content }) => (
    <div className="collection-item">
        <a href={link}>
            <Card className="blogCard" border="outline-info" bg="dark" key={title}>
                <Card.Img className="cardImgTop" variant="top" src={thumbnail} alt="blog post" width="300" height="300" />
                <Card.Header><a href={link} target="_blank" rel="noreferrer"><h5>{title}</h5></a></Card.Header>
                <Card.Body >
                    {/* 
                    <span className="subtitle">
                        {content.tag_list.map(tag => {
                            return <Card.Subtitle className="mb-1 text-muted" key={content.tag_list.indexOf(tag)}>#{tag}</Card.Subtitle>
                        })}
                    </span> */}
                    {/* <Card.Text className="blogBody">
                        {content}
                    </Card.Text> */}
                </Card.Body>
            </Card>
        </a>
    </div>
)

export default BlogItem