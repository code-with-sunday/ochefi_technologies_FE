import * as React from "react";

export const BlogArea = () => {
    return (
        <>
            {/* Blog Area */}
            <div className="blog-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sp-color2">Latest Blog</span>
                        <h2>Let’s Check Some Latest Blog</h2>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/blog-img1.jpg" alt="Blog Images" />
                                    </a>
                                    <div className="blog-tag">
                                        <h3>11</h3>
                                        <span>Dec</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="blog-1.html"><i className="bx bxs-user" /> By Admin</a>
                                        </li>
                                        <li>
                                            <a href="blog-1.html"><i className="bx bx-purchase-tag-alt" />Business</a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="blog-details.html">Product Idea Solution for New Generation</a>
                                    </h3>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                                    <a href="blog-details.html" className="read-btn">Read More <i className="bx bx-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/blog-img2.jpg" alt="Blog Images" />
                                    </a>
                                    <div className="blog-tag">
                                        <h3>14</h3>
                                        <span>Dec</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="blog-1.html"><i className="bx bxs-user" /> By Admin</a>
                                        </li>
                                        <li>
                                            <a href="blog-1.html"><i className="bx bx-purchase-tag-alt" />Invention</a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="blog-details.html">New Device Invention for Digital Platform</a>
                                    </h3>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                                    <a href="blog-details.html" className="read-btn">Read More <i className="bx bx-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="blog-card">
                                <div className="blog-img">
                                    <a href="blog-details.html">
                                        <img src="assets/images/blog/blog-img3.jpg" alt="Blog Images" />
                                    </a>
                                    <div className="blog-tag">
                                        <h3>17</h3>
                                        <span>Dec</span>
                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>
                                            <a href="blog-1.html"><i className="bx bxs-user" /> By Admin</a>
                                        </li>
                                        <li>
                                            <a href="blog-1.html"><i className="bx bx-purchase-tag-alt" />Achive</a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="blog-details.html">Business Strategy Make His Goal Acheive </a>
                                    </h3>
                                    <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum.</p>
                                    <a href="blog-details.html" className="read-btn">Read More <i className="bx bx-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Area End */}

        </>
    )
}