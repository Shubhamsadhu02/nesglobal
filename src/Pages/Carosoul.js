import "../Styles/global.css";
import { Link } from 'react-router-dom'


import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";

import "swiper/css";
// import "swiper/css/pagination";

// Import Swiper styles
import 'swiper/css';

export default () => {

    const slide = [
        {
            "description": "After your Order is ready for dispatch, send your pickup request to the Nes online and leave it to the NES ops team to execute",
            "link": "/product/nes-platform"
        },
        {
            "description": "Visibility is the catalyst to seamless trade. Shipment and data visibility is critical for control of the supply chain.",
            "link": "/product/nes-platform"
        },
        {
            "description": "Nes platform helps you explore the most feasible mode through a selection of top shipping lines and airlines in a matter of seconds.",
            "link": "/product/nes-platform"
        },
        {
            "description": "Aligning to regulations is critical and the NES team helps you though their experience as well as well-designed resources",
            "link": "/product/nes-platform"
        },
    ]

    return (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
        //   pagination={{
        //     clickable: true,}}
          modules={[Autoplay]} 
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
        >
          {
            slide.map((ele, index) => {
              return <SwiperSlide key={index}>
                <div className="supply-box p-5">
                    <div className="supply-paragrapgh">
                        <p>{ele.description}</p>
                    </div>
                    <div className="supply-learn-more">
                        <Link to={ele.link}>Learn More<i class="fa-solid fa-angle-right"></i></Link>
                    </div>
                </div>
              </SwiperSlide>
            })
          }
        </Swiper>
      );
};