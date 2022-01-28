import React from 'react'
import { Fragment } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { challenges, challenges1, challenges2 } from '../images/challenges-images/index'

const Challenges = () => {

    return (
        <Fragment>
            <div className="challenges-page">
                <div className="challenges-carousel">
                    <div className="span">
                        <span style={{ color: "#368879" }} >1 TO 6 </span>
                        <span style={{ color: "#fff" }}>CHALLENGES</span>
                    </div>
                    <div className="date-challenges">
                        <h2>15- 21 NOVEMBER </h2>
                    </div>
                    <Carousel
                        renderThumbs={() => { }}
                        autoPlay={true}
                        interval={5000}
                    >
                        <div>
                            <img src={challenges} alt="" />
                        </div>
                        <div>
                            <img src={challenges1} alt="" />
                        </div>
                        <div>
                            <img src={challenges2} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="challanges-caption">
                    <h2>I WANT TO COLLABORATE</h2>
                    <br />
                    <p>I am committed to collaborate with this challenge because i believe simple things can have big impact. I will invite my friends to do the same as our contribution towards Indonesia becoming a Climate Super Power and saving the earth</p>
                    <div className="challenges-input">
                        <label for="cars">Challenges</label>
                        <select >
                            <option value="">Challenges 1</option>
                            <option value="">Challenges 2</option>
                            <option value="">Challenges 3</option>
                            <option value="">Challenges 4</option>
                        </select>
                    </div>
                    <br />
                    <div className="button-challenges">
                        <button>
                            Registration
                        </button>
                    </div>
                </div>
                <div className="challanges-participant">
                    <h2>PARTICIPANT</h2>
                    <br />
                    <div className="pil-challanges">
                        <p style={{ backgroundColor: "#368879", color: "#FFFFFF" }}>
                            CHALLENGE 1
                        </p>
                        <p style={{ backgroundColor: "#fff", color: "#368879" }}>
                            CHALLENGE 2
                        </p>
                    </div>
                    <div className="Ket-pers">
                        <div className="participant">
                            <div className="parts" />
                            <p>Participate</p>
                        </div>
                        <div className="target">
                            <div className="target2" />
                            <p>Target</p>
                        </div>
                    </div>
                    <br />
                    <div className="flex-wrapper">
                        <div class="single-chart">
                            <svg viewBox="0 0 36 36" className="circular-chart green">
                                <path class="circle-bg"
                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <path className="circle"
                                    stroke-dasharray="51, 100"
                                    d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                                />
                                <text x="18" y="20.35" className="percentage">51.2%</text>
                            </svg>
                        </div>
                    </div>
                    <br />
                    <div className="ket">
                        <span style={{ color: "#368879" }}>52</span>
                        <span style={{ color: "#fff" }}>/ 100</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Challenges
