import React from 'react'

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <footer>
        <section style={{backgroundColor: "#10243E"}}>
            <div className="container">
                <div className="footer py-5">
                    <div className="footer-top d-flex justify-content-between align-items-center">
                        <div className="footer-logo">
                            <Link to={"/"}><img src='/images/Home/logowhite.png' height={25} width={160} alt="" /></Link>
                        </div>
                        <div className="social-icon d-flex">
                            <i class="fab fa-facebook-f"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                    </div>

                    <div className="footer-middle mt-5">
                        <div className="row" style={{rowGap: "25px"}}>
                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="footer-heading mb-4">
                                    <h5>PRODUCTS</h5>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li><Link to={"/product/nes-platform"}>NES Platform</Link></li>
                                        {/* <li><Link to={"/product"}>Order Management</Link></li> */}
                                        <li><Link to={"/product/visibility"}>Visibility</Link></li>
                                        <li><Link to={"/product/customs"}>Customs</Link></li>
                                        {/* <li><Link to={"/product/project-air-and-ocean-charters"}>Climate</Link></li> */}
                                        <li><Link to={"/product/ocean-freight"}>Ocean Freight</Link></li>
                                        <li><Link to={"/product/air-freight"}>Air Freight</Link></li>
                                        <li><Link to={"/product/trade-finance"}>Trade Finance</Link></li>
                                        <li><Link to={"/product/trade-advisory"}>Trade Advisory</Link></li>
                                        <li><Link to={"/product/duty-drawbacks"}>Duty Drawback</Link></li>
                                        <li><Link to={"/product/cargo-insurance"}>Cargo Insurance</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="footer-heading mb-4">
                                    <h5>RESOUCES</h5>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li><Link to={"/resources/blog"}>Blog</Link></li>
                                        {/* <li><Link to={"/resources"}>Market Updates</Link></li> */}
                                        {/* <li><Link to={"/resources"}>Videos and Webinars</Link></li> */}
                                        {/* <li><Link to={"/resources"}>NES School</Link></li> */}
                                        <li><Link to={"/resources/faq"}>Help Center</Link></li>
                                        <li><Link to={"/resources/glossary"}>Glossary</Link></li>
                                        <li><Link to={"/resources/refund-policy"}>Refund Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-3 col-lg-3">
                                <div className="footer-heading mb-4">
                                    <h5>COMPANY</h5>
                                </div>
                                <div className="footer-list">
                                    <ul>
                                        <li><Link to={"/company/about-us"}>About Us</Link></li>
                                        {/* <li><Link to={"/company"}>Customers</Link></li> */}
                                        {/* <li><Link to={"/company"}>Newsroom</Link></li> */}
                                        <li><Link to={"/company/contact-us"}>Contact</Link></li>
                                        <li><Link to={"/vulnerability"}>Vulnerability</Link></li>
                                        {/* <li><Link to={"/company/leadership"}>Leadership</Link></li> */}
                                        {/* <li><Link to={"/company"}>Careers</Link></li> */}
                                        <li><Link to={"http://www.nescare.in"} target="_blank">Nescare.in</Link></li>                                       
                                        {/* <li><Link to={"/company"}>Events</Link></li> */}
                                        {/* <li><Link to={"/resources/faq"}>FAQs</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr/>

                    <div className="footer-bottom d-flex justify-content-between">
                        <div className="copyrights">
                            <p>Copyright © {new Date().getFullYear()} NES Global Solutions Pvt Ltd.</p>
                        </div>
                        <div className="policy">
                            <Link to='/terms'><p>Terms of Use / Privacy Policy</p></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>
    </>
  )
}
