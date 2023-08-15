import React from 'react'
import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import { Link } from 'react-router-dom'

export default function Contactus2() {
    return (
        <>
            <Header showNav={true} isWhite={true} />
            <section style={{ background: "#10243E", padding: "100px 0" }}>
                <div className="conatiner text-center">
                    <div className="contact-email mb-5">
                        <img src="/images/contacts/email.png" height={80} width={80} alt="" />
                    </div>
                    <div className="contact-head">
                        <h1>Contact us</h1>
                    </div>
                    <div className="contact-content mt-5">
                        <div className="">
                            <p><span>Email:</span><a href="mailto:contact@nesglobal.in">
                                contact@nesglobal.in</a></p>
                        </div>
                        <div className="">
                            <p><span>Press:</span><a href="mailto:communication@nesglobal.in">
                                communication@nesglobal.in</a></p>
                        </div>
                        <div className="">
                            <p><span>Careers:</span><a href="mailto:careers@nesglobal.in">
                                careers@nesglobal.in</a></p>
                        </div>
                        <div className="">
                            <p><span>Security:</span>Visit our <Link to={"/vulnerability"}>
                                vulnerability disclosure program page</Link></p>
                        </div>
                        <div className="">
                            <p><span>Partner Inquiries:</span>Interested in becoming a <Link to={"/certified-partner"}>
                                Nesglobal Certified Partner </Link></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='register'>
                <div className="container text-center">
                    <div className="contact-head">
                        <h1 style={{ color: "#403F3E" }}>Registered Office</h1>
                    </div>
                    <div className="contact-address mt-4">
                        <p>NES Global Solutions Private Limited<br />
                            WeWork DLF, HD 36, Two Horizon Centre, 5 th Floor, DLF,<br /> Phase 5, Sector 43, Golf Course Road,<br />
                            Gurugram, Haryana 122002</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
