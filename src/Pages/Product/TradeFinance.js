import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import ProductSlider from '../ProductSlider'

export default function TradeFinance() {
  return (
    <>
    <Header showNav={true} isWhite={false}/>

<section style={{ background: "url('../images/product/trade_finance/home.png')", backgroundSize: "cover", height: "800px",backgroundPosition: "center" }}>
    <div className="container">
        <div className="top-section d-flex align-items-center mb-5">
            <div className="row">
                <div className="col-lg-8">
                    <div className="product-topic">
                        <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Trade Finance</h4>
                    </div>
                    <div className="product-heading mt-4">
                        <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Trade Financing <br/> Made Easy</h1>
                    </div>
                    <div className="product-paragraph mt-4">
                        <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">It is important to consider the possibilities of using these receivables as a source of liquidity. The correct use of Trade Finance instruments can even help strengthen exporters and importers competitive power by being able to offer supplier credits. Trade Finance can improve liquidity and cash flows while reducing risk. NES Global has strategic tie ups with leading banking and financial institutions to support the export import community with trade finance support.
                            Connect with us to learn more.</p>
                    </div>
                    <div className="product-get-started mt-4">
                      <Link to={"/company/contact-us"}><button type='submit'>Talk To Us</button></Link>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</section>

<section>
  <div className="container">
    <div className="product-top-section">
      <div className="row">
        <div className="col-lg-4">
          <div className="product-box" style={{height: "352px"}}>
            <div className="product-tag-head">
              <h4>Financial Liquidity for Purchase</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>With the additional support of trade financing options available on the NES Platform, the customers can avail further liquidity to finance capital transactions or for the purchase of raw materials to manufacture & export.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="product-box" style={{height: "352px"}}>
            <div className="product-tag-head">
              <h4>Financial Liquidity for Freight</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>NES offers customers to use additional financial liquidity support to pay for planned and unplanned financial payments related to freight incurred for shipping. This additional financial support would assist customers in better managing their finances via extended credit terms.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="product-box" style={{height: "352px"}}>
            <div className="product-tag-head">
              <h4>Financial Liquidity for Purchase</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>NES can assist with better financial management plans to ensure the customer focuses on his core growth strategy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section>
        <div className="container mt-15">
          <div className="product-item mt-15">
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                <div className="product-container">
                  <div className="product-heading1">
                      <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#403F3E" }}>This is how we Do It</h3>
                  </div>
                  <div className="product-paragraph">
                      <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>NES uses our platform to connect the customer with multiple financial companies who could then choose a financial institution to fund his requirement. Prior to funding the customer needs to furnish certain details to fulfill the due diligence requirements. Only on the company successfully completing the due diligence with the institution would he be considered for being financed. This due diligence activity is one time after which he would need to follow 3 steps on the platform before which he would be financed for the request.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-md-2 order-1">
                <div className="product-img">
                    <img src='../images/product/trade_finance/this.png' alt='' />
                </div>
              </div>
            </div>
          </div>

            <div className="product-item mt-15">
              <div className="row">
                <div className="col-lg-6">
                  <div className="product-img">
                      <img src='../images/product/trade_finance/business.png' alt='' />
                  </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <div className="product-container">
                    <div className="product-heading1">
                        <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#403F3E" }}>Business Growth and Trade Priorities</h3>
                    </div>
                    <div className="product-paragraph">
                        <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>The NES platform facilitates the one-time due diligence and subsequent to the completion the customer can source funds in a simplified manner to ensure he paces his supply chain to accommodate business growth priorities.</p>
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
                        <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{ color: "#403F3E" }}>Reporting for Decision Making</h3>
                    </div>
                    <div className="product-paragraph">
                        <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>All spend related data from the platform can be used to track historical spend , cost of freight spent versus landed cost of goods and other customized metrics to facilitate strategizing and decision-making.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-md-2 order-1">
                  <div className="product-img">
                      <img src='../images/product/trade_finance/funding.png' alt='' />
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
                <h4 style={{ color: "#FFFFFF" }}>Get Started</h4>
            </div>
            <div className="ready-heading">
              <h3>Tool to make trade simpler</h3>
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

{/* FAQS */}

{/* <section class="product-faq mt-15 mb-15">
        <div class="container">
          <div className="product-topic1 mb-5 text-center">
                <h4>NEED ANY HELP?</h4>
          </div>
          <div className="product-faq-heading">
           <h3 class="text-center" style={{color: "#403F3E"}}>Frequently Asked Questions</h3>
          </div>
        
          <div class="accordion accordion-flush product-faq__accordian" id="product-faq__accordian">

            <div class="accordion accordion-flush product-faq__accordian" id="product-faq__accordian">
              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    What	if	I	already	have	a	cargo	insurance	policy?
                  </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingFiveOne">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFiveOne"
                    aria-expanded="false" aria-controls="flush-collapseFiveOne">
                   Do	I	really	need	insurance?	I	don’t	want	to	pay	for	it.
                  </button>
                </h2>
                <div id="flush-collapseFiveOne" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingFiveOne" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                  Consider	what	you	have	invested	in	a	single	shipment	and	where	you	would	be	with	a	total	loss.	NES	competitive	pricing	is	a	small	fraction	of	your	shipment	value,	but	provides	total	peace	of	mind.	Contact	us	today	to	learn	more	about	our	low	rates.
                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingFour">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                    aria-expanded="false" aria-controls="flush-collapseFour">
                    We	use	a	different	freight	forwarder.	Can	I	still	insure	my	shipments	with	NES?
                  </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">
                  </div>
                </div>
              </div>


              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                    aria-expanded="false" aria-controls="flush-collapseTen">
                   Can	we	partner	with	NES	to	distribute	cargo	insurance	products?
                  </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>

              <div class="accordion-item product-faq__accordian-item card">
                <h2 class="accordion-header" id="flush-headingTen">
                  <button class="accordion-button collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                    aria-expanded="false" aria-controls="flush-collapseTen">
                   Do	you	do	all	your	underwriting	in-house?
                  </button>
                </h2>
                <div id="flush-collapseTen" class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTen" data-bs-parent="#product-faq__accordian">
                  <div class="accordion-body para">

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> */}

    

    <Footer />
    </>
  )
}
