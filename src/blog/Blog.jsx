import { Link } from "react-router-dom";
import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Blog = () => {
    return (
        <>
            <Header />
            <div>
                {/* Inner Banner */}
                <div className="inner-banner">
                    <div className="container">
                        <div className="inner-title text-center">
                            <h3>Case Study Details</h3>
                            <ul>
                                <li>
                                    <Link to={``} > Home </Link>
                                </li>
                                <li>
                                    <i className="bx bx-chevrons-right" />
                                </li>
                                <li>Case Study Details</li>
                            </ul>
                        </div>
                    </div>
                    <div className="inner-shape">
                        <img src="./techex/assets/images/shape/inner-shape.png" alt="Images" />
                    </div>
                </div>
                {/* Inner Banner End */}
                {/* Case Details Area */}
                <div className="case-details-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="case-article">
                                    <div className="case-article-img">
                                        <img src="./techex/assets/images/case-study/webimage2.jpg" alt="Images" />
                                    </div>
                                    <div className="case-article-content">
                                        <h2>Embracing Mobile Apps: Driving Business Success in 2024</h2>
                                        <p>
                                        In today's digitally driven world, mobile applications have become indispensable tools for businesses seeking to thrive in a competitive landscape. 
                                        As we delve deeper into 2024, the significance of mobile apps in driving business success has only intensified. 
                                        Let's explore how businesses are leveraging mobile apps to their advantage and reaping the rewards of enhanced customer engagement, 
                                        streamlined operations, and sustained growth.
                                        </p>
                                        <h2>What Benefit You Will Get</h2>
                                        <p>
                                            
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul className="case-article-list case-article-rs case-article-ls">
                                                    <li><i className="bx bxs-check-circle" />Enhancing Customer Engagement</li>
                                                    <li><i className="bx bxs-check-circle" />Optimizing Accessibility</li>
                                                    <li><i className="bx bxs-check-circle" />Elevating Brand Visibility</li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <ul className="case-article-list case-article-ls">
                                                    <li><i className="bx bxs-check-circle" />Streamlining Operations</li>
                                                    <li><i className="bx bxs-check-circle" />Easy to Customer Services</li>
                                                    <li><i className="bx bxs-check-circle" />Gaining Competitive Advantage</li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                 
                                    <img src="./techex/assets/images/case-study/webimage3.jpg" alt="Images" />

                                    <div className="case-play-btn">
                                    
                                    <a href="https://www.youtube.com/watch?v=bphM0fM7dWo" className="case-play popup-btn"><i className="bx bx-play" /></a>
                        

                                    </div>
                                    <p>
                                        In conclusion, the role of mobile applications in driving business success in 2024 cannot be overstated. 
                                        From enhancing customer engagement and brand visibility to streamlining operations and gaining a competitive edge, 
                                        mobile apps have become indispensable assets for businesses of all sizes and industries. As we navigate the ever-evolving digital landscape, 
                                        embracing mobile technology is not just a strategic choice but a necessity for businesses aiming to thrive and succeed in the modern 
                                        marketplace.
                                        </p>

                                    
                                    
                                    
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="side-bar-area">
                                    
                                    <div className="side-bar-widget">
                                        <h3 className="title">Archive</h3>
                                        <div className="side-bar-categories">
                                            <ul>
                                                <li>
                                                    <div className="line-circle" />
                                                    <a href="" target="_blank">Design<span>[70]</span></a>
                                                </li>
                                                <li>
                                                    <div className="line-circle" />
                                                    <a href="" target="_blank">Business<span>[24]</span></a>
                                                </li>
                                                <li>
                                                    <div className="line-circle" />
                                                    <a href="" target="_blank">Development<span>[08]</span></a>
                                                </li>
                                                <li>
                                                    <div className="line-circle" />
                                                    <a href="" target="_blank">Technology <span>[17]</span></a>
                                                </li>
                                                <li>
                                                    <div className="line-circle" />
                                                    <a href="" target="_blank">Startup <span>[20]</span></a>
                                                </li>
                                                <li>
                                                    <div className="line-circle" />
                                                    <a href="" target="_blank">Marketing Growth <span>[13]</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Case Details Area End */}
            </div>

            <Footer/>

        </>
    )
}