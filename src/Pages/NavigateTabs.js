import "../Styles/global.css";
import { Link } from 'react-router-dom'

import React from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function NavigateTabs () {

    const slide = [
        {
            "title": "Ship",
            "product-topic": "Ocean Freight",
            "product-heading": "Introducing the NES Freight Forwarding",
            "description": "Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi...",
            "link": "/product/ocean-freight",
            children: [
                {
                    "col-content":"without-image",
                    list_items: [
                        {
                            "product-topic": "Air Freight",
                            "product-heading": "Introducing the NES Freight Forwarding ",
                            "description": "Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi...",
                            "link": "/product/air-freight"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Customs",
            "product-topic": "Customs",
            "product-heading": "Compliance,	Compliance,	Compliance	for	a	better	Customer	Experience.",
            "description": "Operating on the NES platform is beneficial in many different ways, which stream line regulatory work flows and cascades the benefits to multiple aspects of the business. Additionally...",
            "link": "/product/customs",
            children: [
                {
                    "col-content":"with-image",
                    list_items: [
                        {
                            "image": "/images/Home/navigate_tabs/customs.png"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Track",
            "product-topic": "Visibility",
            "product-heading": "Easy to use, lets work together",
            "description": "The	NES	platform	is	created	in	a	way	to	capture	all	the critical	elements	of	shipping,	origin,	destination,	schedules,	booking,	SLI,	purchase	order	tracking,	milestones...",
            "link": "/product/visibility",
            children: [
                {
                "col-content":"with-image",
                list_items: [
                {
                    "image": "/images/Home/navigate_tabs/track.png"
                }
                ]
            }
            ]            
        },
        {
            "title": "Insure Shipments",
            "product-topic": "Cargo Insurance",
            "product-heading": "Tailor make your policy as per your convenience",
            "description": "One element that plays a vital role in trade is shipping and cargo insurance. Insurance also plays a vital role in incoterms and the right insurance...",
            "link": "/product/cargo-insurance",
            children: [
                {
                    "col-content":"with-image",
                    list_items: [
                        {
                            "image": "/images/Home/navigate_tabs/cargo.png"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Trade Finance",
            "product-topic": "Trade Finance",
            "product-heading": "Trade Financing Made Easy",
            "description": "It is important to consider the possibilities of using these receivables as a source of liquidity. The correct use of Trade Finance instruments can even...",
            "link": "/product/trade-finance",
            children: [
                {
                    "col-content":"with-image",
                    list_items: [
                        {
                            "image": "/images/Home/navigate_tabs/trade.png"
                        }
                    ]
                }
            ]
        },
        {
            "title": "Sustainability",
            "product-topic": "Nes Care",
            "product-heading": "Delivering the Good’NES to Humanity",
            "description": "NES Global aims at enabling organizations to deliver the global aid and impact to meet their sustainability goals with ease and in an economically efficient way.",
            "link": "/company/nescare",
            children: [
                {
                    "col-content":"with-image",
                    list_items: [
                        {
                            "image": "/images/Home/navigate_tabs/nescare.png"
                        }
                    ]
                }
            ]
        }
    ]

    return (
        <>
            <section style={{ background: "#10243E", height: "440px" }}>
                <div className="container mt-15">
                    <div className="supply-chain pt-5">
                        <div className="product-heading1 text-center mb-5">
                            <h3 style={{ fontWeight: "400" }}>Facilitating Supply Chains And Competing For Success</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            <div className="container" style={{marginTop: "-280px"}}>
                        <Tabs defaultActiveKey={0} id="uncontrolled-tab-example">                    
                            {
                                slide.map((item, index) =>{
                                    
                                    return <Tab key={index} eventKey={`${index}`} title={item["title"]}>                                                                            
                                        <div className="supply_chain--whitebx">
                                            <div className="row" style={{ rowGap: "50px" }}>
                                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                                    <div className="product-topic1 mb-4">
                                                        <h4>{item["product-topic"]}</h4>
                                                    </div>
                                                    <div className="product-heading1">
                                                        <h3 style={{ color: "#403F3E" }}>{item["product-heading"]}</h3>
                                                    </div>
                                                    <div className="product-paragraph">
                                                        <p style={{ color: "#737171" }}>{item.description}</p>
                                                    </div>
                                                    <div className="supply-learn-more">
                                                        <Link to={item.link}>Learn More<i className="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 d-flex flex-column justify-content-center">
                                                    {
                                                        item.children.map((list) =>{
                                                            return getContent(list)
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>                                                                      
                                
                                    </Tab>
                                    
                                   
                                })
                            }                                                    
                        </Tabs>
                        </div>
                    </section>

           

        </>
    )
};


function getContent(list){
    if(list["col-content"] === "without-image"){
     return <>
         {
             list.list_items.map((item, index) => <div key={"ooiand-"+index}>
                     <div className="product-topic1 mb-4">
                         <h4>{item["product-topic"]}</h4>
                     </div>
                     <div className="product-heading1">
                         <h3 style={{ color: "#403F3E" }}>{item["product-heading"]}</h3>
                     </div>
                     <div className="product-paragraph">
                         <p style={{ color: "#737171" }}>{item.description}</p>
                     </div>
                     <div className="supply-learn-more">
                         <Link to={item.link}>Learn More<i className="fa-solid fa-angle-right"></i></Link>
                     </div>
                 </div>
             )
         }                                                                
     </>
    }
    else{
     return <>
     {
        list.list_items.map((item, idx) => <div className="product-img d-flex justify-content-end" key={"navTabs-"+idx}>
                <img src={item.image} alt="" height={286} />
            </div>
        )
     }
    </>
    }
}