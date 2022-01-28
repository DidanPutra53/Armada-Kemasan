import React from 'react'
import { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { partnership, partnership2, partnership3, investor1, investor2, investor3, investor4 } from '../images/ourstory-images/index'

const OurParthership = () => {
    return (
        <Fragment>
            <MetaData title={'Our Partnership'} />
            <div className="partner-ship-page">
                <div className="partner-ship-image">
                    <img src={partnership} alt="" />
                    <div className="partnership-image">
                        <img src={partnership2} alt="" />
                        <img src={partnership3} alt="" />
                    </div>
                    <div className="partnership-text">
                        <h1>Our Partnership</h1>
                        <br />
                        <p>The Global Plastics Action Partnership (GPAP) was forged as a structured global
                            public-private partnership for action on plastic that enables public, private and civil society
                            sectors and their initiatives to come together.</p>
                    </div>
                </div>
                <div className="partnership-listed">
                    <div className="partnership-list-header">
                        <h1>Investor Relation</h1>
                        <p>This is our relations</p>
                    </div>
                    <div className="partnership-list">
                        <div className="partnership-card">
                            <img src={investor1} alt="" />
                            <p>PT.Sakura</p>
                        </div>
                        <div className="partnership-card">
                            <img src={investor2} alt="" />
                            <p>PT.Mutiara</p>
                        </div>
                        <div className="partnership-card">
                            <img src={investor3} alt="" />
                            <p>PT.Sidomuncul</p>
                        </div>
                        <div className="partnership-card">
                            <img src={investor4} alt="" />
                            <p>PT.Tiga Roda</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OurParthership
