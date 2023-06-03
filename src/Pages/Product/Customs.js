import React from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import { Link } from 'react-router-dom'
import ProductSlider from '../ProductSlider'

export default function Customs() {
  return (
    <>
      <Header showNav={true} isWhite={true} />

      <section style={{ backgroundImage: "url(/images/product/customs/home.png)", backgroundSize: "cover", opacity: "5", height: "800px",backgroundPosition: "center" }}>
        <div className="container">
          <div className="top-section d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7">
                <div className="animation">
                  <div className="product-topic">
                    <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Customs</h4>
                  </div>
                  <div className="product-heading mt-4">
                    <h1 data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear" style={{ fontSize: "32px" }}>Compliance,	Compliance,	Compliance	for	a	better	Customer	Experience.</h1>
                  </div>
                  <div className="product-paragraph mt-4">
                    <p data-aos="fade-up" data-aos-duration="20" data-aos-easing="linear">Operating on the NES platform is beneficial in many different ways, which streamlines regulatory workflows and cascades the benefits to multiple aspects of the business. Additionally, the experienced custom house brokers would also ensure the right classification of the product codes to affect a seamless custom declaration for clearance which is then recorded in the product library of the platform. All historical transactions would also assist in guiding the customer to assess landed cost of his goods and continuous monitoring of historical transactions would help ideate and implement long term strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="product-item mt-15">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-img">
                  <img src='../images/product/customs/informed.png' alt='' />
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className="product-container">
                  <div className="product-topic1 mb-4">
                    <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">TRADE	ADVISORY</h4>
                  </div>
                  <div className="product-heading1">
                    <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>Informed Decision-Making Advantage</h3>
                  </div>
                  <div className="product-paragraph">
                    <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Availability of data from the Master Product Library would help the customer to compare transactions and spending and also asses the landed cost of goods. Using this information, the NES Custom house agents can guide and direct the customer on any and all aspects of improving the overall financial health of his supply chain.</p>
                  </div>
                  <div className="learn-more-btn mt-4">
                    <Link to={"/product/trade-advisory"}><button type='submit'>Learn More</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-15">
          <div className="row">
            <div className="col-lg-4">
              <div className="product-box product-box1">
                <div className="product-tag-head mt-3">
                  <h4>Lock Tight Technology and Experienced Manpower</h4>
                </div>
                <div className="product-tag-paragraph mt-3">
                  <p>Availability of real time data on the NES platform can help correct any errors in invoices, or product classifications to ensure a seamless custom inspection, declaration and clearance. The team and technology of NES Global are to ensure the shipment is not impacted with clearance delays due to any exception or erroneous documentation or declarations and are both dependable partners in progress.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="product-box product-box1">
                <div className="product-tag-head mt-3">
                  <h4>Critical Guidance to Support</h4>
                </div>
                <div className="product-tag-paragraph mt-3">
                  <p>All shipments transacted on the NES Platform have real time visibility that help all the partners in the customers supply chain and the NES custom house agent support in information management to developing effective resolutions for shipment clearances. </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="product-box product-box1">
                <div className="product-tag-head mt-3">
                  <h4>Technology Designed to Enhance the Efficiency of the Custom House Agent</h4>
                </div>
                <div className="product-tag-paragraph mt-3">
                  <p>The NES Platform picks up data from all the transactions and documents provided by the customer and the partners of NES. All this information is stored in a central data repository that would help the custom house agent to effectively create custom declarations for seamless clearances. The platform also helps develop customized matrixes to improve overall efficiencies within the supply chain.
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider/>

      <section style={{ background: "url('../images/product/nesdigitalplatform/GetStartedBG.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mt-15">
          <div className="ready d-flex flex-column justify-content-center">
            <div className="product-topic1 mb-3">
                <h4 style={{ color: "#FFFFFF" }}>Per shipment policy</h4>
            </div>
            <div className="ready-heading">
              <h3>Get Exactly What You Want</h3>
            </div>
            <div className="reday-btn mt-3">
              <a href='/company/contact-us'><button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Apply Now</button></a>
            </div>
          </div>
        </div>
</section>

     <Footer />
    </>
  )
}
