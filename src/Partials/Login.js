import React from 'react'
import Header from '../Partials/Header'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <Header showNav={true} isWhite={true} />
            <section className="login">
                <div className="container">
                    <div className="vault__box">
                        <div className="vault--header mb-5 text-center">
                            <h3>Login to NesGlobal</h3>
                        </div>
                        <form>
                            <div className="vault--input">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                            </div>
                            <div className="vault--input">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Type your password" required />
                            </div>
                            <div className="login--forgot">
                                <Link to={"#"}>Forgot Password?</Link>
                            </div>
                            <div className="login-submit__btn mt-5">
                                <button type='submit'>Accept & Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
