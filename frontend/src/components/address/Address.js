import React, { Fragment } from 'react'
import { Logo2 } from '../images/index'
import { countries } from 'countries-list'
import MetaData from '../layout/MetaData'

const Address = ({ history }) => {

    const countriesList = Object.values(countries)

    const submitHandler = () => {
        history.push('/Nearest-Point')
    }

    return (
        <Fragment>
            <MetaData title={'Address'} />
            <div className="address-page">
                <h1>Add Address</h1>
                <br />
                <form className="form" onSubmit={submitHandler} encType="multipart/form-data">
                    <div className="address-box">
                        <div className="address-input">
                            <label htmlFor="address_field">
                                Address
                            </label>
                            <div className="input-form">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Address"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="address-input">
                            <label htmlFor="city_field">
                                City
                            </label>
                            <div className="input-form">
                                <input
                                    className="form-control"
                                    type="text"
                                    placeholder="City"
                                />
                            </div>
                        </div>
                        <br />
                        <div className="address-input">
                            <label htmlFor="country_field">
                                Country
                            </label>
                            <div className="input-form">
                                <select
                                    className="form-control"
                                >
                                    {countriesList.map(country => (
                                        <option key={country.name} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="button-address">
                        <button>
                            Sumbit
                        </button>
                    </div>
                </form>
                <br />
                <img src={Logo2} alt="" />
            </div>
        </Fragment>
    )
}

export default Address
