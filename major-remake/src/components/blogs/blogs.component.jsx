import React, { Component } from 'react';
// import BlogItem from '../blog-item/blog-item.component';
import ComingSoon from '../coming-soon/coming-soon.component';
import './blogs.style.scss';

export default class Blogs extends Component {
    // state = {
    //     blogs: []
    // }

    // componentDidMount() {
    //     fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danielpatnode')
    //         .then(resp => resp.json())
    //         .then(blogs => this.setState({ blogs }))
    // }

    render() {
        // const { blogs } = this.state
        return (
            <div className="blogs-container">
                {/* <div className="blogs">
                    {
                        blogs.items && blogs.items.slice(0, 7).map((item) => {
                            console.log(item)
                            return <BlogItem
                                title={item.title}
                                link={item.link}
                                content={item.content}
                                description={item.description}
                                thumbnail={item.thumbnail}
                            />
                        }
                        )}
                </div> */}
                <ComingSoon page={"BLOG"} />
            </div>
        )
    }
}
