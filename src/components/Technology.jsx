import * as React from "react";

export const Technology = () => {
    return (
        <>

            <div>
                {/* Technology Area */}
                <section className="technology-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="sp-color1">Technology Index</span>
                            <h2>We Deliver Our Best Solution With The Goal of Trusting</h2>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-2 col-6">
                                <div className="technology-card">
                                    <i className="flaticon-android" />
                                    <h3>Android</h3>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="technology-card">
                                    <i className="flaticon-website" />
                                    <h3>Web</h3>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="technology-card">
                                    <i className="flaticon-apple" />
                                    <h3>ios</h3>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="technology-card">
                                    <i className="flaticon-television" />
                                    <h3>TV</h3>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="technology-card">
                                    <i className="flaticon-smartwatch" />
                                    <h3>Watch </h3>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6">
                                <div className="technology-card">
                                    <i className="flaticon-cyber-security" />
                                    <h3>IoT</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Technology Area End */}
                {/* Brand Area */}
                <div className="brand-area ptb-100">
                    <div className="container">
                        <div className="brand-slider owl-carousel owl-theme">
                            <div className="brand-item">
                                <img src="assets/images/brand-logo/brand-logo1.png" className="brand-logo-one" alt="Images" />
                                <img src="assets/images/brand-logo/brand-style1.png" className="brand-logo-two" alt="Images" />
                            </div>
                            <div className="brand-item">
                                <img src="assets/images/brand-logo/brand-logo2.png" className="brand-logo-one" alt="Images" />
                                <img src="assets/images/brand-logo/brand-style2.png" className="brand-logo-two" alt="Images" />
                            </div>
                            <div className="brand-item">
                                <img src="assets/images/brand-logo/brand-logo3.png" className="brand-logo-one" alt="Images" />
                                <img src="assets/images/brand-logo/brand-style3.png" className="brand-logo-two" alt="Images" />
                            </div>
                            <div className="brand-item">
                                <img src="assets/images/brand-logo/brand-logo4.png" className="brand-logo-one" alt="Images" />
                                <img src="assets/images/brand-logo/brand-style4.png" className="brand-logo-two" alt="Images" />
                            </div>
                            <div className="brand-item">
                                <img src="assets/images/brand-logo/brand-logo5.png" className="brand-logo-one" alt="Images" />
                                <img src="assets/images/brand-logo/brand-style5.png" className="brand-logo-two" alt="Images" />
                            </div>
                            <div className="brand-item">
                                <img src="assets/images/brand-logo/brand-logo3.png" className="brand-logo-one" alt="Images" />
                                <img src="assets/images/brand-logo/brand-style3.png" className="brand-logo-two" alt="Images" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Brand Area End */}
            </div>

        </>
    )
}