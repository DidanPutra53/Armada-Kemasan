import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { product1, product2, product3 } from '../images/shop-images/index'
import { tokopedia } from '../images/index'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import MetaData from '../layout/MetaData'
import { useSelector } from 'react-redux';

const Profile = () => {

    const { user } = useSelector(state => state.auth)

    return (
        <Fragment>
            <MetaData title={'Profile'} />
            <div className="profile">
                <div className="profile-atas">
                    <div className="points">
                        <h1>My Points</h1>
                        <br />
                        <h2>{user.points}</h2>
                    </div>
                </div>
                <div className="button-redeem">
                    <Link to="/Point-Compression">
                        REDEEM POINT
                    </Link>
                </div>
                <div className="profile-carousel">
                    <Carousel
                        renderThumbs={() => { }}
                        autoPlay={true}
                        interval={5000}
                    >
                        <Link to="/Shop">
                            <div>
                                <img src={product1} alt="" />

                            </div>
                        </Link>
                        <Link to="/Shop">
                            <div>
                                <img src={product2} alt="" />

                            </div>
                        </Link>
                        <Link to="/Shop">
                            <div>
                                <img src={product3} alt="" />

                            </div>
                        </Link>
                    </Carousel>
                </div>
                <div className="profile-tokped">
                    <Link to="https://www.tokopedia.com/">
                        <img src={tokopedia} alt="" />
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Profile
