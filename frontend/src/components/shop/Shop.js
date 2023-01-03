import React, { Fragment } from 'react'
import MetaData from '../layout/MetaData'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { banner2, banner3, banner1, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product16, product17, product18, product19, product15 } from '../images/shop-images/index'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const Shop = () => {
    return (
        <Fragment>
            <MetaData title={'Shop'} />
            <div className="shop">
                <div className="shop-carousel">
                    <h1>SHOP</h1>
                    <p>You can buy these products at official store of the packaging fleet at Tokopedia</p>
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
                <br />
                <div className="our-product">
                    <h1>OUR PRODUCT</h1>
                    <p>The collected plastic waste will later bw reused as raw materials in the manufacture of products that we use daily</p>
                    <div className="all-product">
                        <div className="list-product">
                            <div className="card-product">
                                <img src={product4} alt="" />
                                <h5>Terracota Coaster</h5>
                                <h6>Rp 80.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product5} alt="" />
                                <h5>Substantial Plant Pot</h5>
                                <h6>Rp 250.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product6} alt="" />
                                <h5>Tableware Terracota</h5>
                                <h6>Rp 450.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product7} alt="" />
                                <h5>Substantial Chair</h5>
                                <h6>Rp 800.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product8} alt="" />
                                <h5>Recycled Plastic Laundry Basket</h5>
                                <h6>Rp 50.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product9} alt="" />
                                <h5>Recycled Plastic Sustainable Bag</h5>
                                <h6>Rp 100.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product10} alt="" />
                                <h5>Recycled Plastic Charcuterier Board</h5>
                                <h6>Rp 90.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product11} alt="" />
                                <h5>Recycled Plastic Planter Plant (Small)</h5>
                                <h6>Rp 75.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product12} alt="" />
                                <h5>Terracota Soap Dish</h5>
                                <h6>Rp 80.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product13} alt="" />
                                <h5>Terracota Chair for Kids (Chairlie Chair)</h5>
                                <h6>Rp 300.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product14} alt="" />
                                <h5>Terracota Chair</h5>
                                <h6>Rp 750.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product15} alt="" />
                                <h5>Substantial Tray</h5>
                                <h6>Rp 120.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product16} alt="" />
                                <h5>Terracota Coffee Table</h5>
                                <h6>Rp 1.250.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product17} alt="" />
                                <h5>Terracota Night Lamp</h5>
                                <h6>Rp 250.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product18} alt="" />
                                <h5>Substantial Tote Bag</h5>
                                <h6>Rp 250.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                            <div className="card-product">
                                <img src={product19} alt="" />
                                <h5>Recycled Plastic Washing Up Bowl</h5>
                                <h6>Rp 250.000,-</h6>
                                <br />
                                <h6>Buy Now <i><HiOutlineArrowNarrowRight /></i></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Shop
