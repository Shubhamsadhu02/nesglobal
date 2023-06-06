import React from 'react'
import CertificateContactForm from '../CertificateContactForm';
import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import { useNavigate } from 'react-router-dom';

export default function CertificatePartner() {
    const naviagte = useNavigate();
    const handleBack = () => {
        naviagte(-1);
    }

    return (
        <>
            <Header showNav={true} isWhite={true} />


            <section className='contactBg' style={{ background: "#10243E", height: "auto", paddingBottom: "50px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="contactus">
                                <div className="contactus-content">
                                    <div className="contact-back mb-4" onClick={handleBack}>
                                        <h3><img src='/images/contacts/back-arrow.svg' />Go back</h3>
                                    </div>
                                    <div className="contact-head mb-5" style={{ paddingRight: "6rem" }}>
                                        <h1>Become Partner</h1>
                                    </div>
                                    <div className="contact-paragraph">
                                        <p>Supply Chain Management Specialists in India
                                            We take pride in possessing a team of specialists with sound expertise of freight and supply
                                            chain management in India, NES Global Certified Partners help keep goods moving around the
                                            world. They also provide the seamless visibility and collaboration you expect, all on the NES Global Platform.
                                            <br/>
                                            <br/>
                                            Please complete the form to register your interest in becoming a NES Global Certified Partner.</p>
                                    </div>

                                </div>
                                <div className="contact-image1 mt-5">
                                    <img src='/images/contacts/smiling-business.png' alt='' width={374} height={295} />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <CertificateContactForm />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
