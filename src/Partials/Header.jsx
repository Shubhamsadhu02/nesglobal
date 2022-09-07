import React from 'react'
import {Link, NavLink, Route, useParams} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Button, Container, NavDropdown, Form, FormControl} from "react-bootstrap";
import '../Styles/Header.scss';
import AboutUs from "../Pages/Company/AboutUs";
import Leadership from "../Pages/Company/Leadership";
import Engineering from "../Pages/Company/Engineering";
import ContactUs from "../Pages/Company/ContactUs";
import Nescare from "../Pages/Company/Nescare/Nescare";
import Services from "../Pages/Company/Nescare/Services";
import Inventory from "../Pages/Company/Nescare/Inventory";


export default function header(props) {
    const showNav = props.showNav ?? true;
    const isWhite = props.isWhite ?? false;
    const menuItems = [
        {
            title: 'Products',
            link: '/product',
            children: [
                {
                    title: 'Nes Platform',
                    link: '/nes-platform',
                },
                {
                    title: 'Customs',
                    link: '/customs',
                },
                {
                    title: 'Visiblity',
                    link: '/visibility',
                },
                {
                    title: 'Air Freight',
                    link: '/air-freight',
                },
                {
                    title: 'Air Charters',
                    link: '/project-air-and-ocean-charters',
                },
                {
                    title: 'Ocean Freight',
                    link: '/ocean-freight',
                },
                {
                    title: 'Trade Finance',
                    link: '/trade-finance',
                },
                {
                    title: 'Product Classifications',
                    link: '/product-classification',
                },
                {
                    title: 'Cargo Insurance',
                    link: '/cargo-insurance',
                },
                {
                    title: 'Trade Advisory',
                    link: '/trade-advisory',
                },
                {
                    title: 'Duty Drawbacks',
                    link: '/duty-drawbacks',
                },
            ]
        },
        {
            title: 'Resources',
            link: '#contact'
        },
        {
            title: 'Company',
            link: '/company',
            children: [
                {
                    title: 'About Us',
                    link: '/about-us',
                },
                {
                    title: 'Engineering',
                    link: '/engineering',
                },
                {
                    title: 'Contact Us',
                    link: '/contact-us',
                },
                {
                    title: 'Nescare',
                    link: '/nescare',
                },
                {
                    title: 'Reach Carbon',
                    link: '/reach-carbon',
                },
                {
                    title: 'Services',
                    link: '/services',
                },
                {
                    title: 'Inventory',
                    link: '/inventory',
                },
                {
                    title: 'Excess Inventory',
                    link: '/excess-inventory',
                }
            ]
        },

    ];

    return (
        <>
            <Navbar key='md' expand='md' style={{background: isWhite ? '#10243E' : '#FFFFFF'}}>
                <Container>
                    <Navbar.Brand href="/"><img src={isWhite ? "/images/Home/logowhite1.png" : "/images/Home/logo.png"}
                                                height={20} width={150}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} style={{background: isWhite ? "white": "none"}} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-center flex-grow-1 pe-3" style={{color: isWhite ? "#E6E5E5" : '#0060BE'}}>
                                {
                                    menuItems.map(item => {
                                        if (item.children != undefined) {
                                            return <NavDropdown
                                                title={item.title}
                                                id={`offcanvasNavbarDropdown-expand-md`}
                                            >
                                                {
                                                    item.children.map(dropdown => <Link className={"dropdown-item"}
                                                                                        to={item.link + dropdown.link}>{dropdown.title}</Link>
                                                    )
                                                }

                                            </NavDropdown>
                                        } else {
                                            return <Link to={item.link} className="nav-link">{item.title}</Link>
                                        }

                                    })
                                }
                            </Nav>
                            {showNav ?
                                <div className="search-nav">
                                    <ul>
                                        <li>
                                            <a href='#'><i class="far fa-search"
                                                           style={{color: isWhite ? "#E6E5E5" : '#0060BE'}}></i></a>
                                        </li>
                                        <li>
                                            <button type='submit'>Introduction</button>
                                        </li>
                                    </ul>
                                </div>
                                : 
                                <div className="search-nav">
                                    <ul>
                                        <li>
                                            <a href='#'><button type='submit' className='carbon-cal__btn' >Carbon Calculator</button></a>
                                        </li>
                                        <li>
                                            <a href='#'><button type='submit' className='contact-btn'>Contact us</button></a>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
    // return (
    //   <>
    //   <nav style={{background: isWhite?'#FFFFFF':'#10243E'}}>
    //       <div className="container">
    //           <div className="navbar">
    //               <div className="logo">
    //                   <Link to={"/"}><img src={isWhite?"/images/Home/logowhite1.png":"/images/Home/logo.png"} height={20} width={150} /></Link>
    //               </div>
    //
    //               {showNav?
    //                   <div className="menu text-white">
    //                       <ul className="menu-list">
    //                           <li>
    //                               <div className="dropdown">
    //                                   <NavLink to="/" className="dropbtn">Products<i class="fal fa-angle-down"></i>
    //                                   </NavLink>
    //                                   <div className='dropdown-content'>
    //                                       <a href='/Product/Nesplatform'>Nes Platform</a>
    //                                       <a href='/Product/Visibility'>Visiblity</a>
    //                                       <a href='/Product/Customs'>Customs</a>
    //                                       <a href='/Product/AirFreight'>Air Freight</a>
    //                                       <a href='/Product/OceanFreight'>Ocean Freight</a>
    //                                       <a href='/Product/TradeFinance'>Trade Finance</a>
    //                                   </div>
    //                               </div>
    //
    //
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Use Cases<i class="fal fa-angle-down"></i>
    //                                   {/* <ul className='sub-menu'>
    //                                       <li>Nes Platform</li>
    //                                       <li>Nes Platform</li>
    //                                       <li>Nes Platform</li>
    //                                   </ul> */}
    //                               </NavLink>
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Developers<i class="fal fa-angle-down"></i></NavLink>
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Resources<i class="fal fa-angle-down"></i></NavLink>
    //                           </li>
    //                           <li>
    //                               <NavLink to="/" >Company<i class="fal fa-angle-down"></i></NavLink>
    //                           </li>
    //                       </ul>
    //                   </div>
    //               :""}
    //
    //               {showNav?
    //                   <div className="search-nav">
    //                       <ul>
    //                           <li>
    //                               <a href='#'><i class="far fa-search" style={{color: isWhite?"#E6E5E5":'#0060BE'}}></i></a>
    //                           </li>
    //                           <li>
    //                               <button type='submit'>Get bbb Started</button>
    //                           </li>
    //                       </ul>
    //                   </div>
    //               :""}
    //           </div>
    //       </div>
    //   </nav>
    //   </>
    // )
}
