import React from 'react'
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import ProductSlider from '../ProductSlider'

export default function Visibility() {
  return (
    <>
      <Header showNav={true} isWhite={true} />

      <section style={{ backgroundImage: "url(/images/product/visibility/home.png)", backgroundSize: "cover", opacity: "5",backgroundPosition: "center" }}>
        <div className="container">
          <div className="top-section d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7">
                <div className="animation">
                  <div className="product-topic">
                    <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Visibility</h4>
                  </div>
                  <div className="product-heading mt-4">
                    <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Easy to use, <br/>lets work together</h1>
                  </div>
                  <div className="product-paragraph mt-4">
                    <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">The	NES	platform	is	created	in	a	way	to	capture	all	the	critical	elements	of	shipping,	origin,	destination,	schedules,	booking,	SLI,	Purchase	order	tracking,	milestones	and	exceptions	and	more…	all	to	enable	your	supply	chain,	drive	collaborations	with	shipping	lines	and	partner	with	you	as	your	reliable	partner.</p>
                  </div>
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
                  <div className="product-tag">
                    <img src='../images/product/visibility/location.png' alt='' />
                  </div>
                  <div className="product-tag-head mt-3">
                    <h4>Tracking and Visibility a Critical imperative</h4>
                  </div>
                  <div className="product-tag-paragraph mt-3">
                    <p>The NES platform ensures that you can track your container so you are in control of the communication to deliver reliability to your customers. This aligns to the NES strategy of delivering to a seamless flow via collaboration and support.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="product-box">
                  <div className="product-tag">
                    <img src='../images/product/visibility/manage.png' alt='' />
                  </div>
                  <div className="product-tag-head mt-3">
                    <h4>Better Control Via Managing Exceptions</h4>
                  </div>
                  <div className="product-tag-paragraph mt-3">
                    <p>Seamless End to end flow is made possible via better exception management via real time updates. This is made possible via the NES product and ops teams and integration with leading shipping
                        lines to the NES platform.</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="product-box">
                  <div className="product-tag">
                    <img src='../images/product/visibility/data.png' alt='' />
                  </div>
                  <div className="product-tag-head mt-3">
                    <h4>Data leads to customization</h4>
                  </div>
                  <div className="product-tag-paragraph mt-3">
                    <p>By transacting on the NES platform, one can toggle with data and use the same to build rules to drive optimization and create a competitive advantage for their products.</p>
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
                  <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                  <div className="product-container">
                    <div className="product-topic1 mb-4">
                      <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">GLOBAL	OCEAN	NETWORK</h4>
                    </div>
                    <div className="product-heading1">
                      <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>A	Carrier	Network	as	Vast	as	the	Ocean</h3>
                    </div>
                    <div className="product-paragraph">
                      <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>At	NES,	transparency	is	everything	and	makes	it	easier	to	share	info	with	carriers.	The	results	are	faster	access	to	available	space,	sailings,	and	ways	for	you	to	find	the	ideal	blend	of	cost	and	transit	time</p>
                    </div>
                  </div>
                  </div>
                  <div className="col-lg-6 order-md-2 order-1">
                    <div className="product-img">
                      <img src='../images/product/visibility/visibility1.png' alt='' />
                    </div>
                  </div>
                </div>
            </div>


            <div className="product-item mt-15">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-img">
                      <img src='../images/product/visibility/visibility2.png' alt='' />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <div className="product-container">
                    <div className="product-topic1 mb-4">
                      <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">INTEGRATIONS</h4>
                    </div>
                    <div className="product-heading1">
                      <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>Predictability	for	Smoother	Sailings</h3>
                    </div>
                    <div className="product-paragraph">
                      <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Forecast	with	more	precision	and	accuracy.	Industry	leading	carrier	integrations	mean	NES	can	provide	faster	pricing	turnarounds,	quicker	Shipping	Order	(SO)	releases,	and	predictive	transit	times.</p>
                    </div>
                  </div>
                  </div>
                </div>
            </div>

            <div className="product-item mt-15">
                <div className="row">
                  <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                    <div className="product-container">
                      <div className="product-topic1 mb-4">
                        <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">SERVICE	OFFERINGS</h4>
                      </div>
                      <div className="product-heading1">
                        <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>More	Service	Levels	for	More	Control</h3>
                      </div>
                      <div className="product-paragraph">
                        <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Strike	the	balance	between	speed	and	cost	that’s	right	for	your	business.	Choose	from	several	ocean	freight	options,	including	guaranteed	services,	to	dial	into	a	decision	based	on	your	inventory	needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-md-2 order-1">
                    <div className="product-img">
                      <img src='../images/product/visibility/visibility3.png' alt='' />
                    </div>
                  </div>
                </div>
            </div>


            <div className="product-item mt-15">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-img">
                      <img src='../images/product/visibility/visibility4.png' alt='' />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="product-container">
                      <div className="product-topic1 mb-4">
                        <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">STRUCTURE</h4>
                      </div>
                      <div className="product-heading1">
                        <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>Start	Upstream	with	Order	Management</h3>
                      </div>
                      <div className="product-paragraph">
                        <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Activate	collaboration	with	your	suppliers.	With	Nes	Order	Management,	you	can	submit	orders,	manage	quantities,	and	discuss	cargo	ready	dates.	Keep	every	PO	in	sight	from	order	to	final	mile.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="product-item mt-15">
                <div className="row">
                  <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                    <div className="product-container">
                      <div className="product-topic1 mb-4">
                        <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">DATA</h4>
                      </div>
                      <div className="product-heading1">
                        <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>Leagues	of	Data,	Packaged	for You</h3>
                      </div>
                      <div className="product-paragraph">
                        <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Supply	chains	throw	out	complex	volumes	of	data.	With	searchable,	shareable	reporting,	you	can	use	all	of	it.	Manage		delays.	Prioritize	containers	confirmed	to	sail.	Prepare	your	entire	supply	chain	for	any	scenario.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-md-2 order-1">
                    <div className="product-img">
                      <img src='../images/product/visibility/visibility5.png' alt='' />
                    </div>
                  </div>
                </div>
              </div>


              <div className="product-item mt-15">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-img">
                      <img src='../images/product/visibility/visibility6.png' alt='' />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex flex-column justify-content-center">
                  <div className="product-container">
                    <div className="product-topic1 mb-4">
                      <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">PLANNING</h4>
                    </div>
                    <div className="product-heading1">
                      <h3 data-aos="fade-up" data-aos-easing="linear" style={{ color: "#403F3E" }}>A	Deep	Dive	Your	Whole	Team	Can	Take</h3>
                    </div>
                    <div className="product-paragraph">
                      <p data-aos="fade-up" data-aos-easing="linear" style={{ color: "#737171" }}>Your	team	can	forecast	and	plan	ocean	freight	shipments	precisely	with	transit	time	data	by	lane.	Make	routing	decisions	and	track	supplier	KPIs.	Replace	unfathomable	questions	with	insights	everyone	understands.</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
      </section>

      {/* Request A Demo */}

      <section  className="mt-15" style={{ background: "url('../images/product/visibility/productbg.png')" }}>
        <div className="container">
          <div className="ready d-flex flex-column justify-content-center align-items-center">
            <div className="ready-heading">
              <h3>Ready to Get Started?</h3>
            </div>
            <div className="ready-paragraph text-center mt-3" style={{ width: "435px" }}>
              <p>Talk	to	a	supply	chain	solutions	expert	and	see	the	NES	Platform	in	action.</p>
            </div>
            <div className="reday-btn mt-3">
              <a href='/company/contact-us'><button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Request A Demo</button></a>
            </div>
          </div>
        </div>
      </section>

      <ProductSlider/>

      <Footer />
    </>
  )
}
