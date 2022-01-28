import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';

const PointCompression = ({ history }) => {

    const { user } = useSelector(state => state.auth)

    let form;

    if (user.points <= 100) {
        form = <Fragment>
            <input type="radio" id="100" name="skills" value="100" />
            <label for="100">
                <p>Point Use: 100</p>
                <br />
                <p>10% discount min. purchase Rp.</p>
            </label>
        </Fragment>
    } else if (user.points <= 200) {
        form = <Fragment>
            <input type="radio" id="100" name="skills" value="100" />
            <label for="100">
                <p>Point Use: 100</p>
                <br />
                <p>10% discount min. purchase Rp.</p>
            </label>
            <input type="radio" id="200" name="skills" value="200" />
            <label for="200">
                <p>Point Use: 200</p>
                <br />
                <p>20% discount min. purchase Rp.</p>
            </label>
        </Fragment>
    } else {
        form = <Fragment>
            <input type="radio" id="300" name="skills" value="300" />
            <label for="300">
                <p>Point Use: 300</p>
                <br />
                <p>32% discount min. purchase Rp.</p>
            </label>
        </Fragment>
    }

    const submitHandler = () => {
        history.push('/Reedem')
    }

    return (
        <Fragment>
            <div className="point-compression-page">
                <h1>Point Compression</h1>
                <br />
                <h2>Points : {user.points}</h2>
                <br />
                <form className="boxed">
                    {form}
                </form>
                <br />
                <div className="point-button">
                    <button onClick={submitHandler}>
                        Redeem
                    </button>
                </div>
            </div>
        </Fragment>
    )
}

export default PointCompression
