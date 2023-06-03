import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../Partials/Footer';

import Header from '../../Partials/Header';

export default function BlogDetail() {
    return (
        <>
            <Header showNav={true} isWhite={true} />

            <section className="blog-header" style={{ backgroundImage: "url(/images/blog/blogbg.png)", backgroundSize: "cover", opacity: "5", height: "533px", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 blog-content">
                            <div className="blog-date text-uppercase">
                                <h6>APRIL 20, 2021</h6>
                            </div>
                            <h1 className="blog-title ">
                                Can You Engineer Lower Duties? Yes, if You Can Find the Customs Codes
                            </h1>
                            <div className='blog-details mt-2 d-flex align-items-center'>
                                <div className="blog-read--time d-flex align-items-center">
                                    <i class="fa-solid fa-clock"></i>
                                    <h4>8 min read</h4>
                                </div>
                                <div className="blog-tags d-flex align-items-center" style={{ marginLeft: "3rem" }}>
                                    <i class="fa-solid fa-tag"></i>
                                    <div className="blog-tags--names d-flex">
                                        <h4>Shipping</h4>
                                        <h4>Insights</h4>
                                        <h4>Logistics</h4>
                                    </div>
                                </div>
                            </div>
                            <div className='blog-description d-flex align-items-center' style={{ marginTop: "8rem" }}>
                                <div className="blog-writer">
                                    <h4 className='mt-2'>Written by: <b>NES Global Team</b></h4>
                                </div>
                                <div className="blog-share d-flex align-items-center justify-content-center" style={{ marginLeft: "3rem" }}>
                                    <h4 className='mt-2'>Share:</h4>
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-instagram"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className='blog-details mt-15'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3" style={{backgroundColor: "#F9F9F9", padding: "25px", borderRadius: "4px"}}>
                            <div className="blog-heading">
                                <h2>Ready to Get Started?</h2>
                            </div>
                            <div className="blog-paragraph">
                                <p>NESGlobal makes shipping your cargo transparent, reliable, and affordable</p>
                            </div>
                            <div className="supply-learn-more">
                                <Link to={"#"}>Get Started<i class="fa-solid fa-angle-right"></i></Link>
                             </div>
                        </div>
                        <div className="col-lg-9" style={{padding: " 0 25px"}}>
                            {/* Blog contents start */}

                            <div className="blog-paragraph">
                                <p>NESGlobal makes shipping your cargo transparent, reliable, and affordable</p>
                            </div>

                            <div className="blog-heading">
                                <h2>Ready to Get Started?</h2>
                            </div>


                            {/* Blog contents end */}
                        </div>
                    </div>
                </div>
            </section>

            <section className='releated-articles mt-15'>
                <div className="container">
                    <div className="blog-heading">
                        <h2>Related Articles</h2>
                    </div>
                    <div className="blog-paragraph" style={{width: "475px"}}>
                        <p>Educate	yourself	on	the	big	picture,	and	master	details	that	can	help	you	avoid	costly	mistakes.</p>
                    </div>
                </div>
            </section>
            


            {/* Request A Demo */}

            <section className="mt-15" style={{ background: "url('../images/product/visibility/productbg.png')" }}>
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


            <Footer />
        </>
    )
}
