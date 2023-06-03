import React from 'react'
import Header from '../Partials/Header'

export default function Signin() {
    return (
        <>
            <Header showNav={true} isWhite={true} />
            <section className="signin">
                <div className="container">
                    <div className="vault__box">
                        <div className="vault--header mb-5 text-center">
                            <h3>Create your account</h3>
                        </div>
                        <form>
                            <div className="vault--input">
                                <label for="fullname">Email Address</label>
                                <input type="name" id="name" name="fullname" placeholder="Full name" required />
                            </div>
                            <div className="vault--input">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                            </div>
                            <div className="vault--input">
                                <label for="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Type your password" required />
                            </div>
                            <div className='d-flex align-items-baseline'>
                                <input type={"checkbox"} className="mt-3" required></input>
                                <label className='signup-agree' style={{ marginLeft: "1rem", color: "#FFFFFF" }}>I agree to the <a href='/terms'><span style={{ color: "#0060BE" }}>Terms</span></a> of Service and <a href='/Privacy'><span style={{ color: "#0060BE" }}>Privacy Policy</span></a></label>
                            </div>
                            <div className="login-submit__btn mt-5">
                                <button type='submit'>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
