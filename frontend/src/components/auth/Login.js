import React, { Fragment, useState, useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'

import { BackgroundHome, Logo2 } from '../images/index'
import MetaData from '../layout/MetaData'
import { login, clearErrors } from '../../action/userAction'

const Login = ({ history }) => {

    const alert = useAlert()
    const dispatch = useDispatch()

    const [passwordShow, setPasswordShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
        dispatch(login(email, password))
    }

    return (
        <Fragment>
            <MetaData title={'Login'} />
            <div className="login-register-page">
                <img src={BackgroundHome} alt="bg" />
                <div className="login-register-content">
                    <div className="login-register-box">
                        <img src={Logo2} alt="bg" />
                        <br />
                        <h1>Welcome To Armada Kemasan</h1>
                        <br />
                        <form className="form" onSubmit={submitHandler}>
                            <div className="login-register-input">
                                <label htmlFor="email_field">
                                    Email :
                                </label>
                                <div className="input-form">
                                    <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            <br />
                            <div className="login-register-input">
                                <label htmlFor="password_field">
                                    Password :
                                </label>
                                <div className="input-form">
                                    <input type={passwordShow ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <i onClick={togglePassword}>{passwordShow ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</i>
                                </div>
                            </div>
                            <button
                                className="login-manual"
                                type='submit'
                            >
                                Login
                            </button>
                            <button className="login-google" style={{ backgroundColor: "#756b6c" }}>
                                <i><FcGoogle /></i>Login With Google Account
                            </button>
                        </form>
                        <div className="login-options">
                            <Link to="/Password/Forgot">Forgot Password</Link>
                            <Link to="/Register">Sign Up</Link>
                        </div>
                        <Link to="/">Back To Main Page</Link>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Login
