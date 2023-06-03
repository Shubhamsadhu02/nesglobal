import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductSlider() {
    const slide = [
        {
            Product_topic: "Customs",
            Product_head: "Compliance,	Compliance,	Compliance	for	a	better	Customer	Experience.",
            Product_paragraph: "Operating on the NES platform is beneficial in many different ways, which stream line regulatory work flows and cascades the benefits to multiple aspects of the business. Additionally...",
            link: "/product/customs"
        },
        {
            Product_topic: "Visibility",
            Product_head: "Easy to use, lets work together",
            Product_paragraph: "The	NES	platform	is	created	in	a	way	to	capture	all	the	critical	elements	of	shipping,	origin,	destination,	schedules,	booking,	SLI,	Purchase	order	tracking,	milestones	and	exceptions	and	more all	to	enable	your	supply	chain,	drive	collaborations	with",
            link: "/product/visibility"
        },
        {
            Product_topic: "Air Freight",
            Product_head: "Introducing the NES Freight Forwarding",
            Product_paragraph: "Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi modally across Sea, Air, Rail and Road shipments.",
            link: "/product/visibility"
        },
        {
            Product_topic: "Ocean Freight",
            Product_head: "Introducing the NES Freight Forwarding",
            Product_paragraph: "Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi modally across Sea, Air, Rail and Road shipments.",
            link: "/product/ocean-freight"
        },
        {
            Product_topic: "Air Charters",
            Product_head: "Air Charter Services",
            Product_paragraph: "The NES service stands for superior quality on-demand air charter solutions, built on high dispatch reliability, diverse capabilities and customer support. A dedicated Coordinator for every flight ensures a seamless and smooth operation, end-to-end.",
            link: "/product/air-freight"
        },
        {
            Product_topic: "Trade Finance",
            Product_head: "Trade Financing Made Easy",
            Product_paragraph: "It is important to consider the possibilities of using these receivables as a source of liquidity. The correct use of Trade Finance instruments can even help strengthen exporters and importers competitive power...",
            link: "/product/trade-finance"
        },
        {
            Product_topic: "Trade Advisory",
            Product_head: "No Secret Code... Level Up Your Supply Chain",
            Product_paragraph: "Namaste and Welcome to your gateway to digital freight forwarding in India. The team from NES Global specialize in transporting shipments multi modally across Sea, Air, Rail and Road shipments.",
            link: "/product/trade-advisory"
        },
        {
            Product_topic: "Cargo Insurance",
            Product_head: "Tailor make your policy as per your convenience",
            Product_paragraph: "One element that plays a vital role in trade is shipping and cargo insurance. Insurance also plays a vital role in incoterms and the right insurance...",
            link: "/product/cargo-insurance"
        },
        {
            Product_topic: "Product Classifications",
            Product_head: "Code Up, No secret Code",
            Product_paragraph: "These 6-10 digit numbered Harmonized Product Tariff Codes serve two major roles and purposes aside from helping goods clear through customs: They identify products that are being imported or exported through a country's borders. They classify and categorize...",
            link: "/product/product-classification"
        }
    ]

    return (
        <>
            <section className='mt-15 mb-15'>
                <div className="container">

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        breakpoints={{
                            500: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                              },
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                            infinite: true,
                        }}
                        className="homeSlider"
                    >

                        {
                            <div className="">
                                {
                                    slide.map((ele, index) => {
                                        return (<SwiperSlide key={index}>
                                                <div className="product-box product-box__slider">
                                                    <div className="product-topic1 mb-4">
                                                        <h4>{ele.Product_topic}</h4>
                                                    </div>
                                                    <div className="product-tag-head mt-3">
                                                        <h4>{ele.Product_head}</h4>
                                                    </div>
                                                    <div className="product-tag-paragraph mt-3">
                                                        <p>{ele.Product_paragraph}</p>
                                                    </div>
                                                    <div className="supply-learn-more">
                                                        <Link to={ele.link}>Learn More<i class="fa-solid fa-angle-right"></i></Link>
                                                    </div>
                                                </div>
                                        </SwiperSlide>
                                        )
                                    })
                                }
                            </div>
                        }
                    </Swiper>

                </div>
            </section>
        </>
    )
}
