import * as React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            {/* Footer Area End */}
            <footer className="footer-area footer-bg">
                <div className="container">
                    <div className="footer-top pt-100 pb-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link to={``}>
                                            <img src="./techex/assets/images/logos/main_logo_copy.png" alt="Images" />
                                            <h3>OCHEFI TECHNOLOGIES</h3>
                                        </Link>
                                    </div>
                                    <p>
                                    An ICT and Digital Service Company. We don’t just serve, we provide services that will put smile on our customers’ faces. Web and Mobile Applications, CCTV installations and Access Control . Training and Consultancy                                    </p>
                                    <div className="footer-call-content">
                                        <h3>Talk to Our Support</h3>
                                        <span><a href="tel:+1002-123-4567">+234 816-903-6052</a></span>
                                        <i className="bx bx-headphone" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-sm-6">
                                <div className="footer-widget pl-2">
                                    <h3>Services</h3>
                                    <ul className="footer-list">
                                        <li>
                                            <p target="_blank">
                                                
                                                Web Dedevlopement
                                            </p>
                                        </li>
                                        <li>
                                            <p target="_blank">
                                                
                                                Mobile Developement
                                            </p>
                                        </li>
                                        <li>
                                            <p target="_blank">
                                                
                                                CCTV Installation
                                            </p>
                                        </li>
                                        <li>
                                            <p target="_blank">
                                                
                                               Door Window Access Control
                                            </p>
                                        </li>
                                        <li>
                                            <p target="_blank">
                                                
                                                Data Analysis 
                                            </p>
                                        </li>
                                
                                        <li>
                                            <p target="_blank">
                                                
                                                IT Consultancy
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget pl-5">
                                    <h3>Our Blog</h3>
                                    
                                      
                                        <Link to={`/blog`} > Title </Link>
                                            <div className="content">
                                                <p>Embracing Mobile Apps: Driving Business Success in 2024</p>
                                                <p>04 March 2024</p>
                                            </div>
                                        
                                        
                                    
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6">
                                <div className="footer-widget">
                                    <h3>Send Us A Mesagee Today</h3>
                                    <p>We are delighted to to hear from you today...</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right-area">
                        <div className="copy-right-text">
                            <p>
                                Copyright ©  Ochefi-Technologies. 
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Area End */}

        </>
    )
}