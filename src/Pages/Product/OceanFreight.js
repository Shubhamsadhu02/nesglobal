import React from 'react'
import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import Signup from '../../Partials/Signup'
import ContactForm from '../ContactForm'
import ProductSlider from '../ProductSlider'


export default function OceanFreight() {
  return (
    <>
     <Header  showNav={true} isWhite={true}/>

     <section style={{ backgroundImage: "url(/images/product/ocean_freight/home.png)", backgroundSize: "cover", opacity: "5", height: "660px",backgroundPosition: "center" }}>
        <div className="container">
            <div className="top-section mb-5">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-center">
                        <div className="product-topic">
                            <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Ocean Freight</h4>
                        </div>
                        <div className="product-heading mt-4">
                            <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Introducing the NES Freight Forwarding</h1>
                        </div>
                        <div className="product-paragraph mt-4">
                            <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multimodally across Sea, Air, Rail and Road shipments.</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6">
                     <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container mt-15">
            <div className="nes text-center">
                <div className="nes-head">
                    <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#595858" }}>Why NES?</h3>
                </div>
            </div>
            <div className="row mt-5 px-5" style={{rowGap: "25px"}}>
                <div className="col-lg-6">
                    <div className="nes-box nes-box1">
                        <div className="product-tag-head">
                            <h4>Unleashing Capabilities and Delivering Experience</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>Imagine a picture with trade without challenges…that’s what the NES platform is about. We aim to deliver the highest customer experience to our customers by delivering a seamless end to end supply chain.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nes-box nes-box1">
                        <div className="product-tag-head">
                            <h4>Metrix and Reporting</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>With data available to the customer, he can now extract information to understand historical freight spends, Duty and tax spends, landed costs across various product lines and also make amends in his product classifications to ensure lower duty rates which would also help deliver healthy bottom lines.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="nes-box nes-box2">
                        <div className="product-tag-head">
                            <h4>End to End Visibility</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>The NES Platform is updated with updates that give the customer visibility of his shipment when its on the high seas, or when flying on air or moving on road or when its being evaluated by customs at the port of entry. This level of updates help the customer and his supply chain partners with information to monitor movement of goods and make quick resolves in cases of any gaps or errors.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nes-box nes-box2">
                        <div className="product-tag-head">
                            <h4>Collaboration leading to Enhanced Customer Experience</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>The NES Platform can accommodate all the stakeholders including the NES Global ops and brokerage teams giving them full access ad control to fast track all work flows within the supply chain.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section>
      <div className="text-center mt-15">
        <div className="nes-img">
          <img src='../images/product/ocean_freight/Sea_freight_V2_10s.gif' alt='' />
        </div>
      </div>
    </section>

    <section>
      <div className="container mb-15">
        <div className="product-item mt-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/ocean_freight/decide.png' alt='' />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-container">
                <div className="product-heading1">
                  <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#403F3E" }}>Decide and Click</h3>
                </div>
                <div className="product-paragraph">
                  <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Transportation visibility is vital to business growth On the NES platform Shipment information details are available on just a few clicks are never more than a click away.  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-item mt-15">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
              <div className="product-container">
                <div className="product-heading1">
                  <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#403F3E" }}>Immediate Exception Management</h3>
                </div>
                <div className="product-paragraph">
                  <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Your NES team flags any gap, concerns or changes in a shipment’s journey from origin to destination and works with the customer and or the partners within the supply chain to quickly fix issues before they result in financial impacts, late fees, or other impacts that erode the profitability</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-md-2 order-1">
              <div className="product-img">
                <img src='../images/product/ocean_freight/immediate.png' alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className="product-item mt-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/ocean_freight/reporting.png' alt='' />
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="product-container">
                <div className="product-heading1">
                  <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#403F3E" }}>Reporting</h3>
                </div>
                <div className="product-paragraph">
                  <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Reporting is essential for disciplined business management. All critical shipment related information is available for the customer to create customized metrics for reporting to senior management within the customer organization This results in aligning to the strategy devised for the customer.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <ProductSlider/>
    
    <Signup/>

    <Footer />
    </>
  )
}
