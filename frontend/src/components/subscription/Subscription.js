import React from 'react'
import { Fragment } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { useAlert } from 'react-alert'

const Subscription = ({ history }) => {

    const alert = useAlert()

    const submitHandler = () => {
        alert.success("Subscription")
        history.push('/')
    }

    return (
        <Fragment>
            <div className="subscription-page">
                <h1>Subscription</h1>
                <div className="subscription">
                    <h2>Subscription</h2>
                    <br />
                    <h3>Free</h3>
                    <br />
                    <p>On behalf of the planet, we would like to introduce you to our FREE monthly subscription service!
                        Hmm... What's the catch? There's none! We just want to hel you get into the habit of recycling.
                        You commit to recycling regularly, we pickup for FREE. Simple.
                    </p>
                    <br />
                    <hr />
                    <br />
                    <div className="subscription-text">
                        <p>Why choose subscription?</p>
                        <br />
                        <ul>
                            <li><AiOutlineCheck /><p>Up your recycling game</p></li>
                            <li><AiOutlineCheck /><p>We offset your carbon footprint for 1 month</p></li>
                            <li><AiOutlineCheck /><p>Change or skip your pickup date until 6pm the day before</p></li>
                            <li><AiOutlineCheck /><p>Cancel anytime</p></li>
                            <li><AiOutlineCheck /><p>Add extra bags for just Rp 30,000 per bag</p></li>
                            <li><AiOutlineCheck /><p>Need more pickups? Just book through the email</p></li>
                        </ul>
                    </div>
                    <br />
                    <div className="button-subscription">
                        <button onClick={submitHandler}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Subscription
