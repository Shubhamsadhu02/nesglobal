import React from 'react'

import { Link,NavLink, useParams } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer>
        <section style={{backgroundColor: "#10243E"}}>
            <div className="container">
                <div className="footer py-5">
                    <div className="footer-top d-flex justify-content-between">
                        <div className="footer-logo">
                            <Link to={"/"}><img src='/images/Home/logowhite.png' height={25} width={160} /></Link>
                        </div>
                        <div className="social-icon d-flex">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </div>

                    <div className="footer-middle mt-5">
                        <div className="row">
                            <div className="col-sm-12 col-lg-3">
                                <div className="footer-heading mb-4">
                                    <h5>PRODUCTS</h5>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li>Flexport Platform</li>
                                        <li>Visibility</li>
                                        <li>Order Management</li>
                                        <li>Customs</li>
                                        <li>Climate</li>
                                        <li>Ocean Freight</li>
                                        <li>Air Freight</li>
                                        <li>Trucking</li>
                                        <li>Trade Finance</li>
                                        <li>Trade Advisory</li>
                                        <li>Duty Drawback</li>
                                        <li>Cargo Insurance</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="footer-heading mb-4">
                                    <h5>RESOUCES</h5>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li>Blog</li>
                                        <li>Market Updates</li>
                                        <li>Research</li>
                                        <li>Videos and Webinars</li>
                                        <li>White Papers</li>
                                        <li>FlexU</li>
                                        <li>Help Center</li>
                                        <li>Glossary</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-3">
                                <div className="footer-heading mb-4">
                                    <h5>COMPANY</h5>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li>About Us</li>
                                        <li>Customers</li>
                                        <li>Engineering</li>
                                        <li>Newsroom</li>
                                        <li>Contact</li>
                                        <li>Leadership</li>
                                        <li>Flexport.org</li>
                                        <li>Global Network</li>
                                        <li>Events</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="footer-bottom d-flex justify-content-between">
                        <div className="copyrights">
                            <p>Copyright © 2022 Flexport, Inc.</p>
                        </div>
                        <div className="policy">
                            <a href='/terms'><p>Terms of Use / Privacy Policy</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </>
  )
}
