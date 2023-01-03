import React, { useState, Fragment } from 'react'
import { Logo2, ProfilePicture4 } from '../images'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../action/userAction'

const Header = () => {

    const alert = useAlert()
    const dispatch = useDispatch()

    const { user } = useSelector(state => state.auth)

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const [ourservices, setOurservices] = useState(false)
    const showOurservices = () => setOurservices(!ourservices)

    const [aboutus, setAboutus] = useState(false)
    const showAboutus = () => setAboutus(!aboutus)

    const [profileDropdown, setProfileDropdown] = useState(false)
    const showDropdown = () => setProfileDropdown(!profileDropdown)

    const logoutHandler = () => {
        setSidebar(!sidebar)
        dispatch(logoutUser())
        alert.success('Logout Successfully')
    }

    return (
        <Fragment>
            <div className="header">
                <div className="logo-header">
                    <Link to="/">
                        <img src={Logo2} alt="logo" />
                    </Link>
                </div>
                <div className={sidebar ? "caption-header active" : "caption-header"}>
                    <button className="cross" onClick={showSidebar}><ImCross /></button>
                    <br />
                    <div className="dropdown">
                        <button onClick={showOurservices}>OUR SERVICES</button>
                        <div className={ourservices ? "ourservices active" : "ourservices"}>
                            {
                                user ? (
                                    <Fragment>
                                        <Link onClick={showSidebar} to="/Nearest-Point">Pick Up</Link>
                                        <Link onClick={showSidebar} to="/Activities">Activities</Link>
                                        <Link onClick={showSidebar} to="/Challenges">Challenges</Link>
                                    </Fragment>
                                ) :
                                    <Link onClick={showSidebar} to="/Activities">Activities</Link>
                            }
                        </div>
                    </div>
                    <br />
                    <div className="dropdown">
                        <button onClick={showAboutus}>ABOUT US</button>
                        <div className={aboutus ? "aboutus active" : "aboutus"}>
                            <Link onClick={showSidebar} to="/Our-Partnership">Our Partner</Link>
                            <Link onClick={showSidebar} to="/Our-Story">Our Story</Link>
                            <Link onClick={showSidebar} to="/Help">FAQ</Link>
                        </div>
                    </div>
                    <br />
                    <div className="dropdown">
                        <Link onClick={showSidebar} to="/Shop">SHOP</Link>
                    </div>
                    <br />
                    {
                        user ? (
                            <div className="dropdown">
                                <button className="button-profile" onClick={showDropdown}>
                                    <figure className="profile-picture-header">
                                        <img src={ProfilePicture4} alt="PP" className="rounded-circle" />
                                    </figure>
                                </button>
                                <div className={profileDropdown ? 'profile active' : 'profile'}>
                                    <Link to="/Profile" onClick={showSidebar}>Profile</Link>
                                    <Link to="/" onClick={logoutHandler}>Logout</Link>
                                </div>
                            </div>
                        ) :
                            <div className="dropdown">
                                <Link to="/Login" onClick={showSidebar}>LOGIN</Link>
                            </div>
                    }
                </div>
                <i onClick={showSidebar}><GiHamburgerMenu /></i>
            </div>
        </Fragment>
    )
}

export default Header
