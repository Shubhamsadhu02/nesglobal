import React from 'react'
import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import Signup from '../../Partials/Signup'
import ContactForm from '../ContactForm'
import ProductSlider from '../ProductSlider'

export default function AirFreight() {
  return (
    <>
    <Header  showNav={true} isWhite={false}/>

    <section style={{ backgroundImage: "url(/images/product/air_freight/home.png)", backgroundSize: "cover", opacity: "5", height: "660px", backgroundPosition: "center" }}>
        <div className="container">
            <div className="top-section mb-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-5 d-flex flex-column justify-content-center">
                        <div className="product-topic">
                            <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Air Freight</h4>
                        </div>
                        <div className="product-heading mt-4">
                            <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Introducing the NES Freight Forwarding </h1>
                        </div>
                        <div className="product-paragraph mt-4">
                            <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multimodally across Sea, Air, Rail and Road shipments.</p>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-sm-12 col-lg-6">
                      <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className='airfreight-boxes'>
      <div className="container mt-15">
        <div className="nes text-center">
          <div className="nes-head">
            <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#595858" }}>Why NES?</h3>
          </div>
          <div className="nes-paragraph mt-5">
            <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E", padding: "0 210px"}}>The NES Platform can accommodate all the stakeholders including the NES Global ops and brokerage teams giving them full access ad control to fast track all work flows within the supply chain</p>
          </div>
        </div>

        <div className="row mt-5" style={{rowGap: "25px"}}>
          <div className="col-lg-4">
            <div className="nes-box5">
              <div className="product-tag-head">
                <h4>Load us with your Priorities</h4>
              </div>
              <div className="product-tag-paragraph mt-3">
                <p>Fly your time critical and high value shipments faster through our platform which is backed by our expertise, reliable connections and global partner network. The NES platform frees you from repetitive and menial tasks and focuses on delivering control of your shipment.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nes-box6">
              <div className="product-tag-head">
                <h4>Plan, Technology & Capacity</h4>
              </div>
              <div className="product-tag-paragraph mt-3">
                <p>The NES Platform is updated with updates that give the customer visibility of his shipment when its on the high seas, or when flying on air or moving on road or when its being evaluated by customs at the port of entry. This level of updates help the customer and his supply chain partners with information to monitor movement of goods and make quick resolves in cases of any gaps or errors.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nes-box5">
              <div className="product-tag-head">
                <h4>Goals, Gaps and Information</h4>
              </div>
              <div className="product-tag-paragraph mt-3">
                <p>The NES Platform can accommodate all the stakeholders including the NES Global ops and brokerage teams giving them full access ad control to fast track all work flows within the supply chain.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nes-box7">
              <div className="product-tag-head">
                <h4>Goals, Gaps and Information</h4>
              </div>
              <div className="product-tag-paragraph mt-3">
                <p>Airfreight shipments are to ensure the goods meet are delivered to the market place in the fastest transit to meet the consumer requirement, this leaves no room for gaps to meet the end goals. The NES platform is built in a way to allow collaboration with all stakeholders within the airfreight supply chain and this enables seamless flow of information for the customer to use and plan effectively.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nes-box8">
              <div className="product-tag-head">
                <h4>That’s called Value</h4>
              </div>
              <div className="product-tag-paragraph mt-3">
                <p>Transit time, landed costs, all broken down to micro shipment levels is data within reach—thanks to the NES Platform’s power to structure, store, and safeguard your data.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="nes-box7">
              <div className="product-tag-head">
                <h4>End to End Visibility</h4>
              </div>
              <div className="product-tag-paragraph mt-3">
                <p>The NES Platform is updated with updates that give the customer visibility of his shipment when its on the high seas, or when flying on air or moving on road or when its being evaluated by customs at the port of entry. This level of updates help the customer and his supply chain partners with information to monitor movement of goods and make quick resolves in cases of any gaps or errors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div className="container" >
        <div className="nes-img" style={{padding: "2rem 3rem"}}>
          {/* <img src='../images/product/air_freight/Air_freight_V2_10s.gif' alt='' /> */}
          <video autoPlay loop muted playsInline>
            <source src="../videoes/Air_freight_VP9.mp4" type='video/mp4' />
            <source src="../videoes/Air_freight_VP9.webm" type='video/webm' />
          </video>
        </div>
      </div>
    </section>

    <section>
      <div className="container mb-15">
        <div className="product-item mt-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/air_freight/decide.png' alt='' />
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
                <img src='../images/product/air_freight/immediate.png' alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className="product-item mt-15">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-img">
                <img src='../images/product/air_freight/reporting.png' alt='' />
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
