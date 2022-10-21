import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'


export default function NesDigitalPlatform() {
  return (
    <>
    <Header showNav={true} isWhite={false} />

    <section style={{ backgroundImage: "url(/images/product/nesdigitalplatform/home.png)", backgroundSize: "cover", opacity: "5", height: "800px"}}>
        <div className="container">
            <div className="top-section d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="product-topic">
                            <h4>NES DIGITAL PLATFORM</h4>
                        </div>
                        <div className="product-heading mt-4">
                            <h1>The NES Platform… The New Community</h1>
                        </div>
                        <div className="product-paragraph mt-4">
                            <p>Technology driven solutions are key to address problems through sustainable solutions. The importance of global trade is significant for any country and therefore a technology solution that addresses the challenges of global trade by powering every part of the economy and creating a efficient system to buy, sell, pay and get paid is the new imperative.
                                The motivated team of NES embarked on this objective and have been creating a ecosystem of global trade to empower its users from the exporting and importing communities to have a control of their supply chains, reduce and mitigate the risks and flourish in trade.
                                </p>
                        </div>
                        <div className="product-signin mt-4">
                            <Link to={"#"}><button type='submit'>Welcome &amp; Sign In</button></Link>
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
          <div className="product-box">
            <div className="product-tag-head mt-3">
              <h4>End to End Visibility</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>The NES Platform is updated with updates that give the customer visibility of his shipment when its on the high seas, or when flying on air or moving on road or when its being evaluated by customs at the port of entry. This level of updates help the customer and his supply chain partners with information to monitor movement of goods and make quick resolves in cases of any gaps or errors.
                </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="product-box">
            <div className="product-tag-head mt-3">
              <h4>Collaboration leading to Enhanced Customer Experience.</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>The NES Platform can accommodate all the stakeholders including the NES Global ops and brokerage teams giving them full access ad control to fast track all work flows within the supply chain.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="product-box">
            <div className="product-tag-head mt-3">
              <h4>Metrix and Reporting</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>With data available to the customer, he can now extract information to understand historical freight spends, Duty and tax spends, landed costs across various product lines and also make amends in his product classifications to ensure lower duty rates which would also help deliver healthy bottom lines.</p>
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
                            <img src='../images/product/nesdigitalplatform/decide.png' />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                      <div className="product-container">
                        <div className="product-heading1">
                            <h3 style={{ color: "#403F3E" }}>Decide and Click</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{ color: "#737171" }}>Transportation visibility is vital to business growth On the NES platform shipment information details are available on just a few clicks are never more than a click away.</p>
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
                            <h3 style={{ color: "#403F3E" }}>Immediate Exception Management</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{ color: "#737171" }}>Your NES team flags any gap, concerns or changes in a shipment’s journey from origin to destination and works with the customer and or the partners within the supply chain to quickly fix issues before they result in financial impacts, late fees, or other impacts that erode the profitability</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-md-2 order-1">
                        <div className="product-img">
                            <img src='../images/product/nesdigitalplatform/immediate.png' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="product-item mt-15">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="product-img">
                            <img src='../images/product/nesdigitalplatform/reporting.png' />
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                      <div className="product-container">
                        <div className="product-heading1">
                            <h3 style={{ color: "#403F3E" }}>Reporting</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{ color: "#737171" }}>Reporting is essential for disciplined business management. All critical shipment related information is available for the customer to create customized metrics for reporting to senior management within the customer organization This results in aligning to the strategy devised for the customer.</p>
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
                            <h3 style={{ color: "#403F3E" }}>File, Record and Review</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{ color: "#737171" }}>The NES Platform allows the customer to store all shipment related information viz, commercial invoices, payment receipts and all other documents for future reference and also to compare spends.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 order-md-2 order-1">
                        <div className="product-img">
                            <img src='../images/product/nesdigitalplatform/file.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>

<section className='mt-15 mb-15'>
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
          <div className="product-box">
            <div className="product-topic1 mb-4">
                <h4>Customs</h4>
            </div>
            <div className="product-tag-head mt-3">
              <h4>Compliance,	Compliance,	Compliance	for	a	better	Customer	Experience.</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>Operating on the NES platform is beneficial in many different ways, which stream line regulatory work flows and cascades the benefits to multiple aspects of the business. Additionally...</p>
            </div>
            <div className="supply-learn-more">
                <Link to={"/product/customs"}>Learn More<i class="far fa-angle-right"></i></Link>
            </div>
          </div>
      </div>

      <div className="col-lg-4">
          <div className="product-box">
            <div className="product-topic1 mb-4">
                <h4>Visibility</h4>
            </div>
            <div className="product-tag-head mt-3">
              <h4>Easy to use, lets work together</h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>The	NES	platform	is	created	in	a	way	to	capture	all	the	critical	elements	of	shipping,	origin,	destination,	schedules,	booking,	SLI,	Purchase	order	tracking,	milestones	and	exceptions	and	more all	to	enable	your	supply	chain,	drive	collaborations	with</p>
            </div>
            <div className="supply-learn-more">
                <Link to={"/product/visibility"}>Learn More<i class="far fa-angle-right"></i></Link>
            </div>
          </div>
      </div>

      <div className="col-lg-4">
          <div className="product-box">
            <div className="product-topic1 mb-4">
                <h4>Air Freight</h4>
            </div>
            <div className="product-tag-head mt-3">
              <h4>Introducing the NES Freight Forwarding </h4>
            </div>
            <div className="product-tag-paragraph mt-3">
              <p>Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi modally across Sea, Air, Rail and Road shipments.</p>
            </div>
            <div className="supply-learn-more">
                <Link to={"/product/visibility"}>Learn More<i class="far fa-angle-right"></i></Link>
            </div>
          </div>
      </div>
    </div>
  </div>
</section>

<section style={{ background: "url('../images/product/nesdigitalplatform/GetStartedBG.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container mt-15">
          <div className="ready d-flex flex-column justify-content-center">
            <div className="product-topic1 mb-3">
                <h4 style={{ color: "#FFFFFF" }}>Get Started</h4>
            </div>
            <div className="ready-heading">
              <h3>Join Us Today</h3>
            </div>
            <div className="reday-btn mt-3">
              <Link to={"/company/contact-us"}><button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Join Now</button></Link>
            </div>
          </div>
        </div>
</section>

<Footer/>
    </>
  )
}
