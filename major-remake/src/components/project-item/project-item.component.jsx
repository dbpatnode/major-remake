import React from 'react';
import './project-item.style.scss';

class ProjectItem extends React.Component {
    stacks = (tech) => {
        return tech.map(lang => {
            switch (lang) {
                case 'react':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-ReactJs-61dbfb?logo=react&logoColor=white&style=flat" alt={lang} width="80" height="20" />
                    )
                case 'sass':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Sass-ff69b4?logo=sass&logoColor=white&style=flat" alt={lang} width="60" height="20" />
                    )
                case 'ruby':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Ruby%20on%20Rails-A42E2B?logo=ruby%20on%20rails&logoColor=white&style=flat" alt={lang} width="110" height="20" />
                    )
                case 'html':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Html5-f06529?logo=html5&logoColor=white&style=flat" alt={lang} width="70" height="20" />
                    )
                case 'css':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-CSS3-264de4?logo=css3&logoColor=white&style=flat" alt={lang} width="60" height="20" />
                    )
                case 'javaScript':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-JavaScript-f0db4f?logo=javascript&logoColor=white&style=flat" alt={lang} width="80" height="20" />
                    )
                case 'bootstrap':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Bootstrap-7952b3?logo=bootstrap&logoColor=white&style=flat" alt={lang} width="80" height="20" />
                    )
                case 'heroku':
                    return (
                        <img key={lang} src="https://img.shields.io/static/v1?label=Hosted&message=Heroku&color=6762A6" alt={lang} width="100" height="20" />
                    )
                case 'netlify':
                    return (
                        <img key={lang} src="https://img.shields.io/static/v1?label=Hosted&message=Netlify&color=005571" alt={lang} width="90" height="20" />
                    )
                case 'firebase':
                    return (
                        <img key={lang} src="https://img.shields.io/static/v1?label=Hosted&message=Firebase&color=FFA611" alt={lang} width="90" height="20" />
                    )
                case 'postgresql':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-PostgSql-005571?logo=postgresql&logoColor=white&style=flat" alt={lang} width="80" height="20" />
                    )
                case 'sqlite':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-sqlite-005571?logo=sqlite&logoColor=white&style=flat" alt={lang} width="60" height="20" />
                    )
                case 'github':
                    return (
                        <img key={lang} src="https://img.shields.io/static/v1?label=Hosted&message=Github.io&color=005571" alt={lang} width="90" height="20" />
                    )
                case 'cli':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-CLI-005571?logo=windows%20terminal&logoColor=white&style=flat" alt={lang} width="50" height="20" />
                    )
                case 'googleMaps':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-GoogleMaps%20API-blue?logo=googlemaps&logoColor=white&style=flat" alt={lang} width="120" height="20" />
                    )
                case 'mapbox':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Mapbox%20API-007afc?logo=mapbox&logoColor=white&style=flat" alt={lang} width="100" height="20" />
                    )
                case 'openBrewery':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Open%20Brewery%20DB%20API-ffbc00?logo=homebrew&logoColor=white&style=flat" alt={lang} width="140" height="20" />
                    )
                case 'reactRouter':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-React%20Router-d0021b?logo=react%20router&logoColor=white&style=flat" alt={lang} width="100" height="20" />
                    )
                case 'fontawesome':
                    return (
                        <img key={lang} src="https://img.shields.io/badge/-Font%20Awesome-005571?logo=font%20awesome&logoColor=white&style=flat" alt={lang} width="90" height="20" />
                    )
                case 'hostgator':
                    return (
                        <img key={lang} src="https://img.shields.io/static/v1?label=Hosted&message=HostGator&color=005571" alt={lang} width="90" height="20" />
                    )
                default:
                    return (
                        <p>{lang}</p>
                    )
            }
        });
    }

    render() {
        const { name, imgUrl, description, githubUrl, linkUrl, youtube, techStack } = this.props
        return (
            <div className="project-item-wrapper">

                <div className="project-item">

                    <div className="image"
                        style={{
                            backgroundImage: `url(/images/${imgUrl})`
                        }}
                    >

                        <span className="card-top">
                            <div className="header">
                                <h1 className="name">{name}</h1>
                            </div>


                            <div className="link-container">
                                {
                                    githubUrl ?
                                        <span><a href={githubUrl} id="link" target="_blank" rel="noreferrer"><i className="fa fa-github" /></a></span>
                                        :
                                        null
                                }
                                {
                                    linkUrl ?
                                        <a href={linkUrl} id="link" target="_blank" rel="noreferrer"><i className="fa fa-link" /></a>
                                        :
                                        null
                                }
                                {
                                    youtube ?
                                        <a href={youtube} id="link" target="_blank" rel="noreferrer"><i className="fab fa-youtube" /></a>
                                        :
                                        null
                                }
                            </div>
                        </span>

                        <div className="collection-footer">
                            <span className="description">{description}</span>
                        </div>

                    </div>
                </div >
                <div>
                    <span className="techs">{this.stacks(techStack)}</span>
                </div>
            </div>
        )
    }
}

export default ProjectItem
