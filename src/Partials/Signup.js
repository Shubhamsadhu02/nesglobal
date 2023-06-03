import React from 'react'

export default function signup() {
  return (
    <section className='signup' style={{background: "#E6EFF9", padding: "7rem 0 4rem 0"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 pr-3">
                    <div className="signup-img mb-2">
                        <img src='../images/Home/signupicon.png' alt='' height={104} width={104} />
                    </div>
                    <div className="animation">
                        <div className="signup-heading">
                            <h3>Sign-Up for Our Intelligent Commerce Newsletter</h3>
                        </div>
                        <div className="signup-paragraph">
                            <p>Trade perspectives, Business News & Trending discussions </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12">
                    <div className="signup-box">
                        <h4>Work Email ID:</h4>
                        <input type={'email'} className="email" placeholder="Enter Email Address" required/>
                        
                        <div className='d-flex align-items-baseline'>
                            <input type={"checkbox"} className="mt-3" required></input>
                            <label className='signup-agree' style={{marginLeft: "1rem"}}>I agree to the <a href='/terms'><span style={{color: "#0060BE"}}>Terms</span></a> of Service and <a href='/Privacy'><span style={{color: "#0060BE"}}>Privacy Policy</span></a></label>
                        </div>
                        
                        <button type='submit' className='signup-btn'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
