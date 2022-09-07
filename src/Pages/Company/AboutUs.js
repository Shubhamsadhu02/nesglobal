import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function AboutUs() {
  return (
    <>
    <Header showNav={true} isWhite={true} />

    <section style={{ background: "#10243E" }}>
                <div className="container mb-5">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{padding: "128px 96px"}}>
                        <div className="product-topic">
                            <h4>THE NES MISSION</h4>
                        </div>
                        <div className="product-heading1 text-center mt-4" style={{width: "614px"}}>
                            <h3>Facilitating Supply Chains and enabling global trade.</h3>
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
                              <div className="product-topic1 mb-4">
                                  <h4>THE NES VISION</h4>
                              </div>
                              <div className="product-heading1">
                                  <h3 style={{color: "#403F3E"}}></h3>
                              </div>
                              <div className="product-paragraph">
                                  <p style={{color: "#737171"}}>The Nes Mission is to address complexities of global economic relationships in international trade and ensure that the exporting and importing communities enjoy the benefits of a connected supply chain on the NES digital platform thereby setting progressive standards in International trade.</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-lg-6 order-md-2 order-1">
                            <div className="product-img">
                                <img src='../images/Company/aboutus/aboutus1.png' />
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-item mt-15">
                      <div className="row">
                        <div className="col-lg-6">
                            <div className="product-img">
                                <img src='../images/Company/aboutus/aboutus2.png' />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                          <div className="product-container">
                            <div className="product-topic1 mb-4">
                                <h4>THE NES PLATFORM</h4>
                            </div>
                            <div className="product-heading1">
                                <h3 style={{color: "#403F3E"}}>The New Community</h3>
                            </div>
                            <div className="product-paragraph">
                                <p style={{color: "#737171"}}>Technology driven solutions are key to address problems through sustainable solutions. The importance of global trade is significant for any country and therefore a technology solution that addresses the challenges of global trade by powering every part of the economy and creating a efficient system to buy, sell, pay and get paid is the new imperative. The motivated team of Nes embarked on this objective and have been creating a ecosystem of global trade to empower its users from the exporting and importing communities to have a control of their supply chains, reduce and mitigate the risks and flourish in trade.</p>
                            </div>
                            <div className="learn-more-btn mt-4">
                                <button type='submit'>Sign in</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </section>

            <section style={{background: "#10243E"}}>
              <div className="container mt-15 py-5">
                  <div className="leading-brands text-center">
                      <h3>Companies Of All Sizes—From Emerging Brands To Fortune 500s—Used Flexport Technology To Move Nearly $19B Of Merchandise Across 112 Countries in 2021</h3>
                  </div>
                  <div className="leading-brands-logos mt-5">
                    <ul className="leading-brands-logos__list">
                      <li> <img src='../images/product/nesplatform/sonos-logo.png' height={61} width={131} /></li>
                      <li><img src='../images/product/nesplatform/Fairphone-logo.png' height={65} width={182}/></li>
                      <li><img src='../images/product/nesplatform/outdoor-voices-logo.png' height={77} width={220}/></li>
                      <li><img src='../images/product/nesplatform/jlab-audio-logo.png' height={61} width={170}/></li>
                      <li><img src='../images/product/nesplatform/Rothy_s-logo.png' height={54} width={145}/></li>
                    </ul>
                  </div>
                  <div className="see-more-btn text-center mt-5">
                      <button type='submit'>Read Customers Stories</button>
                  </div>
              </div>
            </section>

          <section>
            <div className="container mt-15">
                <div className="trade">
                  <h2>International Trade </h2>
                </div>
                <div className="trade-paragraph" style={{width: "632px"}}>
                  <p>Trade has evolved from the historical Barter system to Mercantilism to trade fueled by industrialization and in the modern era technology driven platforms moving a fragmented foreign trade to a connected ecosystem. This allows industries involved in foreign trade to participate in a global economy, fuels economic and job growth, and can raise living standards for all. The NES platform is for enabling International trade and enable the force of GOOD.</p>
                </div>


              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="trade-img">
                    <img src='../images/Company/aboutus/trade1.png' />
                  </div>
                  <div className="trade-head mt-3">
                    <h3>In Service to All</h3>
                  </div>
                  <div className="trade-paragraph mt-3">
                    <p>The logistics industry has been long overdue for modern tech solutions. When supply chains are fragmented, what should be predictable turns into agony as businesses and consumers are impacted by delays and cost increases. Let’s fix it.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="trade-img">
                    <img src='../images/Company/aboutus/trade2.png' />
                  </div>
                  <div className="trade-head mt-3">
                    <h3>Facilitating Entrepreneurship</h3>
                  </div>
                  <div className="trade-paragraph mt-3">
                    <p>Entrepreneurs from any Industry involved in foreign trade are freed from a complex and fragmented ecosystems challenges,, businesses thrive, and we all benefit from innovative solutions. By connecting everyone in the global economy, we enable commerce, creativity, and progress.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="trade-img">
                    <img src='../images/Company/aboutus/trade3.png' />
                  </div>
                  <div className="trade-head mt-3">
                    <h3>Together We All Win</h3>
                  </div>
                  <div className="trade-paragraph mt-3">
                    <p>International trade has always been an amalgamation of factories, ships, planes, trucks, warehouses, all powered by technology—no one company can do it all. We believe that when knowledge and insights are accessible to everyone, we all benefit.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>


          <section style={{ background: "#0060BE" }}>
            <div className="container mt-15">
              <div className="ready d-flex flex-column justify-content-center align-items-center">
                <div className="ready-heading">
                  <h3>Have A Question?</h3>
                </div>
                <div className="ready-paragraph text-center mt-3" style={{ width: "435px" }}>
                  <p>Talk to a supply chain solutions expert and see the Flexport Platform in action.</p>
                </div>
                <div className="reday-btn mt-3">
                  <button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Email Us With Questions</button>
                </div>
              </div>
            </div>
          </section>

          <Footer/>
    </>
  )
}