import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../Styles/Faq.scss';


export default function Glossary() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header showNav={true} isWhite={true}/>
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
                                <a href='#'><button className="search-btn btn-primary" type='submit'>Search</button></a>
                            </form>
                            <h6 className='faq-sub-heading'>
                                Already a Nes Global Client? <a className='link'>Log in</a> for assistance
                            </h6>
                        </div>
                        <div className="col-md-6 faq-thumbnail">
                            <img src="/images/resources/faq-header.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='glossary-body'>
                <div className="container">
                    <div className="glossary-group">
                        <h1 className="glossary-group-header">
                            a
                        </h1>
                        <ul className="row glossary-list">
                            <li className="glossary-list-item col-md-4" onClick={handleShow}>
                                Air waybill (AWB)
                            </li>
                        </ul>
                    </div>

                </div>
            </section>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton style={{backgroundColor: "#10243E"}}>
                    <h6 className="faq-super-heading heading-6 text-uppercase">
                        Glossary
                    </h6>
                    <Offcanvas.Title>Air Waybill (AWB)</Offcanvas.Title>
                    <h6 className='offcanvas-sub-heading'>
                        Air waybills are the freight documents associated with air shipments.
                    </h6>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h2 className="glossary-detail-title">
                        What is an air waybill?
                    </h2>
                    <p className="glossary-detail-paragraph">
                        An air waybill (AWB) is a non-negotiable document issued by a carrier when goods are transported by air.<br />
                        An air waybill acts as delivery instructions, a contract of carriage, and a cargo receipt for airfreight.
                    </p>
                    <hr />
                    <h2 className="glossary-detail-title">
                        Related Help Articles
                    </h2>
                    <ul className="related-links">
                        <li className="related-links--item">
                            <a href="#">Original Bills of Lading: What You Need to Know</a>
                        </li>
                        <li className="related-links--item">
                            <a href="#">8 Common Types of Bills of Lading by Transportation Mode</a>
                        </li>
                    </ul>
                    <h2 className="glossary-detail-title related-glossary-title">
                        Related Glossary Terms
                    </h2>
                    <ul className="related-links">
                        <li className="related-links--item">
                            <a href="#">Bill of Lading</a>
                        </li>
                        <li className="related-links--item">
                            <a href="#">Carrier</a>
                        </li>
                    </ul>
                    
                </Offcanvas.Body>
            </Offcanvas>

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
