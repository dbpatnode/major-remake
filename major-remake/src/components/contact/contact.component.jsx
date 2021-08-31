import React, { Component } from 'react';
// import BlogItem from '../blog-item/blog-item.component';
import ComingSoon from '../coming-soon/coming-soon.component';
import './contact.style.scss';

export default class Blogs extends Component {
    render() {
        return (
            <div className="blogs-container">
                <ComingSoon page={"CONTACT PAGE"} />
            </div>
        )
    }
}
