import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import { HeaderOurStory, banner1, banner2, banner3, OurImpact, OurMission } from '../images/ourstory-images/index'
import { Carousel } from 'react-responsive-carousel';

const OurStory = () => {
    return (
        <Fragment>
            <MetaData title={'Our Story'} />
            <div className="our-story-page">
                <div className="header-our-story">
                    <img src={HeaderOurStory} alt="" />
                    <h1>OUR STORY</h1>
                    <p>Kami pengolah limbah minuman & makanan kemasan karton, kornes, kantong semen, kardus dan kertas putih bekas. Pengambilan dapat dilakukan di kantor/gedung, perumahan bahkan pabrik.</p>
                </div>
                <div className="content-our-story">
                    <h2>What We Do?</h2>
                    <Carousel
                        renderThumbs={() => { }}
                        autoPlay={true}
                        interval={5000}
                        infiniteLoop={true}
                        dynamicHeight={false}
                    >
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                        <div>
                            <img src={banner3} alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="footer-our-story">
                    <div className="our-mission-impact">
                        <img src={OurMission} alt="" />
                        <h6>Our Mission</h6>
                    </div>
                    <div className="our-mission-impact">
                        <img src={OurImpact} alt="" />
                        <h6>Our Impact</h6>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OurStory
