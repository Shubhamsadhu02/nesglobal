import { React, useState, useEffect, Children } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../Partials/Header'
import Footer from '../../Partials/Footer'
import Accordion from 'react-bootstrap/Accordion';
import '../../Styles/Faq.scss';
import onClassChange from '../../Helpers/ClassMutationObserver';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

export default function Faq() {

    const faqItems = [
        {
            "title": "Custom and Compliance",
            Children: [
                {
                    "header": "Can NES be my customs broker without handling my freight?",
                    "description": "Yes, NES offers brokerage as a standalone service. Our brokers will work with your freight forwarder, carrier, or any of your supply chain partners to clear your goods. As a customs brokerage customer, you'll have access to our technology and Platform for data analytics at the PO and SKU level, Standard reporting includes landed costs when the Platform can capture all of the costs of acquiring a product internationally.",

                },
                {
                    "header": "How does NES charge for customs brokerage services?",
                    "description": "NES charges a flat management fee per customs entry. Our technology helps'to minimize the accessorial charges that have plagued logistics.",

                },
                {
                    "header": "What is the value of digitizing your supply chain?",
                    "description": "Too often supply chains are an operational gray area where costs and outcomes are unpredictable. The NES Platform structures your product-level data and becomes your single source of truth, providing visibility and control from end to end. Plus you gain timely business analytics for better decision making and feedback loops.",

                },
                {
                    "header": "Should I be getting more visibility from my current customs broker?",
                    "description": "Your supply chain is inventory in motion. You should have near real-time access to every step in the process, along with access to completed entries and historical data.",

                },
                {
                    "header": "Have I assigned the right harmonized tariff schedule (HTS) number to my product?",
                    "description": "HTS codes are what most customs' authorities use to determine costs and admissibility. Many products are hard to categorize correctly, or with small changes could be placed in a different category. Misclassification can cause major delays and potential penalties. NES brokers and technology limit errors to expedite better outcomes.",

                }
            ]
        },
        {
            "title": "Visibility",
            Children: [
                {
                    "header": "I see your office locations don't match with my physical location. Can I still use NES?",
                    "description": "Absolutely. NES provides end to end coverage, globally. In areas where we do not have our own offices, we have aligned with strategic partners to provide our clients with best in class local operations. Each strategic partner is held to the same strict standards of compliance and service to which we hold ourselves.",

                },
                {
                    "header": "Do vendors have to book via the Platform?",
                    "description": "The NES Platform is designed to streamline booking submission between you and your supplier. If your supplier chooses not to use the Platform to submit and manage bookings, Nes Global is able to accept bookings via email.",

                },
                {
                    "header": "How long does it take to get set up with NES?",
                    "description": "EDI, API, JSON, XML, CSV, and other delimited files. NES Professional Services team also works with customers to build custom integrations.",

                },
                {
                    "header": "Do you have a minimum number of shipments that we must book with you?",
                    "description": "No, there is no minimum number of bookings. However, pricing depends on the lane and volume you’d like to move. Please reach out to our Sales team to discuss further.",

                }
            ]
        },
        {
            "title": "Air Freight",
            Children: [
                {
                    "header": "I see your office locations don't match with my physical location. Can I still use NES?",
                    "description": "Absolutely. Nes Global provides end to end coverage, globally. In areas where we do not have our own offices, we have aligned with strategic partners to provide our clients with best in class local operations. Each strategic partner is held to the same strict standards of compliance and service to which we hold ourselves.",

                },
                {
                    "header": "Does NES have a global network?",
                    "description": "NES global network includes CFS locations and partners on the ground, around the world. We service over 116 countries around the world and we have aligned with strategic partners to provide the best in class service with the best in class local operations.",

                },
                {
                    "header": "Does NES offer real-time tracking of my air shipments?",
                    "description": "Our online platform allows our clients to create, manage, and track all international and domestic freight shipments in a single online dashboard. NES receives data from satellites, geofences, and integrations with third party providers that enable us to generate real-time milestone updates throughout the shipment lifecycle.",

                },
                {
                    "header": "Does NES store all documents related to my air shipments?",
                    "description": "At NES, we upload each of your trade documents into our Platform and digitize them to make them completely searchable. Additionally, we structure the data in such a way that enables our clients to run reports across all available supply chain data, down to the PO and SKU-level, with ease.",

                }
            ]
        },
        {
            "title": "Trade Finance",
            Children: [
                    {
                        "header": "Can You Engineer Lower Duties? Yes, if You Can Find the Customs Codes",
                        "description": "Rules don’t have to be broken to lower or limit duties. Certain circumstances allow for tariff engineering, shaping the design of goods for better duty rates.",

                    },
                    {
                        "header": "Article",
                        "description": `In times of global trade turmoil, simple steps to keep your business thriving are always worth considering—but when it comes to customs compliance, how do you unearth the options?
                        <br/><br/>Clearing goods can present serious hiccups if not done properly. The cargo delays, the risk of penalties . . . There’s no doubt compliance is non-negotiable.
                        <br/><br/>But rules don’t have to be broken to lower or limit duties. Instead, certain circumstances allow for tariff engineering, the genius practice of legitimately shaping supply chains or goods for better duty rates.
                        <br/><br/>The strategy hinges on the classification codes in one sprawling resource: the Harmonized Tariff System. Let’s dive in.
                        `,

                    },
                    {
                        "header": "What Is the Harmonized Tariff System?",
                        "description": `Consider the Harmonized Tariff System, or HTS, your ultimate and only guide for determining tariff classifications.
                        <br/><br/>HTS codes determine eligibility for free trade agreements and other preference programs. They also define super-fun stuff like duty rates, restrictions, prohibitions, and more.
                        <br/><br/>Fortunately for most supply chain directors, a customs broker is the one who reads the Harmonized Tariff System and cross-checks it, ad nausea.
                        <br/><br/>But every company is responsible for its own accuracy and compliance. So it’s crucial you share the most up-to-date product information from your suppliers. Your broker delivers HTS codes for your approval based on the info you provide.
                        `,

                    },
                    {
                        "header": "Why You Need a Customs Broker",
                        "description": `To unlock the best duty rates possible, you need full mastery of classification codes.
                        <br/><br/>Scale this across hundreds or hundred thousands of products from multiple countries, and you’re looking at a mind-boggling amount of data.
                        <br/><br/>Automation must help, right? It definitely does, but you’d be surprised. Much of customs classification is still done by brainpower. It’s a working partnership between you and your broker.
                        <br/><br/>The easy part: Once uploaded to the Nes Global platform, classifications follow products across a product library. They automatically populate in support of everything from order management to duty reconciliation.
                        <br/><br/>This represents a major time savings and, as long as you get the codes right in the first place, helps to ensure accuracy across your supply chain. Once the work of classification is done, your company can continue to reap these benefits—until the codes update.
                        <br/><br/>Which they do, annually, and, more thoroughly, every five years. When this happens, a customs broker can help make sure your product library updates, too.
                        <br/><br/>Thinking about getting in touch? The next five-year update kicks off in January 2022.
                        `,

                    },
                    {
                        "header": "Optimizing Classification Codes",
                        "description": `Impeccable classification is just your foundation, though. Customs brokers work with the codes on a daily basis to ensure compliance and optimize your tariff scenarios. This is where tariff engineering comes in.
                        <br/><br/>For instance, the codes tell your broker whether you’re on the hook for recent trade-war tariffs. In the US, examples could include Section 301 tariffs on goods from China or Section 232 tariffs on steel and aluminum.
                        <br/><br/>At their core, these tariffs are intended as trade remedies—actions taken by governments to counter what it deems unfair practices in other countries. Each administration can mold trade remedies to suit its policies.
                        <br/><br/>The resulting tariff lists can span thousands of pages in a tiny font, and the pages aren’t always clickable. But a broker can give you actionable insights.
                        <br/><br/>Sometimes, advice is wonderfully simple: Procure square steel rods instead of round ones or vice versa.
                        <br/><br/>Other times, it’s more complex. Take the glass screen protector of a smart watch. A flat glass from China is subject to a high Section 301 duty rate. But if the glass is bent or curved, the duty rate is far lower.
                        <br/><br/>Seems like an obvious choice, right? Except smart watches are about wearability and aesthetics, too. The manufacturer needs to consider which glass truly fits the watch best. Some tinkering might be involved before a final decision is made.
                        `,

                    },
                    {
                        "header": "Leveling Up Your Customs Game",
                        "description": `Think of tariff engineering as a game. HTS classifications are official definitions. If you can buy or design goods within certain parameters, you might be able to pay less in duties.
                        <br/><br/>Savvy classification is the first step in upgrading your customs strategies to your advantage. For expert help classifying your goods, reach out to <a href="mailto:Enquiries@nesglobal.com">Enquiries@nesglobal.com</a>.
                        `,
    
                   }
            ]
        },
        {
            "title": "Trade Insurance",
            Children: [
                {
                    "header": "What if I already have a cargo insurance policy?",
                    "description": "Make sure your existing coverage matches your business needs. Our free coverage analysis can help you evaluate coverage and cost effectiveness. For more information, request a comparison.",

                },
                {
                    "header": "Do I really need insurance? I don’t want to pay for it.",
                    "description": "Consider what you have invested in a single shipment and where you would be with a total loss. NES competitive pricing is a small fraction of your shipment value, but provides total peace of mind. Contact us today to learn more about our low rates.",

                },
                {
                    "header": "We use a different freight forwarder. Can I still insure my shipments with NES?",
                    "description": "First, why would you do that? Kidding. Second, NES can insure cargo regardless of who ships it. Supply chains are complex, but insuring them doesn’t need to be. We simplify the process and give you peace of mind, no matter who moves your goods.",

                },
                {
                    "header": "Can we partner with NES to distribute cargo insurance products?",
                    "description": "AYes. Through our white label program, you can provide NES Insurance Solutions to your clients. Contact us to learn how Nes Global can provide the same great rates, consistent experience, and peace of mind we provide to our own clients.",

                },
                {
                    "header": "Do you do all your underwriting in-house?",
                    "description": "NES partners with XXXXX, The Hartford Financial Services Group, Inc., and Zurich Insurance Group Ltd. for our underwriting. Our insurance partners provide deep risk assessment expertise that pairs with our knowledge of global logistics to provide clients with low cost, targeted coverage they can trust.",

                }
            ]
        },
        {
            "title": "Trade Advisory",
            Children: [
                {
                    "header": "Can I hire NES Trade Advisors even if I ship freight with someone else?",
                    "description": "Yes. NES Trade Advisors are enthusiastic advocates for all clients, no matter who you partner with for shipping. We draw on our expertise as a global logistics provider, but our trade management services are available to anyone who wants to find the best strategies for their supply chains.",

                },
                {
                    "header": "Can I extract my data on my own?",
                    "description": "Yes, but it can be a lot of trial and error. In many other countries, the importer or exporter of record bears full legal responsibility for accurate, timely, and fully compliant documentation. So it’s usually worth it to get help. We can extend in to your in-house team, too.",

                },
                {
                    "header": "Can you share costs for consulting services?",
                    "description": "NES Trade Advisory solutions are tiered for your specific needs. Initial client meetings are complimentary, and short engagements can still move the needle for many companies. We’re talking about savings or capture of millions of dollars for some clients. Trade advisors will give you the info you need to make your own decision about moving forward.",

                }
            ]
        },
        {
            "title": "Data Security",
            Children: [
                {
                    "header": "What data does NES Global collect? ",
                    "description": "NES Global retains all shipment, product, and file data collected over the course of a client's shipment's life cycle with NES Global. <br/> The types of data include: <ul><li>•	Documents and files uploaded into the NES Global platform (e.g., Master / House Bill of Lading, Commercial Invoice, Packing List,  Customs Release,  Customs Entry)</li><li>•  Shipment reference numbers and characteristics (e.g., Master / House Bill of Lading number, weight, volume, piece count, milestone dates, events, invoice costs)</li><li>•  Product-related data (e.g., name, SKU, HS Code, regulatory information, cost, quantities, metrics across shipments) </li><li>•  Security-related metadata (logins and locations)</li></ul><br/>In addition, as a licensed NVOCC and customs broker, NES Global complies with all relevant laws and regulations required by authorities related to retaining data. <br/>Any documents and data that NES Global collects during a given shipment are added to each unique shipment record within NES Global’s platform. ",

                },
                {
                    "header": "Where is NES Global user data stored?",
                    "description": "All NES Global user data is stored in the cloud using secure Amazon Web Services servers. We use both Amazon Simple Storage Service (S3) and Amazon RDS.",
                },
                {
                    "header": "Do you make backups?",
                    "description": "Amazon S3 automatically keeps copies of all files; we make backups of our cloud database every 3 hours, which are stored in S3.<br/>Our database is real-time backed up in 4 different data centers; additionally, we take backups every hour which are stored on the server. We take a daily backup that's stored remotely.",
                },
                {
                    "header": "Who can access the data?",
                    "description": "Only technicians from the IT function from NES Global have access to the raw data in AWS. Client data can only be viewed or edited by NES Global employees as necessary to their roles. <br/>We work with a number of IT partners to support our internal operations. Our client data is maintained within our own platform, and we do not export proprietary client information to any other service",
                },
                {
                    "header": "What is NES Global’s password policy?",
                    "description": "Employee passwords for internally accessing the NES Global platform must be changed every 90 days and can’t be reused. They must contain 8 characters, including a capital, a lower case, a number and a special character. This policy also applies to clients and partners. <br/>Additionally, our team is required to use multi-factor authentication wherever possible, including email and work computers. This helps further prevent unauthorized access to client data.",
                },
                {
                    "header": "What type of encryption do you use?",
                    "description": "Our site functions only over SSL, so all communication is secure and encrypted end-to-end.",
                },
                {
                    "header": "How do you test or audit your platform for security?",
                    "description": "We have contracted with an industry-leading cyber security firm, to conduct periodic vulnerability testing. They perform full-scale audits to ensure that our servers and software are protected against potential security threats. We are proud to say that no vulnerabilities that will expose your data will ever be found.",
                },
                {
                    "header": "Will you use client data for your own purposes?",
                    "description": "No, we will not use client data for our own purposes. We use industry data and anonymized metadata to improve our platform and service offerings. As a licensed customs broker, it is illegal for us to use client data for any purposes other than the client's wishes.",
                },
                {
                    "header": "Will you sell client data?",
                    "description": "No.",
                },
                {
                    "header": "How long will you store our data? What happens to our data when we stop shipping?",
                    "description": "We store your data in perpetuity unless you request otherwise. ",
                },
                {
                    "header": "Can we (clients) remove our data?",
                    "description": "All data can be permanently deleted by request, as long as the request complies with the regulating authorities that govern the NES Global business. <br/>**Please confirm that all data related to our account remains our property. ** <br/> <b>Confirmed.</b>",
                },
                {
                    "header": "What happens if NES Global ceases to exist?",
                    "description": "NES Global is well funded, so there is no risk that we will go out of business in the foreseeable future. That said, in the unlikely event of an unforeseen business closure, we will return or destroy clients' proprietary information.",
                },
                {
                    "header": "What happens in case of a change of ownership (acquisition or merger)?",
                    "description": "Data security and compliance with customs regulations will not change.",
                },
            ]
        }
    ]

    const [itemsToWatch, setItemsToWatch] = useState([]);

    useEffect(() => {
        var itemToWatch = document.querySelectorAll('.accordion-collapse');
        setItemsToWatch(itemToWatch);
    }, [])


    itemsToWatch.forEach(element => {
        onClassChange(element, (node) => {
            if (node.classList.contains('show')) {
                node.parentNode.style.borderColor = "#0060BE";
            } else {
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
                                Already a NES Global Client? <a className='link'>Log in</a> for assistance
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
                    <Tab.Container id="left-tabs-example" defaultActiveKey={0}>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="faq-categories">
                                    <ul>
                                        {
                                            faqItems.map((ele, index) => {
                                                return <li>
                                                    <Nav variant="pills" className="flex-column">
                                                        <Nav.Item>
                                                            <Nav.Link eventKey={`${index}`}>{ele.title}</Nav.Link>
                                                        </Nav.Item>
                                                    </Nav>
                                                </li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-8">
                                {
                                    faqItems.map((ele, index) => {
                                        return <Tab.Content>
                                            
                                            <Tab.Pane eventKey={`${index}`}>
                                            <h1 className="heading-1 faq-title">{ele.title}</h1>
                                            <h6 className="heading-6 sub-title">Frequently asked questions about Customs, compliance, and regulations.</h6>
                                                <div className="accordion-container">
                                                    <Accordion hide>
                                                        {
                                                            ele.Children.map((item, idx) => {
                                                                return <Accordion.Item eventKey={`${idx}`}>
                                                                    <Accordion.Header>{item.header}</Accordion.Header>
                                                                        
                                                                    <Accordion.Body dangerouslySetInnerHTML={{__html:item["description"]}}>
                                                                        {/* <Link to={item.link} className="faq-read-more">Read More<span><i class="ri-arrow-right-s-line"></i></span></Link> */}
                                                                    </Accordion.Body>
                                                                </Accordion.Item>
                                                            })
                                                        }
                                                    </Accordion>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    })
                                }
                            </div>
                        </div>
                    </Tab.Container>
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
                                        <h3 style={{ color: "#403F3E" }}>Your Quickest Path to Supply Chain Expertise</h3>
                                    </div>
                                    <div className="product-paragraph">
                                        <p style={{ color: "#737171" }}>NES Global courses feature short video tutorials taught by seasoned logistics experts. Sign up today.</p>
                                    </div>
                                    <div className="learn-more-btn mt-4">
                                        <Link to={"/company/contact-us"}><button type='submit'>Start Learning</button></Link>
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
