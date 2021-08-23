import React, { Component } from 'react';
import './blogs.style.scss';

export default class Blogs extends Component {

    state = {
        blogs: []
    }

    componentDidMount() {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danielpatnode')
            .then(resp => resp.json())
            .then(blogs => this.setState({ blogs }))
    }

    render() {
        return (
            <div>
                {console.log(this.state.blogs)}
            </div>
        )
    }
}

