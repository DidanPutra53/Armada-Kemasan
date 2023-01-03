import React, { Fragment, useState } from 'react'
import MetaData from '../layout/MetaData'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

const Faq = () => {

    const [profileDropdown, setProfileDropdown] = useState(false)
    const showProfileDropdown = () => setProfileDropdown(!profileDropdown)

    return (
        <Fragment>
            <MetaData title={'Frequently Asked Questions'} />
            <div className="FAQ-page">
                <h1>FAQ</h1>
                <h2>Frequently Asked Questions</h2>
                <div className="FAQ-BOX">
                    <div className="button-faq">
                        <button onClick={showProfileDropdown}>
                            Profile Related Questions {profileDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </button>
                    </div>
                    <div className={profileDropdown ? "PRQ active" : "PRQ"}>
                        <h3>How do i to create a profile?</h3>
                        <h3>How do i to login with gmail account? <p>You can click on the logo of Gmail and then you can follow the instruction from Gmail</p></h3>
                        <h3>How do i to manage a profile?</h3>
                    </div>
                    <br />
                    <div className="button-faq">
                        <button>
                            Shop Related Questions  <IoIosArrowDown />
                        </button>
                    </div>
                    <br />
                    <div className="button-faq">
                        <button>
                            System Related Questions  <IoIosArrowDown />
                        </button>
                    </div>
                    <br />
                    <div className="button-faq">
                        <button>
                            Support Related Questions  <IoIosArrowDown />
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Faq
