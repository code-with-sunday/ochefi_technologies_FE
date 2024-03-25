import * as React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


export const Contact = () => {
    return (
        <>
            <Header />
            {/* Contact Form Area */}
            <div className="contact-form-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Let's Send Us a Message Below</h2>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-4">
                            <div className="contact-info mr-20">
                                <span>Contact Info</span>
                                <h2>Connect With Us</h2>
                                <p>We are delighted to hear from you </p>
                                <ul>
                                    <li>
                                        <div className="content">
                                            <i className="bx bx-phone-call" />
                                            <h3>Phone Number</h3>
                                            <a href="tel:+1(212)-255-5511">+234 (816) 903-6052</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <i className="bx bxs-map" />
                                            <h3>Address</h3>
                                            <span>Workstation Maryland Mall, MaryLand Lagos State</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="content">
                                            <i className="bx bx-message" />
                                            <h3>Contact Info</h3>
                                            <a href="mailto:hello@techex.com">info@ochefitechnologies.site</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Your Name <span>*</span></label>
                                                <input type="text" name="name" id="name" className="form-control" required data-error="Please Enter Your Name" placeholder="Name" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Your Email <span>*</span></label>
                                                <input type="email" name="email" id="email" className="form-control" required data-error="Please Enter Your Email" placeholder="Email" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Phone Number <span>*</span></label>
                                                <input type="text" name="phone_number" id="phone_number" required data-error="Please Enter Your number" className="form-control" placeholder="Phone Number" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Your Subject <span>*</span></label>
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please Enter Your Subject" placeholder="Your Subject" />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Your Message <span>*</span></label>
                                                <textarea name="message" className="form-control" id="message" cols={30} rows={8} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                                                <div className="help-block with-errors" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12">
                                            <div className="agree-label">
                                                <input type="checkbox" id="chb1" />
                                                <label htmlFor="chb1">
                                                    Accept <a href="terms-condition.html">Terms &amp; Conditions</a> And <a href="privacy-policy.html">Privacy Policy.</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 text-center">
                                            <button type="submit" className="default-btn btn-bg-two border-radius-50">
                                                Send Message <i className="bx bx-chevron-right" />
                                            </button>
                                            <div id="msgSubmit" className="h3 text-center hidden" />
                                            <div className="clearfix" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact Form Area End */}

            <Footer />
        </>
    )
}