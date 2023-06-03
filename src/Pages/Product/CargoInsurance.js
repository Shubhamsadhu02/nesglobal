import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import ProductSlider from '../ProductSlider'

export default function CargoInsurance() {
  return (
    <>
    <Header showNav={true} isWhite={true} />

<section style={{ background: "url('../images/product/cargo_insurance/home.png')", backgroundSize: "cover", height: "590px", backgroundPosition: "center" }}>
    <div className="container">
        <div className="top-section d-flex align-items-center">
            <div className="row">
                <div className="col-lg-8">
                    <div className="product-topic">
                        <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Cargo Insurance</h4>
                    </div>
                    <div className="product-heading mt-4">
                        <h1 data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">Tailor make your policy as per your convenience</h1>
                    </div>
                    <div className="product-get-started mt-5">
                        <Link to={"/company/contact-us"}><button type='submit'>Connect with our advisor</button></Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<section>
        <div className="container mt-15">
            <div className="nes1 text-center">
                <div className="nes-head">
                    <h3 data-aos="fade-up" data-aos-offset="-2" data-aos-easing="linear" style={{ color: "#595858" }}>Why NES?</h3>
                </div>
            </div>
            <div className="row mt-5 px-5" style={{rowGap: "25px"}}>
                <div className="col-lg-6">
                    <div className="nes-box nes-box3">
                        <div className="product-tag-head">
                            <h4>Tailor Made Insurance From NES</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>One element that plays a vital role in trade is shipping and cargo insurance. Insurance also plays a vital role in incoterms and the right insurance is critical to mitigate the different types of risk that the shipment could be impacted. There are a variety of solutions that can be offered to ensure the customers can benefit from the experience of the NES team</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nes-box nes-box3">
                        <div className="product-tag-head">
                            <h4>Metrix and Reporting</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>The NES teams particularly pay attention to build customized and comprehensive plans to support the business requirement of the customer. Most importantly the clauses of the L/c, the mode of transport and the incoterms are kept in mind whilst customizing a policy for the customer.</p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="nes-box nes-box4">
                        <div className="product-tag-head">
                            <h4>Convenience & No Binding</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>The key objective of NES Global is to facilitate international trade via the digital NES Platform. To fulfil this goal, our advisors are entrusted with the authority to also fulfill insurance requirements for customer via the NES platform even in the event they are shipping with competitive logistics service providing firms. Lending expertise and digitally facilitating such transactions with no binding to ship With NES would only lead to convenience to the customer and industry.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="nes-box nes-box4">
                        <div className="product-tag-head">
                            <h4>Trade Fast Forward</h4>
                        </div>
                        <div className="product-tag-paragraph mt-3">
                            <p>Operating on workflows on the NES Platform would enable faster resolutions of claims for the customer through adequate guidance and facilitation from the NES Team and the customer would not have to waste his productive time on menial processes making it a productive and viable proposition.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <ProductSlider/>

<section style={{ background: "url('../images/product/trade_finance/tradefinancebg.png')", backgroundSize: "cover" }}>
        <div className="container mt-15">
          <div className="ready d-flex flex-column justify-content-center">
            <div className="product-topic1 mb-3">
                <h4 style={{ color: "#FFFFFF" }}>Per shipment policy</h4>
            </div>
            <div className="ready-heading">
              <h3>Get Exactly What You Want</h3>
            </div>
            {/* <div className="ready-paragraph mt-3">
              <p>Your faster, easier application process starts right now.</p>
            </div> */}
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
