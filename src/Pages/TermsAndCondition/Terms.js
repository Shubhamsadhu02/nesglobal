import React from 'react'
import { Link} from 'react-router-dom'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function Terms() {
  return (
    <>
    <Header />
    <section>
        <div className="container mb-15" style={{paddingTop: "10rem"}}>
              <div className="row">
                    <div className="col-lg-8">
                        <div className="termsdate pb-3">
                            <h3 style={{color: "#737171"}}>Effective Date: April 4, 2022</h3>
                        </div>
                        <div className="terms-heading">
                            <h1>NES GLOBAL TERMS & CONDITIONS</h1>
                        </div>
                        <div className="terms-paragrapgh">
                            <p style={{color: "#737171"}}>By requesting or accepting goods or services from NES Global Solutions Pvt Ltd. and/or its subsidiaries and affiliates (collectively, “NES GLOBAL”), the Customer agrees to the following terms and conditions of service (“Terms and Conditions”).
                                <br/>
                                <br/>
                                NES GLOBAL may from time to time change these Terms and Conditions. Any changes are effective immediately upon publication on our website at <Link to='/terms'><span style={{color: "#0060BE", fontWeight: "500"}}>www.Nesglobal.in/terms</span></Link>.
                                <br/>
                                <br/>
                                NES Global Privacy Policy: <Link to='/Privacy'><span style={{color: "#0060BE", fontWeight: "500"}}>www.Nesglobal.in/privacy</span></Link>
                            </p>
                        </div>
                        <div className="terms-list mt-5">
                            <ul>
                                <li>
                                    <Link to='/ocean-tnc'>International Ocean Bill of Lading Terms &amp; Conditions – Nes Global Solutions Pvt Ltd.</Link>
                                </li>
                                <li>
                                    <Link to='/air-tnc'>Nes Global International Air Waybill Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link to='/customs-tnc'>Nes Global Customs Brokerage and General Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link to='/visibility-tnc'>Nes Global Software and Visibility Terms &amp; Conditions</Link>
                                </li>
                                <li>
                                    <Link to={'/payment-tnc'}>NES Global Solutions Payment Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
              </div>
        </div>
    </section>

    <Footer/>
    </>
  )
}
