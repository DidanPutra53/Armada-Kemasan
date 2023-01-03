import React, { Fragment } from 'react'
import { FiCopy } from 'react-icons/fi'
import { useAlert } from 'react-alert'

const Redeem = ({ history }) => {

    const alert = useAlert()

    const max = 999
    const min = 100

    const number = Math.floor(Math.random() * (max - min + 1)) + min

    const copyHandler = () => {
        alert.success('Copied')
    }

    const submitHandler = () => {
        history.push('/')
    }

    return (
        <Fragment>
            <div className="reedem-page">
                <h1>Here's your voucher!</h1>
                <br />
                <div className="box-reedem">
                    <p>This voucher is only applied for one time purchase.</p>
                    <br />
                    <div className="box-input">
                        <input value={`TOKPARMADA${number}`} readOnly />
                        <i onClick={copyHandler}><FiCopy /></i>
                    </div>
                </div>
                <br />
                <div className="reedem-button">
                    <button onClick={submitHandler}>
                        OK
                    </button>
                </div>
                <br />
                <div className="reedem-tips">
                    <p>For further information or tutorial please contact us</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Redeem
