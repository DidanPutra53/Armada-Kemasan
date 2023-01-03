import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <Fragment>
            <div className="footer">
                <div className="keterangan">
                    <Link to="/OUR-Partnership">OUR PARTNER</Link>
                    <Link to="/Our-Story">OUR STORY</Link>
                    <Link to="/Subcription">SUBSCRIPTION</Link>
                    <Link to="/Contact-Us">CONTACT US</Link>
                    <Link to="/Terms">TERM & CONDITIONS</Link>
                    <Link to="/Privacy">PRIVACY & POLICY</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
