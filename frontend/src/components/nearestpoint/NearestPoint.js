import React from 'react'
import { Fragment } from 'react'
import GoogleMap from '../googlemap/GoogleMap'
import MetaData from '../layout/MetaData'
import { useAlert } from 'react-alert'

const NearestPoint = ({ history }) => {
    const alert = useAlert()

    const submitHandler = () => {
        alert.success('Your Waste Successfully Saved')
        history.push('/Tips')
    }

    return (
        <Fragment>
            <MetaData title={'Nearest Point'} />
            <div className="NearestPoint-page">
                <div className="Google-Maps">
                    <GoogleMap />
                </div>
                <div className="find-address-input">
                    <div className="input-form">
                        <h1>Can't find nearest point?</h1>
                        <input
                            type="text"
                            placeholder="Armada Kemasan 1"
                        />
                        <br />
                        <button>Choose</button>
                    </div>
                    <br />
                    <div className="input-form">
                        <h1>Send your Waste</h1>
                        <input
                            type="text"
                            placeholder="Waste Weight on Kg (ex: 3 Kg)"
                        />
                        <br />
                        <button onClick={submitHandler}>Send your Waste</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NearestPoint
