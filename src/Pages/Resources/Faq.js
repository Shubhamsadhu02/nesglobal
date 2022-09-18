import {React, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import Accordion from 'react-bootstrap/Accordion';
import '../../Styles/Faq.scss';
import onClassChange from '../../Helpers/ClassMutationObserver';


export default function Faq() {

    const faqItems=[
        {
            "header": "Can NES be my customs broker without handling my freight?",
            "description": "Yes, NES offers brokerage as a standalone service. Our brokers will work with your freight forwarder, carrier, or any of your supply chain partners to clear your goods. As a customs brokerage customer, you'll have access to our technology and Platform for data analytics at the PO and SKU level, Standard reporting includes landed costs when the Platform can capture all of the costs of acquiring a product internationally.",
            "link": "#"
        },
        {
            "header": "How does NES charge for customs brokerage services?",
            "description": "NES charges a flat management fee per customs entry. Our technology helps'to minimize the accessorial charges that have plagued logistics.",
            "link": "#"
        },
        {
            "header": "What is the value of digitizing your supply chain?",
            "description": "Too often supply chains are an operational gray area where costs and outcomes are unpredictable. The NES Platform structures your product-level data and becomes your single source of truth, providing visibility and control from end to end. Plus you gain timely business analytics for better decision making and feedback loops.",
            "link": "#"
        },
        {
            "header": "Should I be getting more visibility from my current customs broker?",
            "description": "Your supply chain is inventory in motion. You should have near real-time access to every step in the process, along with access to completed entries and historical data.",
            "link": "#"
        },{
            "header": "Have I assigned the right harmonized tariff schedule (HTS) number to my product?",
            "description": "HTS codes are what most customs' authorities use to determine costs and admissibility. Many products are hard to categorize correctly, or with small changes could be placed in a different category. Misclassification can cause major delays and potential penalties. NES brokers and technology limit errors to expedite better outcomes.",
            "link": "#"
        }
    ]

    const [itemsToWatch, setItemsToWatch] = useState([]);

    useEffect(() => {
        var itemToWatch = document.querySelectorAll('.accordion-collapse');
        setItemsToWatch(itemToWatch);
    }, [])
    
    
    itemsToWatch.forEach(element => {
        onClassChange(element, (node) => {
            if(node.classList.contains('show')){
                node.parentNode.style.borderColor = "#0060BE";
            }else{
                node.parentNode.style.borderColor = "#E6E6E6";
            }
        });
    });


    return (
        <>
            <Header showNav={true} isWhite={true} />
            <section className="blog-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 blog-content">
                            <h6 className="faq-super-heading heading-6 text-uppercase">
                                Help Center
                            </h6>
                            <h1 className="blog-title ">
                                How Can We Help You?
                            </h1>
                            <form action="#" className="form-inline faq-form">
                                <input type="text" placeholder='Search by term or phrase...' />
                                <button className="search-btn btn-primary" type='submit'>Search</button>
                            </form>
                            <h6 className='faq-sub-heading'>
                                Already a Flexport Client? <a className='link'>Log in</a> for assistance
                            </h6>
                        </div>
                        <div className="col-md-6 faq-thumbnail">
                            <img src="/images/resources/faq-header.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='faq-body'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="faq-categories">
                                <h6>Customs and Compliance</h6>
                                <ul>
                                    {/* { [...Array(10)].map(ele => <li>Air Freight</li>)} */}
                                    <li><a href='#'>Air Freight</a></li>
                                    <li><a href='#'>Sea Freight</a></li>
                                    <li><a href='#'>Trade Finance</a></li>
                                    <li><a href='#'>Trade Advisory</a></li>
                                    <li><a href='#'>Platform Refresh</a></li>
                                    <li><a href='#'>Quotes, Pricing, and Billing</a></li>
                                    <li><a href='#'>Services and Capabilities</a></li>
                                    <li><a href='#'>Shipment Essentials</a></li>
                                    <li><a href='#'>Shipping to Amazon FBA</a></li>
                                    <li><a href='#'>Sustainability product</a></li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h1 className="heading-1 faq-title">Customs and Compliance</h1>
                            <h6 className="heading-6 sub-title">Frequently asked questions about Customs, compliance, and regulations.</h6>
                            <div className="accordion-container">
                                <Accordion defaultActiveKey="1" hide>
                                    {
                                        faqItems.map((item,index)=> {
                                            return <Accordion.Item  eventKey={`${index}`}>
                                                <Accordion.Header>{item.header}</Accordion.Header>
                                                <Accordion.Body>{item.description}                                                
                                                <Link to={item.link} className="faq-read-more">Read More<span><i class="ri-arrow-right-s-line"></i></span></Link>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        })
                                    }                                   
                                </Accordion>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <section>
        <div className="container mt-15 mb-15">
          <div className="product-item mt-15">
              <div className="row">                
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="product-container">
                        <div className="product-topic1 mb-4">
                            <h4>NES Platform: NOW ENROLLING</h4>
                        </div>
                        <div className="product-heading1">
                            <h3 style={{color: "#403F3E"}}>Your Quickest Path to Supply Chain Expertise</h3>
                        </div>
                        <div className="product-paragraph">
                            <p style={{color: "#737171"}}>FlexU courses feature short video tutorials taught by seasoned logistics experts. Sign up today.</p>
                        </div>
                        <div className="learn-more-btn mt-4">
                            <Link to={"#"}><button type='submit'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="product-img">
                        <img src='../images/resources/enrolling.png' />
                    </div>
                </div>
              </div>
            </div>
            </div>
        </section>
            <Footer />
        </>
    )
}
