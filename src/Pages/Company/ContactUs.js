import React from 'react';
import Header from '../../Partials/Header';
import {useNavigate} from "react-router-dom"

export default function ContactUs() {
    const naviagte= useNavigate();
    const handleBack = () =>  {
        naviagte(-1);
    }

  return (
    <>
    <Header showNav={true} isWhite={true} />

   
    <section className='contactBg' style={{ background: "#10243E", height: "125vh" }}>
        <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="contactus">
                            <div className="contactus-content">
                                <div className="contact-back mb-4" onClick={handleBack}>
                                    <h3><img src='/images/contacts/back-arrow.svg'/>Go back</h3>
                                </div>
                                <div className="contact-head mb-5" style={{paddingRight: "6rem"}}>
                                    <h1>Connect with us</h1>
                                </div>
                                <div className="contact-paragraph">
                                    <p>Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi modally across Sea, Air, Rail and Road shipments.</p>
                                </div>
                            </div>
                            <div className="contact-image mt-5">
                                <img src='/images/contacts/Active-Support-cuate.png' alt=''/>
                            </div>
                        </div>
                    </div>
   
                    <div className="col-lg-6">
                      <div className="enquiry-box" style={{marginTop: "90px"}}>
                        <div className="row">
                          <div className="col-lg-6">
                            <label for="firstname">Firstname</label>   
                            <input type="text" id="firstname" name="ftname" placeholder= "Firstname" />  
                          </div>
                          <div className="col-lg-6">
                            <label for="company">Company Name</label>   
                            <input type="text" id="company" name="Company" placeholder= "Company" />  
                          </div>

                          <div className="mb-4"></div>

                          <div className="col-lg-6">
                            <label for="companyMailId">Company Mail ID</label>   
                            <input type="email" id="companyMailId" name="Company Mail ID" placeholder= "Company Mail ID" />  
                          </div>
                          <div className="col-lg-6">
                            <label for="designation">Designation</label>   
                            <input type="text" id="designation" name="Designation" placeholder= "Designation" />  
                          </div>

                          <div className="mb-4"></div>

                          <div className="col-lg-6">
                            <label for="companyPhoneNo">Company Phone Number</label>   
                            <input type="tel" id="companyPhoneNo" name="Company Phone Number" placeholder= "+91" />  
                          </div>
                          <div className="col-lg-6">
                            <label for="noAirFreight">No. of Air Freight Shipments</label>   
                            <input type="text" id="noAirFreight" name="No. of Air Freight Shipments" placeholder= "##" />  
                          </div>

                          <div className="mb-4"></div>


                          <div className="col-lg-12 d-flex flex-column">
                              <label for="address">Company Postal Address</label>
                              <textarea type="text" id="address" name="address" placeholder='Enter Address' />
                          </div>

                          <div className="send-btn mt-4">
                              <button type='submit'>Sumbit</button>
                          </div>

                          <div className="enquiry-terms mt-3">
                            <p>By continuing, you agree to accept our <a><span style={{color: "#0060BE", fontWeight: "500"}}> Privacy Policy </span></a> and <a><span style={{color: "#0060BE", fontWeight: "500"}}>Terms of Service</span></a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            
        </div>
    </section>

    {/* <section style={{ background: "#10243E" }}>
        <div className="container">
            <div className="top-section" style={{paddingTop: "90px", height: "690px"}}>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="contactus">
                            <div className="contact-head mb-5">
                                <h3>Contact Us</h3>
                            </div>
                            <div className="address-head">
                                <h4 style={{color: "#403F3E"}}>Our Address</h4>
                            </div>
                            <div className="address">
                                <p>Nes Global LLP <br/>
                                    HD 036, We Work, Two Horizon center, 5th floor, DLF phase 5, sector 43 Golf Course Road, Gurgaon, Haryana HD 122002</p>
                            </div>
                            <div className="connect mt-5 mb-4">
                                <h5>Connect With Us</h5>
                            </div>
                            <div className="team-social-links d-flex">
                                <i class="fab fa-facebook-f"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-instagram"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="contactus">
                            <div className="row">
                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="firstname" className='mb-2'>First Name</label>
                                    <input type="text" placeholder='Enter your first name' />
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="emailaddress" className='mb-2'>Email Address</label>
                                    <input type="email" placeholder='Enter your email address' />
                                </div>

                                <div className="mb-4"></div>

                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="mobilenumber" className='mb-2'>Mobile Number</label>
                                    <input type="tel" placeholder='Enter Mobile Number' />
                                </div>
                                <div className="col-lg-6 d-flex flex-column">
                                    <label for="company" className='mb-2'>Company</label>
                                    <input type="text" placeholder='Enter Company Name' />
                                </div>

                                <div className="mb-4"></div>

                                <div className="col-lg-12 d-flex flex-column">
                                    <label for="message" className='mb-2'>Message</label>
                                    <textarea placeholder='Enter Your Message' />
                                </div>

                                <div className="send-btn mt-4">
                                    <button type='submit'>Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
    </>
  )
}
