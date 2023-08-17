import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Offcanvas, Nav, Container, NavDropdown } from "react-bootstrap";
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
                    "menu-item-type": "header-list",
                    header: "Logistics Management",
                    list_items: [
                        {
                            title: 'NES Platform',
                            link: '/nes-platform',
                        },
                        {
                            title: 'Customs',
                            link: '/customs',
                        },
                        {
                            title: 'Visiblity',
                            link: '/visibility',
                        }
                    ]
                },
                {
                    "menu-item-type": "header-list",
                    header: "Transportation",
                    list_items: [
                        {
                            title: 'Air Freight',
                            link: '/air-freight',
                        },
                        {
                            title: 'Air Charters',
                            link: '/air-charters',
                        },
                        {
                            title: 'Ocean Freight',
                            link: '/ocean-freight',
                        }
                    ]
                },
                {
                    "menu-item-type": "header-list",
                    header: "Trade Management",
                    list_items: [
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
                        }
                    ]
                },
            ]
        },
        {
            title: 'Resources',
            link: '/resources',
            children: [
                {
                    "menu-item-type": "list",
                    list_items: [
                        {
                            title: 'Blog',
                            link: '/blog',
                        },
                        {
                            title: 'Help Center',
                            link: '/faq',
                        },
                        {
                            title: 'Glossary',
                            link: '/glossary',
                        },
                        {
                            title: 'Refund Policy',
                            link: '/refund-policy',
                        }
                    ]
                }
            ]
        },
        {
            title: 'Company',
            link: '/company',
            children: [
                {
                    "menu-item-type": "list",
                    list_items: [
                        {
                            title: 'About Us',
                            link: '/about-us',
                        },
                        // {
                        //     title: 'Nescare',
                        //     link: 'http://www.nescare.in',
                        //     is_absolute: true,
                        // },
                        {
                            title: 'Contact Us',
                            link: '/contact-us',
                        }
                    ]
                }
            ]
        }
    ];
    return (
        <>
            <Navbar key='md' expand='md' variant={isWhite ? 'dark' : 'light'} style={{ background: isWhite ? '#10243E' : '#FFFFFF' }}>
                <Container>
                    <Navbar.Brand href="/"><img src={isWhite ? "/images/Home/logowhite1.png" : "/images/Home/logo.png"}
                        height={20} width={150} alt="Brand logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                        className="activewhite"
                    >
                        <Offcanvas.Header closeButton className='nav-close-btn'>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            {showNav ?
                                <Nav className="nav-bar justify-content-center flex-grow-1 align-items-center pe-3">
                                    {
                                        menuItems.map((item) => {
                                            if (item.children) {
                                                return <NavDropdown
                                                    title={item.title}
                                                    id={`offcanvasNavbarDropdown-expand-md`}
                                                >
                                                    <div className="nav-dropdown-box d-flex">

                                                        {
                                                            item.children.map((dropdown) => {
                                                                return getSubMenu(dropdown, item["link"])
                                                                /*var menuHeaders = Object.keys(dropdown);
                                                                if(menuHeaders.length == 1){
                                                                    return menuHeaders.map((mHead, index) => subMenu(dropdown, index))
                                                                }
                                                                else{
                                                                    return <Link to={dropdown.link} className="nav-link">{dropdown.title}</Link>
                                                                }*/
                                                            })
                                                        }
                                                    </div>

                                                </NavDropdown>
                                            }
                                            // else {
                                            //     return <Link to={item.link} className="nav-link">{item.title}</Link>
                                            // }

                                        })
                                    }
                                    <div className="nesacre-header">
                                        
                                            <Link to={'http://www.nescare.in'} target="__blank" style={{ color: isWhite ? "rgba(255,255,255,.55)" : "rgba(0,0,0,.55)" }}>Nescare
                                            <img src='/images/Home/Arrow - Right.svg' height={18} width={18}  alt='' style={{filter: isWhite ? "invert(1)" : "invert(0)"}}/></Link>
                                        
                                    </div>
                                </Nav> : ""}
                            {showNav ?
                                <div className="search-nav">
                                    <ul>
                                        <li>
                                            <Link to='#'><i class="fa-solid fa-search"
                                                style={{ color: isWhite ? "#E6E5E5" : '#0060BE' }}></i></Link>
                                        </li>
                                        <li>
                                            <Link to='https://uat.nesglobal.in/login' target="__blank"><button className={ !isWhite ? 'login--btn' : 'login--btn_white'} type='submit' >Login</button></Link>
                                        </li>
                                        {/* <li>                                            
                                            {isWhite ? <Link to='/signin'><button type='submit'>Sign in</button></Link>
                                                     : <Link to='#' onClick={toggle}><button type='submit'>Introduction</button></Link>}
                                        </li> */}
                                        <li>
                                        <Link to='#' onClick={toggle}><button type='submit' className={ !isWhite ? 'intro--btn' : 'intro--btn_white'}>Introduction</button></Link>
                                        </li>
                                    </ul>
                                    <div className="video-final">
                                        <video controls={true}> 
                                            <source src='/videoes/final-video.mp4' type='video/mp4'></source>
                                            <source src='/videoes/final-video.webm' type='video/webm'></source>
                                        </video>
                                        <img src='/images/close.png' className='close' alt='' onClick={pauseVideo} />
                                    </div>
                                </div>
                                :
                                <div className="d-flex justify-content-end flex-grow-1 search-nav">
                                    <ul>
                                        <li>
                                            <Link to='/company/carboncalculator'><button type='submit' className='carbon-cal__btn' >Carbon Calculator</button></Link>
                                        </li>
                                        <li>
                                            <Link to='/company/contact-us'><button type='submit' className='contact-btn'>Contact us</button></Link>
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

function getSubMenu(dropdown, parent_link) {
    if (dropdown["menu-item-type"] === "header-list") {
        return <div className='nav-dropdown-content'>
            <h6>{dropdown["header"]}</h6>
            <ul style={{ padding: '0px' }}>
                {
                    dropdown["list_items"].map(item => <li key={item.title}><Link to={parent_link + item.link} className="nav-list-name">{item.title}</Link></li>)
                }
            </ul>
        </div>
    } else {
        return <div className='nav-dropdown-content'>
            <ul style={{ padding: '0px' }}>
                {
                    dropdown["list_items"].map(item => {
                        if (!Object.hasOwn(item, 'is_absolute')) {
                            return <li key={item.title}><Link to={parent_link + item.link} className="nav-list-name">{item.title}</Link></li>
                        } else {
                            return <li key={item.title}><Link to={item.link} className="nav-list-name" target="_blank">{item.title}</Link></li>
                        }

                    })
                }
            </ul>
        </div>
    }
}

function toggle(){
    var videofinal=document.querySelector(".video-final");
    var video=document.querySelector("video");
    // const close = document.querySelector('.close')
    // var video=document.getElementById("pauseVideo");

    videofinal.classList.toggle("active");
    video.play();
    video.currentTime=0;

    // close.addEventListener('click', () => {
    //     video.forEach(i => {
    //        const source = i.src
    //        i.src = ''
    //        i.src = source
    //     })
    // })
}

function pauseVideo(){
    var video=document.querySelector("video");
    video.pause();

    var videofinal=document.querySelector(".video-final");
    videofinal.classList.toggle("active");
}