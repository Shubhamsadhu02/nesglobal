import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Partials/Footer'
import Header from '../Partials/Header'
import Signup from '../Partials/Signup'
import Carosoul from './Carosoul'
import NavigateTabs from './NavigateTabs'

export default function Home() {
  return (
    <>
    <Header />

    <section style={{ backgroundImage: "url(/images/Home/home.png)", backgroundSize: "cover", opacity: "5", backgroundPosition: "center" }}>
        <div className="container">
            <div className="top-section  d-flex align-items-center">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="home-details">
                            <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">NES Platform: The New Trade Imperative</h1>
                            <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">NES is created on the pledge to transition transportation to the Digital sphere, giving the community of
                                exporters &amp; importers the benefit of speed, security, collaboration, efficiency and control thereby ushering in prosperity to the community.
                            </p>
                        </div>
                        <div className="home-bottom d-flex align-items-center mt-5">
                            <div className="talk-to-expert">
                               <Link to={"/company/contact-us"}> <button type='submit'>Talk to an Expert</button></Link>
                            </div>
                            <div className="watch-video" style={{marginLeft: "60px"}}>
                                <Link to='#' onClick={toggle}><img src='images/Home/playicon.png' alt='' height={48} width={48} /></Link>
                                <Link to='#' onClick={toggle}>Introduction</Link>
                                
                                {/* <a href='https://sam02-kumar02.wistia.com/medias/3n7gwp1ut0?wtime=0s' target={"_blank"}><img src='images/Home/playicon.png' height={48} width={48} /></a>
                                <a href='https://sam02-kumar02.wistia.com/medias/3n7gwp1ut0?wtime=0s' target={"_blank"}>Introduction</a> */}
                            </div>
                            
                            <div className="video-final">
                                {/* <iframe src='https://player.vimeo.com/video/761381603?h=5675f1efb6&title=0&byline=0&portrait=0' controls={true}></iframe> */}
                                <video controls={true} > 
                                    <source src='/videoes/final-video.mp4' type='video/mp4'></source>
                                    <source src='/videoes/final-video.webm' type='video/webm'></source>
                                </video>
                                <img src='/images/close.png' className='close'  alt='' onClick={pauseVideo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


{/* key to sucess */}
    <section className="mt-15 mb-15">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center">
                    <div className="animation">
                        <div className="keySucess-head">
                            <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">Key to Success</h3>
                        </div>
                        <div className="keySucess-paragraph">
                            <p data-aos="fade-up" data-aos-easing="linear">Supply Chain plays a vital role in delivering economic prosperity. A strong logistics service provider ensures his customer is empowered to operate on a seamless ecosystem through which he can export his products or import raw materials, use data from his historical transactions to make informed decisions and build sustainable relationships. Partner with Nes Global to get full control of your supply chain.</p>
                        </div> 
                    </div>
                </div>
                <div className="col-lg-5 p-5">
                    <div className="animation">
                        <img src='images/Home/keySucess.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    </section>

{/* Supply chain */}


<section className="mt-15 mb-15">
    <div className="container">
        <div className="supply-chain__head text-center mb-10">
            <h3 data-aos="fade-up" data-aos-easing="linear">Deep Diving Into Your Supply Chain</h3>
        </div>
        <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
                <video src='images/Home/NES_Platform_V4_high.mp4' type="video/mp4" autoPlay loop muted height={396} width={396}></video>
                {/* <img src='images/Home/NES _Platform_V4_high.gif' height={396} width={396} /> */}
            </div>
            <div className="col-lg-6 p-5 d-flex flex-column justify-content-center">
                
                    <Carosoul/>
                
            </div>
        </div>
    </div>
</section>


<section className="mt-15 mb-15">
        <div className="container">            
            <div className="two-column__section">
                <div className="row">
                    <div className="col-sm-12 col-md-5 col-lg-5 d-flex flex-column justify-content-center">
                        <div className="animation">
                            <img src='images/Home/partnering.png' alt='' />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7 col-lg-7">
                        <div className="keySucess-container">
                            <div className="keySucess-head">
                                <h3 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear" style={{width: "430px"}}>Why is Partnering with NES the new Imperative:</h3>
                            </div>
                            <div className="keySucess-paragraph">
                                <p data-aos="fade-up" data-aos-easing="linear">International trade is crucial for any economy and it's no different in India. Executing trade in a fragmented ecosystem puts significant pressure on the exporter or the importer in India. There is an impact of over 14% on the cost of the product manufactured in India due to a fragmented ecosystem. Nes Global is endeavoring to address these factors by the introduction of its digitized platform with an ecosystem which would empower the industry to execute imports and exports seamlessly and more importantly in a compliant manner. All the digital enhancements lead to facilitating global trade via the system and this would contribute to end-to-end visibility and lowering indirect costs and therefore improving landed costs making Indian products more competitive internationally.</p>
                            </div>
                        </div>                        
                    </div>
                </div>  
            </div>
        </div>
    </section>

<NavigateTabs/>

{/* nes community */}

    <section className="nes-community mt-15" style={{backgroundColor: "#10243E", padding: "96px 185px"}}>
        <div className="container d-flex justify-content-center text-center">
            <div>
                <div className="nes-community__header">
                    <h3 style={{color: "#FFFFFF"}}>Join Nes to be a part of <br/> Happy’NES Community</h3>
                </div>
                <div className="nes-community__paragrapgh pt-4">
                    <p style={{color: "#FFFFFF"}}>The organization is not built and driven on commercial short-term objectives but on long-term goals of
                        making it a strong force of good to not only deliver a social and environmental impact but also to measure carbon
                        emissions, reduce and also offset shipping impacts is a sure and sustainable way to the future of logistics
                        and transportation.</p>
                </div>
            </div>
        </div>
    </section>

    <Signup />

    <Footer />
    </>
  )
}

function toggle(){
    var videofinal=document.querySelector(".video-final");
    var video=document.querySelector("video");
    // const close = document.querySelector('.close')
    // var video=document.getElementById("pauseVideo");

    videofinal.classList.toggle("active");
    video.play();
    video.currentTime=0;

}

function pauseVideo(){
    var video=document.querySelector("video");
    video.pause();

    var videofinal=document.querySelector(".video-final");
    videofinal.classList.toggle("active");
}