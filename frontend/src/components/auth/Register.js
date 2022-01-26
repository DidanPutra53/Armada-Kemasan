import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useAlert } from 'react-alert'

import { BackgroundHome, Logo2 } from '../images/index'
import MetaData from '../layout/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { register, clearErrors } from '../../action/userAction'

const Register = ({ history }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")

    const alert = useAlert()
    const dispatch = useDispatch()

    const [passwordShow, setPasswordShow] = useState(false)

    const { isAuthenticated, error } = useSelector(state => state.auth)

    useEffect(() => {

        if (isAuthenticated) {
            history.push('/')
        }

        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

    }, [dispatch, alert, isAuthenticated, error, history])

    const togglePassword = () => {
        setPasswordShow(!passwordShow)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.set('firstname', firstname)
        formData.set('lastname', lastname)
        formData.set('email', email)
        formData.set('password', password)
        dispatch(register(formData))
    }

    return (
        <Fragment>
            <MetaData title={'Register'} />
            <div className="login-register-page">
                <img src={BackgroundHome} alt="bg" />
                <div className="login-register-content">
                    <div className="login-register-box">
                        <img src={Logo2} alt="bg" />
                        <br />
                        <h1>Create a New Account</h1>
                        <br />
                        <form className="form" onSubmit={submitHandler} encType="multipart/form-data">
                            <div className="login-register-input">
                                <label htmlFor="first-name_field">
                                    First Name:
                                </label>
                                <div className="input-form">
                                    <input
                                        type="text"
                                        placeholder="Firstname"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="login-register-input">
                                <label htmlFor="last-name_field">
                                    Last Name:
                                </label>
                                <div className="input-form">
                                    <input
                                        type="text"
                                        placeholder="Lastname"
                                        value={lastname}
                                        onChange={(e) => setLastname(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="login-register-input">
                                <label htmlFor="email_field">
                                    Email :
                                </label>
                                <div className="input-form">
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="login-register-input">
                                <label htmlFor="password_field">
                                    Password :
                                </label>
                                <div className="input-form">
                                    <input
                                        type={passwordShow ? "text" : "password"}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i onClick={togglePassword}>{passwordShow ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</i>
                                </div>
                            </div>
                            <br />
                            <p>
                                By clicking below, you agree to the Armada Kemasan website <Link to="/Terms" style={{ display: "block", margin: "0px" }}> terms of use </Link> and <Link to="/Privacy" style={{ display: "block", margin: "0px" }}> privacy policy</Link>
                            </p>
                            <button>
                                Create Account
                            </button>
                            <p>
                                Already create a new account?
                                <Link to="/Login" style={{ display: "block", margin: "0px" }}>
                                    Log in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Register
