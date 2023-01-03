import React, { Fragment } from 'react'
import MetaData from '../../layout/MetaData'
import articles from '../Article'
import { useParams } from 'react-router-dom'
import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'

const ActivitiesDetails = ({ match }) => {

    const { id } = useParams()

    const article = articles.find(p => p.id === match.params.id)

    return (
        <Fragment>
            <MetaData title={id} />
            <div className="article-details-page">
                <div className="article-title-page">
                    <div className="article-title-left">
                        <h5>{article.location}</h5>
                        <h1>{article.title}</h1>
                        <h6>{article.caption}</h6>
                        <AiFillFacebook />
                        <AiOutlineInstagram />
                    </div>
                    <img src={article.images} alt="" />
                </div>
                <div className="article-overview">
                    <p>{article.overview}</p>
                </div>
                <div className="article-location">
                    <div className="article-location-map">
                        <img src={article.imageLocation} alt="" />
                    </div>
                    <div className="article-location-location">
                        <b>Location: </b>
                        <p> {article.location}</p>
                    </div>
                </div>
                <div className="article-content">
                    <b>{article.b}</b>
                    <br />
                    <p>{article.p}</p>
                </div>
                <div className="article-quotes">
                    <hr />
                    <div className="article-qoutes-qoutes">
                        <p> {article.quotes}</p>
                    </div>
                    <div className="article-qoutes-name">
                        <b>{article.name}</b>
                    </div>
                    <hr />
                </div>
            </div>
        </Fragment>
    )
}


export default ActivitiesDetails
