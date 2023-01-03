import React, { Fragment } from 'react'
import { BackgroundHome } from '../images/index'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'

const NotFound = () => {
    return (
        <Fragment>
            <MetaData title={'Page Not Found'} />
            <div className="notfound-page">
                <img src={BackgroundHome} alt="" />
                <div className="notfound-text">
                    <h1>404: Page not found</h1>
                    <br />
                    <Link to="/">Back To Home Page</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound
