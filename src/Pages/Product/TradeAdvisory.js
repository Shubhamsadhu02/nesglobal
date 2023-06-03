import React from 'react'
import { Link } from 'react-router-dom'

import Footer from '../../Partials/Footer'
import Header from '../../Partials/Header'
import ProductSlider from '../ProductSlider'

export default function TradeAdvisory() {
  return (
    <>
    <Header/>

    <section style={{ background: "url('../images/product/trade_advisory/tradeadvisoryhome.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
        <div className="top-section d-flex align-items-center mb-5">
            <div className="row">
                <div className="col-lg-7">
                    <div className="product-topic">
                        <h4 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">Trade Advisory</h4>
                    </div>
                    <div className="product-heading mt-4">
                        <h1 data-aos="fade-up" data-aos-duration="60" data-aos-easing="linear">No Secret Code... Level Up Your Supply Chain</h1>
                    </div>
                    <div className="product-paragraph mt-4">
                        <p data-aos="fade-up" data-aos-duration="40" data-aos-easing="linear">Your	product	HARMONIZED	CODE,	determines	your	compliance	and	
                            admissibility	and	which	supply	chain	advantages	you	can	capture.	See	
                            how	accurate	classifications	can	contain	your	bottom	lines	and	unlock	a	
                            larger	strategy	for	your	organization.</p>
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
        <div className="container mt-15">
            <div className="row" style={{rowGap: "25px"}}>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='../images/product/trade_advisory/setup.png' alt='' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Set	Up	Your	Records	in	Record	Time</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>NES	can	classify	up	to	500	new	SKUs	in	three	days;	up	to	2,000	in	a	week	or	20,000	in	a month.	Codes	then	follow	goods	in	the	NES Global	Platform.	Ship	with	someone	else?	We’ll	still	help,	just	as	fast.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='../images/product/trade_advisory/get.png' alt='' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Get	a	Close	Read	on	Your	Product	Library</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>NES	customs	brokers	can	assess	your	product	catalogs	and	recommend	the	codes	that	are most	favorable	and	still	100%	compliant.	Fix	risks,	now	or	from	history,	amend	submissions,	or	reduce	duty	exposure</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="product-tag">
                        <img src='../images/product/trade_advisory/decode.png' alt='' />
                    </div>
                    <div className="product-tag-head mt-3">
                        <h4>Decode	the	Rules	as	Codes	Change</h4>
                    </div>
                    <div className="product-tag-paragraph mt-3">
                        <p>Rules,	regs,	and	product	specs	can	change.	When	they	do,	so	could	your	product	codes.	And	your	compliance	programs.	Secure	all	the	trade	benefits	you	can	with	astute	solutions	for	change.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container mt-15 mb-15">
          <div className="product-item mt-15">
              <div className="row">
                <div className="col-lg-6">
                    <div className="product-img">
                        <img src='../images/product/trade_advisory/fewdigits.png' alt='' />
                    </div>
                </div>
                <div className="col-lg-6 d-flex flex-column justify-content-center">
                    <div className="product-container">
                        <div className="product-topic1 mb-4">
                            <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">NES	PLATFORM</h4>
                        </div>
                        <div className="product-heading1">
                            <h3 data-aos="fade-up" data-aos-easing="linear" style={{color: "#403F3E"}}>A	Few	Digits	Can	Make	a	Big	Difference</h3>
                        </div>
                        <div className="product-paragraph">
                            <p data-aos="fade-up" data-aos-easing="linear" style={{color: "#737171"}}>The	HTS	codes	in	your	NES	Product	Library	are	used	for	total	transactional	consistency.	Data	is	structured	to	advance	trade	strategy:	With	the	right	eyes	on	it,	your	six	to	ten-digit	codes	could	reveal	six-digit	or	higher	financial	opportunities.</p>
                        </div>
                        <div className="learn-more-btn mt-4">
                            <Link to={"/company/contact-us"}><button type='submit'>Talk To Us</button></Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="product-item mt-15">
              <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center order-md-1 order-2">
                    <div className="product-container">
                        <div className="product-topic1 mb-4">
                            <h4 data-aos="fade-up" data-aos-offset="150" data-aos-easing="linear">TARIFF	ENGINEERING</h4>
                        </div>
                        <div className="product-heading1">
                            <h3 data-aos="fade-up" data-aos-easing="linear" style={{color: "#403F3E"}}>Minor	Product	Changes	Major	Duty	Reductions</h3>
                        </div>
                        <div className="product-paragraph">
                            <p data-aos="fade-up" data-aos-easing="linear" style={{color: "#737171"}}>Should	that	pocket	move	down,	that	piece	of	glass	curve?	Tariff	engineering	is	the	genius	practice	of	modifying	products	to	satisfy	import	classifications	at	a	lower	duty	rate.	Tweak	a	little,	save	a	lot.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 order-md-2 order-1">
                    <div className="product-img">
                        <img src='../images/product/trade_advisory/minor.png' alt='' />
                    </div>
                </div>
            </div>
          </div>
        </div>
    </section>

    <ProductSlider/>

    <Footer />
    </>
  )
}
