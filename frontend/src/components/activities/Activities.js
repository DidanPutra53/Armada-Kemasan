import React, { useState, Fragment, useEffect } from 'react'
import MetaData from '../layout/MetaData'
import { indomap } from '../images/artikel-images/index'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Carousel } from 'react-responsive-carousel'
import articles from './Article'
import { Link } from 'react-router-dom'
import { Modal } from 'react-modal-overlay'
import 'react-modal-overlay/dist/index.css'

const Activities = () => {

    const [allproject, setAllProject] = useState(true)
    const [byproject, setByProject] = useState(false)
    const onAllProject = () => {
        setAllProject(!allproject)
        setByProject(false)
    }
    const onByProject = () => {
        setByProject(!byproject)
        setAllProject(false)
    }

    const getRenderedItems = () => {
        if (isOpen) {
            return (
                articles
            )
        }
        return (
            articles.slice(0, MAX_ITEMS)
        )
    }

    const MAX_ITEMS = 2
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    //FILTER MULTIPLE DATA JSON//
    // const filterOptions = ["Nebraska, USA", "Colombo, Sri Lanka"]
    // let res = articles.filter(
    //     ({ location }) => new RegExp(filterOptions.join("|")).test(location)
    // )

    // console.log(res);

    const [isArticleOneOpen, setIsArticleOneOpen] = useState(false);
    const [isArticleTwoOpen, setIsArticleTwoOpen] = useState(false);
    useEffect(() => {
        if (isArticleOneOpen || isArticleTwoOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [isArticleOneOpen, isArticleTwoOpen]);

    return (
        <Fragment>
            <MetaData title={'Activities'} />
            <div className="activities-page">
                <div className="carousel-activites">
                    <h1>Activites</h1>
                    <div className="carousel">
                        <Carousel
                            renderThumbs={() => { }}
                            autoPlay={true}
                            interval={5000}
                            infiniteLoop={true}
                            dynamicHeight={false}
                        >
                            {
                                articles && articles.map((article, id) => {
                                    return (
                                        <div style={{ height: "700px" }} key={id}>
                                            <img style={{ objectfit: "cover" }} src={article.images} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="our-project">
                    <div className="our-project-title">
                        <h6>Our Project</h6>
                        <ul>
                            <li onClick={onAllProject} className={allproject ? "li-all-project active" : "li-all-project"} >All Project</li>
                            <li onClick={onByProject} className={byproject ? "li-by-project active" : "li-by-project"}>By Projects</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="list-activities">
                        <div className={allproject ? "all-project active" : "all-project"}>
                            <div className="list-project">
                                {getRenderedItems().map((article, index) => {
                                    return (
                                        <div className="project-detail" key={index}>
                                            <img src={article.images} alt="" />
                                            <div className="project-caption">
                                                <h2>{article.category}</h2>
                                                <h3>{article.title}</h3>
                                                <h4>{article.overview}</h4>
                                                <Link to={`/Activities/${article.id}`}>
                                                    <i>Read more <HiOutlineArrowNarrowRight /></i>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="button-load-more">
                                <button onClick={toggle}>{isOpen ? 'Less' : 'More'}</button>
                            </div>
                        </div>
                        <div className={byproject ? "by-project active" : "by-project"}>
                            <img src={indomap} alt="" />
                            <button className="button-article1" onClick={() => setIsArticleOneOpen(true)}></button>
                            <Modal show={isArticleOneOpen} closeModal={() => setIsArticleOneOpen(false)}>
                                {
                                    articles.filter(article => article.location === ("Nebraska, USA"))
                                        .map((article, id) => {
                                            return (
                                                <div key={id} className="modals">
                                                    <img src={article.images} />
                                                    <div className="article-text">
                                                        <h1>{article.title}</h1>
                                                        <br />
                                                        <h2>{article.location}</h2>
                                                        <br />
                                                        <h3>{article.caption}</h3>
                                                        <br />
                                                        <Link to={`/Activities/${article.id}`}>
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </Modal>
                            <button className="button-article2" onClick={() => setIsArticleTwoOpen(true)}></button>
                            <Modal show={isArticleTwoOpen} closeModal={() => setIsArticleTwoOpen(false)}>
                                {
                                    articles.filter(article => article.location === ("Colombo, Sri Lanka"))
                                        .map((article, id) => {
                                            return (
                                                <div key={id} className="modals">
                                                    <img src={article.images} />
                                                    <div className="article-text">
                                                        <h1>{article.title}</h1>
                                                        <br />
                                                        <h2>{article.location}</h2>
                                                        <br />
                                                        <h3>{article.caption}</h3>
                                                        <br />
                                                        <Link to={`/Activities/${article.id}`}>
                                                            Read More
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Activities
