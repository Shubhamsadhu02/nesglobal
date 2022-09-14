import "../Styles/global.css";
import { Link } from 'react-router-dom'


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default () => {

    const slide = [
        {
            "description": "After your Order is ready for dispatch, send your pickup request to the Nes online and leave it to the NES ops team to execute",
            "link": "#"
        },
        {
            "description": "Visibility is the catalyst to seamless trade. Shipment and data visibility is critical for control of the supply chain.",
            "link": "#"
        },
        {
            "description": "Nes platform helps you explore the most feasible mode through a selection of top shipping lines and airlines in a matter of seconds.",
            "link": "#"
        },
        {
            "description": "Aligning to regulations is critical and the NES team helps you though their experience as well as well-designed resources",
            "link": "#"
        },
    ]

    return (
        <>
        <section style={{background: "#10243E", height: "440px"}}>
        <div className="container mt-15">
            <div className="supply-chain pt-5">
                <div className="product-heading1 text-center mb-5">
                    <h3 style={{ fontWeight: "400" }}>Facilitating Supply Chains And Competing For Success</h3>
                </div>
                <ul className='supply-chain--tags'>
                    <li><a href='#'>Ship</a></li>
                    <li><a href='#'>Customs</a></li>
                    <li><a href='#'>Track</a></li>
                    <li><a href='#'>Insure Shipments</a></li>
                    <li><a href='#'>Trade Finance</a></li>
                    <li><a href='#'>Sustainibility</a></li>
                </ul>
            </div>
        </div>
    </section>
    <section>
        <div className="container">
            <div className="supply_chain--whitebx">
                <div className="row" style={{rowGap: "50px"}}>
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="product-topic1 mb-4">
                            <h4>Sea Freight</h4>
                        </div>
                        <div className="product-heading1">
                            <h3 style={{ color: "#403F3E" }}>Introducing the NES Freight Forwarding </h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{ color: "#737171" }}>Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi...</p>
                        </div>
                        <div className="supply-learn-more">
                            <Link to={"/product/ocean-freight"}>Learn More<i class="far fa-angle-right"></i></Link>
                        </div>
                    </div>

                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="product-topic1 mb-4">
                            <h4>Air Freight</h4>
                        </div>
                        <div className="product-heading1">
                            <h3 style={{ color: "#403F3E" }}>Introducing the NES Freight Forwarding  </h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{ color: "#737171" }}>Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi...</p>
                        </div>
                        <div className="supply-learn-more">
                            <Link to={"/product/air-freight"}>Learn More<i class="far fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
};