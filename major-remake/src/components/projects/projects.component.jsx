import React, { Component } from 'react';
import resumeData from '../../resumeData';
import './projects.style.scss'
// import { Images } from '../../images'

export default class Projects extends Component {
    render() {
        // console.log(Images)
        return (
            <section id="portfolio">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Works.</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {
                                resumeData.portfolio && resumeData.portfolio.map((item) => {
                                    return (
                                        <div className="columns portfolio-item">
                                            <div className="item-wrap">
                                                <a href="#modal-01">
                                                    <img src={`images/${item.imgurl}`} className="item-img" alt={`website for ${item.name}`} />
                                                    <div className="overlay">
                                                        <div className="portfolio-item-meta">
                                                            <h5>{item.name}</h5>
                                                            <p>{item.description}</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}