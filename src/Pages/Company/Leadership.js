import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function Leadership() {
  return (
    <>
<Header showNav={true} isWhite={true} />

<section style={{ background: "#10243E" }}>
    <div className="container">
        <div className="top-section d-flex align-items-center mb-5">
            <div className="row">
                <div className="col-lg-7">
                    <div className="product-heading mt-4">
                        <h1>Clear Vision. Committed Leadership.</h1>
                    </div>
                    <div className="product-paragraph mt-4">
                        <p>We are a founder-led company, driven by a clear vision of a better future. Working alongside our CEO, you'll find a passionate leadership team with deep expertise in technology, logistics, economics, and global trade.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section>
    <div className="container mt-15">
        <div className="team-lead">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <div className="team-img">
                        <img src='../images/Company/leadership/ryan.png' />
                    </div>
                    <div className="team-name  mt-4">
                        <h3>Ryan Petersen</h3>
                    </div>
                    <div className="team-post">
                        <h4>Founder & CEO</h4>
                    </div>
                    <div className="bio">
                        <h5>Short bio goes in here</h5>
                    </div>
                    <div className="team-social-links d-flex">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                    <div className="team-img">
                        <img src='../images/Company/leadership/sane.png' />
                    </div>
                    <div className="team-name mt-4">
                        <h3>Sanne Manders</h3>
                    </div>
                    <div className="team-post">
                        <h4>Chief Operating Officer</h4>
                    </div>
                    <div className="bio">
                        <h5>Short bio goes in here</h5>
                    </div>
                    <div className="team-social-links d-flex">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Request A Demo */}

<div className="mt-15"></div>

<section style={{ background: "url('../images/product/visibility/productbg.png')" }}>
        <div className="container">
          <div className="ready d-flex flex-column justify-content-center align-items-center">
            <div className="ready-heading">
              <h3>Ready to Get Started?</h3>
            </div>
            <div className="ready-paragraph text-center mt-3" style={{ width: "435px" }}>
              <p>Talk	to	a	supply	chain	solutions	expert	and	see	the	NES	Platform in	action.</p>
            </div>
            <div className="reday-btn mt-3">
              <button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Request A Demo</button>
            </div>
          </div>
        </div>
</section>


<Footer/>
    </>
  )
}
