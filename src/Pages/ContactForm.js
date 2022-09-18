import React from 'react'

export default function ContactForm() {
  return (
    <>
    <div className="enquiry-box">
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
    </>
  )
}
