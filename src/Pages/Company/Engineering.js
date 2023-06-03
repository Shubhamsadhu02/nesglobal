import React from 'react'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'

export default function Engineering() {
  return (
    <>
    <Header/>

    <section style={{ backgroundImage: "url(../images/Company/engineering/engineeringhome.png)", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="container">
            <div className="top-section d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-7">
                         <div className="product-topic">
                            <h4>ENGINEERING</h4>
                        </div>
                        <div className="product-heading mt-4">
                            <h1>Building the Technology That's Simplifying Global Trade</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section style={{ backgroundImage: "url(../images/Company/engineering/engineeringbg.png)", backgroundSize: "cover",backgroundPosition: "center"}} >
        <div className="container">
            <div className="product-item">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                        <div className="product-container">
                            <div className="product-topic1 mb-4">
                                <h4>Who We Are</h4>
                            </div>
                            <div className="product-heading1">
                                <h3>Use Modern Tools to Solve Historic Problems</h3>
                            </div>
                            <div className="product-paragraph">
                                <p>At the intersection of trade and the internet, Nes Global engineering is disrupting the age-old freight forwarding industry. We're looking for innovative, passionate people to build the digital technologies that will make shipping around the world easier and more efficient.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-md-2 order-1">
                        <div className="product-img p-5">
                            <img src='../images/Company/engineering/engineering1.png' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div className="container mt-15">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-img">
                        <img src='../images/Company/engineering/engineering2.png' />
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="product-container">
                        <div className="product-heading1 mb-4">
                            <h3 style={{color: "#403F3E"}}>“We're changing how people think about moving freight. It's exciting to be a pioneer, solving the hard problems.”</h3>
                        </div>
                        <div className="engineer-name">
                            <h4>Jeremy Weinman</h4>
                        </div>
                        <div className="engineer-desg">
                            <h5>Logistics Director, Caddis</h5>
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
                            <h3 style={{color: "#403F3E"}}>An Environment Built for Problem Solvers</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{color: "#737171"}}>Our engineers are taking on huge and unique challenges: to start with, our teams are creating a data model that represents all the complexities of logistics in a way that’s true to reality, yet easy to understand and access. Plus, our clients and the supply chains we support are global. So we don’t roll out our products on a small scale – they’re operating for the businesses we partner with around the world right away.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-md-2 order-1">
                    <div className="product-img">
                        <img src='../images/Company/engineering/engineering3.png' />
                    </div>
                </div>
            </div>
        </div>

        <div className="product-item mt-15">
            <div className="row">
                <div className="col-lg-6">
                    <div className="product-img">
                        <img src='../images/Company/engineering/engineering4.png' />
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="product-container">
                        <div className="product-heading1">
                            <h3 style={{color: "#403F3E"}}>Collaborative and Swift-Moving</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{color: "#737171"}}>Nes Global is growing very quickly, and so is our product -- we welcome questions and unique ideas. Our engineers are empowered to identify critical projects, strategically prioritize them, and execute them. You decide how to get us to where we want to go.
                                <br/>
                                Don’t know much about freight forwarding? Neither do most engineers when they start, but you’ll develop expertise by collaborating and learning with your team. Plus, because so much of our software is for our internal operations teams, you’ll often get to work directly with your users!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>


    <div className="mt-15"></div>

<section style={{ background: "url('../images/product/trade_finance/tradefinancebg.png')", backgroundSize: "cover" }}>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="ready d-flex flex-column justify-content-center">
                        <div className="product-topic1 mb-4">
                            <h4 style={{ color: "#FFFFFF" }}>INSIDE NES GLOBAL</h4>
                        </div>
                        <div className="ready-heading">
                        <h3>Get to Know Nes Global Engineering: Bookings Team</h3>
                        </div>
                        <div className="ready-paragraph mt-3">
                        <p>Quintin Leong, a software engineer on the bookings team at Nes Global, shares why he joined Nes Global, what his team’s mission is, and why it matters.</p>
                        </div>
                        <div className="reday-btn mt-3">
                        <button type='submit' style={{ background: "#FFFFFF", color: "#0C1E35" }}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>

<section  style={{background: "#00264C"}}>
    <div className="container p-5">
        <div className="role text-center">
            <h2 style={{color: "#FFFFFF"}}>Find Your Role at Nes Global</h2>
        </div>
    </div>
</section>

<Footer/>
    </>
  )
}
