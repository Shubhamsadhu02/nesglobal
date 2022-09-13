import React from 'react'
import {Link, NavLink, Route, useParams} from 'react-router-dom'
import {Navbar, Offcanvas, Nav, Button, Container, NavDropdown, Form, FormControl} from "react-bootstrap";
import '../Styles/Header.scss';


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
            link: '#contact',
            children: [
                {
                    title: 'Blog',
                    link: '#',
                },
                {
                    title: 'Help Center',
                    link: '#',
                },
                {
                    title: 'Glossary',
                    link: '#',
                },
            ]
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
                    title: 'Nescare',
                    link: '/nescare',
                },
                {
                    title: 'Contact Us',
                    link: '/contact-us',
                },
                {
                    title: 'Engineering',
                    link: '/engineering',
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
                        {showNav ?
                            <Nav className="justify-content-center flex-grow-1 pe-3" style={{color: isWhite ? "#E6E5E5" : '#0060BE'}}>
                                {
                                    menuItems.map(item => {
                                        if (item.children != undefined) {
                                            return <NavDropdown 
                                                title={item.title}
                                                id={`offcanvasNavbarDropdown-expand-md`}
                                            >
                                        
                                                 {
                                                    item.children.map(dropdown =>                                                   
                                                        <Link className={"dropdown-item"}
                                                            to={item.link + dropdown.link}>{dropdown.title}</Link>
                                            
                                                    )
                                                 }
                                                

                                            </NavDropdown>
                                        } else {
                                            return <Link to={item.link} className="nav-link">{item.title}</Link>
                                        }

                                    })
                                }
                            </Nav> :""}
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
                                <div className="d-flex justify-content-end flex-grow-1 search-nav">
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
}