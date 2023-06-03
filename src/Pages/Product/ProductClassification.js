import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import Signup from '../../Partials/Signup'
import ProductSlider from '../ProductSlider'

export default function ProductClassification() {
    return (
        <>
            <Header showNav={true} isWhite={true} />

            <section style={{ background: "url('../images/product/prouct_classification/home.png')", backgroundSize: "cover", height: "680px", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="top-section d-flex align-items-center">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="product-topic">
                                    <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Product Classifications</h4>
                                </div>
                                <div className="product-heading mt-4">
                                    <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Code Up, No secret Code</h1>
                                </div>
                                <div className="product-paragraph mt-4">
                                    <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">These 6-10 digit numbered Harmonized Product Tariff Codes serve two major roles and purposes aside from helping goods clear through customs: They identify products that are being imported or exported through a country's borders. They classify and categorize products in a worldwide system used for customs clearance purposes.</p>
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
            <div className="container mt-15 mb-15">
                <div className="product-item mt-15">
                    <div className="row">
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="product-img">
                                <img src='../images/product/prouct_classification/facilitating.png' alt='' />
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex flex-column justify-content-center">
                            <div className="product-container">
                                <div className="product-topic1 mb-4">
                                    <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">Why NES</h4>
                                </div>
                                <div className="product-heading1">
                                    <h3 data-aos="fade-up" data-aos-easing="linear" style={{color: "#403F3E"}}>Facilitating Trade Compliance</h3>
                                </div>
                                <div className="product-paragraph">
                                    <p data-aos="fade-up" data-aos-easing="linear" style={{color: "#737171"}}>Trade Compliance is key to building trust in international trade and also opens doors to benefits of products are classified accurately. Product Classification is a standalone fee based service offered by NES Global to ensure that the customer can sanitize their invoices and declarations and facilitate minimized customs duties and a seamless custom clearance of their shipments. The advisors would also assist in building a compliant harmonized product library for the products which would mitigate future risks and also reduce duty exposures or seek trade benefits impacting to making healthy bottom lines.</p>
                                </div>
                                <div className="learn-more-btn mt-4">
                                    <Link to={"/company/contact-us"}><button type='submit'>Connect with our advisor</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-item mt-15">
                    <div className="row">
                        <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                            <div className="product-container">
                                {/* <div className="product-topic1 mb-4">
                                    <h4>Why NES</h4>
                                </div> */}
                                <div className="product-heading1">
                                    <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{color: "#403F3E"}}>Product Classification</h3>
                                </div>
                                <div className="product-paragraph">
                                    <p data-aos="fade-up" data-aos-easing="linear" style={{color: "#737171"}}>Minor physical changes to the product could lead to classifying the product to a harmonized code that could avail lower duty tariffs. This is a clever and 100% compliant practice in trade that the NES advisors can guide the customer to avail significant trade benefits.</p>
                                </div>
                                <div className="learn-more-btn mt-4">
                                    <Link to={"/company/contact-us"}><button type='submit'>Connect with our advisor</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center order-md-2 order-1">
                            <div className="product-img">
                                <img src='../images/product/prouct_classification/classification.png' alt='' />
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
