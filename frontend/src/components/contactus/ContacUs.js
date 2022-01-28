import React, { Fragment } from 'react'
import { useAlert } from 'react-alert'

const ContacUs = ({ history }) => {

    const alert = useAlert()

    const submitHandler = () => {
        alert.success('Message sent successfully')
        history.push('/')
    }

    return (
        <Fragment>
            <div className="contact-us-page">
                <div className="contact-us-left">
                    <h1>
                        Contact Us
                    </h1>
                    <br />
                    <p>Fill up the form and our Team will get back to your within 24 hours</p>
                </div>
                <div className="contact-us-right">
                    <div className="contact-us-input">
                        <div className="input-form">
                            <label>
                                FirstName
                            </label>
                            <input
                                type="text"
                                placeholder="FirstName"
                            />
                        </div>
                        <div className="input-form">
                            <label>
                                LastName
                            </label>
                            <input
                                type="text"
                                placeholder="LastName"
                            />
                        </div>
                        <div className="input-form">
                            <label>
                                Email
                            </label>
                            <input
                                type="text"
                                placeholder="Email"
                            />
                        </div>
                        <div className="text-area-form">
                            <label>
                                Message
                            </label>
                            <textarea
                                type="text"
                                placeholder="Message"
                            />
                        </div>
                        <div className="contact-us-button">
                            <button onClick={submitHandler}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ContacUs
