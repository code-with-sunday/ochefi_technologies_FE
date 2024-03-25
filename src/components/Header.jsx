import { Link } from "react-router-dom";

// import React from "react";
import React, { useEffect, useState } from 'react';

export const Header = () => {

    useEffect(() => {
        if (typeof window !== 'undefined' && typeof window.$ === 'undefined') {
            // jQuery is not available, load it dynamically
            const script = document.createElement('script');
            script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
            script.async = true;
            script.onload = () => {
                // Now that jQuery is loaded, you can use it
                initScripts();
            };
            document.body.appendChild(script);
        } else {
            // jQuery is already available
            initScripts();
        }
    }, []);

    const initScripts = () => {
        // Your jQuery code here
        $('.mean-menu').meanmenu({
            meanScreenWidth: '991'
        });
        // Other jQuery code...

        // Navbar Area
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 150) {
                $('.navbar-area').addClass("sticky-nav");
            } else {
                $('.navbar-area').removeClass("sticky-nav");
            }
        });

        // Search Overlay JS
        $(".nav-side .search-box i").on("click", function () {
            $(".search-overlay").toggleClass("search-overlay-active");
        });
        $(".search-close").on("click", function () {
            $(".search-overlay").removeClass("search-overlay-active");
        });

        // Others Option For Responsive JS
        $(".side-nav-responsive .dot-menu").on("click", function () {
            $(".side-nav-responsive .container-max .container").toggleClass("active");
        });

        // Banner Slider and other Owl Carousel configurations...

        // Nice Select JS
        $('select').niceSelect();

        // FAQ Accordion JS
        $('.accordion').find('.accordion-title').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().slideToggle('fast');
            $('.accordion-content').not($(this).next()).slideUp('fast');
            $('.accordion-title').not($(this)).removeClass('active');
        });

        // Skill-bar JS and other functionalities...

        // WOW JS initialization
        new WOW().init();

        // Back To Top functionality...

        // Count Time JS and other functionalities...

        // AJAX MailChimp and other form functionalities...
        const slider = document.getElementById('slider');
        if (slider) {
            if (localStorage.getItem('theme') === 'theme-dark') {
                setTheme('theme-dark');
                slider.checked = false;
            } else {
                setTheme('theme-light');
                slider.checked = true;
            }
        }
    };// Empty dependency array to mimic componentDidMount behavior


    return <>
        <div>
            {/* Required Meta Tags */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* Bootstrap CSS */}
            <link rel="stylesheet" href="./techex/assets/css/bootstrap.min.css" />
            {/* Animate Min CSS */}
            <link rel="stylesheet" href="./techex/assets/css/animate.min.css" />
            {/* Flaticon CSS */}
            <link rel="stylesheet" href="./techex/assets/fonts/flaticon.css" />
            {/* Boxicons CSS */}
            <link rel="stylesheet" href="./techex/assets/css/boxicons.min.css" />
            {/* Owl Carousel Min CSS */}
            <link rel="stylesheet" href="./techex/assets/css/owl.carousel.min.css" />
            <link rel="stylesheet" href="./techex/assets/css/owl.theme.default.min.css" />
            {/* Magnific Popup CSS */}
            <link rel="stylesheet" href="./techex/assets/css/magnific-popup.css" />
            {/* Nice Select CSS */}
            <link rel="stylesheet" href="./techex/assets/css/nice-select.min.css" />
            {/* Meanmenu CSS */}
            <link rel="stylesheet" href="./techex/assets/css/meanmenu.css" />
            {/* Style CSS */}
            <link rel="stylesheet" href="./techex/assets/css/style.css" />
            {/* Responsive CSS */}
            <link rel="stylesheet" href="./techex/assets/css/responsive.css" />
            {/* Theme Dark CSS */}
            <link rel="stylesheet" href="./techex/assets/css/theme-dark.css" />
            {/* Favicon */}
            <link rel="icon" type="image/png" href="./techex/assets/images/favicon.png" />
            <title>Techex - Technology &amp; IT Services HTML Template</title>
        </div>

        <div>
            {/* Pre Loader */}
            {/* <div className="preloader">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="spinner" />
                    </div>
                </div>
            </div> */}
            {/* End Pre Loader */}
            {/* Top Header Start */}
            <header className="top-header top-header-bg">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 col-md-6">
                            <div className="top-head-left">
                                <div className="top-contact">
                                    <h3>Call : <a href="tel:+1(212)-255-5511">+234 (816) 903-6052</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <div className="top-header-right">
                                <div className="top-header-social">
                                    <ul>

                                        <li>
                                            <a href="https://twitter.com/?lang=en" target="_blank">
                                                <i className="bx bxl-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/ochefi-technologies-a876652b6/" target="_blank">
                                                <i className="bx bxl-linkedin-square" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/ochefi_technologies/?igsh=MTh3eW9yZGs1eHg0MA%3D%3D" target="_blank">
                                                <i className="bx bxl-instagram" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="language-list">
                                    <select className="language-list-item">
                                        <option>English</option>
                                        <option>العربيّة</option>
                                        <option>Deutsch</option>
                                        <option>Português</option>
                                        <option>简体中文</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Top Header End */}
        </div>

        {/* Start Navbar Area */}
        <div className="navbar-area">
            {/* Menu For Mobile Device */}
            <div className="mobile-nav">
                <Link to={``} className="logo">
                    <img src="./techex/assets/images/logos/main_logo_copy.png" className="logo-one" alt="Logo" />

                </Link>
            </div>
            {/* Menu For Desktop Device */}
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light ">
                        <Link to={`/`} className="logo">
                            <img src="./techex/assets/images/logos/main_logo_copy.png" className="logo-one" alt="Logo" />

                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav m-auto">
                                <li className="nav-item">
                                    <Link to={`/`} className="nav-link active">
                                        Home
                                        <i className="bx bx-caret-down" />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to={`/`} className="nav-link active">
                                                Home
                                            </Link>
                                        </li>


                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/about`} className="nav-link">
                                        About
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to={`/about`} className="nav-link">
                                                About
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link to={`/pages`} className="nav-link">
                                        Pages
                                        <i className="bx bx-caret-down" />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        
                                       
                                        <li className="nav-item">
                                            <Link to={`/faq`} className="nav-link">
                                                FAQ
                                            </Link>
                                        </li>


                                        <li className="nav-item">
                                            <Link to={`/terms&condition`} className="nav-link">
                                                Terms &amp; Conditions
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={`/privacy&policy`} className="nav-link">
                                                Privacy Policy
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/service`} className="nav-link">
                                        Services
                                        <i className="bx bx-caret-down" />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to={`/service`} className="nav-link">
                                                Services
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/blog`} className="nav-link">
                                        Blog
                                        <i className="bx bx-caret-down" />
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to={`/blog`} className="nav-link">
                                                Blog
                                            </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/contact`} className="nav-link">
                                        Contact
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link to={`/contact`} className="nav-link">
                                                Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="nav-side d-display">
                                <div className="nav-side-item">
                                    <div className="search-box">
                                        <i className="bx bx-search" />
                                    </div>
                                </div>
                                <div className="nav-side-item">
                                    <div className="get-btn">
                                        <a href="contact.html" className="default-btn btn-bg-two border-radius-50">Get A Quote <i className="bx bx-chevron-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="side-nav-responsive">
                <div className="container-max">
                    <div className="dot-menu">
                        <div className="circle-inner">
                            <div className="in-circle circle-one" />
                            <div className="in-circle circle-two" />
                            <div className="in-circle circle-three" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="side-nav-inner">
                            <div className="side-nav justify-content-center align-items-center">
                                <div className="side-nav-item nav-side">
                                    <div className="search-box">
                                        <i className="bx bx-search" />
                                    </div>
                                    <div className="get-btn">
                                        <a href="contact.html" className="default-btn btn-bg-two border-radius-50">Get A Quote <i className="bx bx-chevron-right" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* End Navbar Area */}

        <div className="search-overlay">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="search-layer" />
                    <div className="search-layer" />
                    <div className="search-layer" />
                    <div className="search-close">
                        <span className="search-close-line" />
                        <span className="search-close-line" />
                    </div>
                    <div className="search-form">
                        <form>
                            <input type="text" className="input-search" placeholder="Search here..." />
                            <button type="submit"><i className="bx bx-search" /></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
}
