import React, { Component } from 'react';
import resumeData from '../../resumeData';
import './footer.style.scss'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <footer>
                    <div>
                        <ul className="social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item) => {
                                    return (
                                        <li>
                                            <a href={item.url}>
                                                <i className={item.className} />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                    </div>

                </footer>
            </div>
        );
    }
}