import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import * as React from "react";

export const Faq = () => {
    return (
        <>
            <Header />
            {/* FAQ Area */}
            <div className="faq-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Frequently Asked Questions</h2>
                        <p className="margin-auto">We are the agency who always gives you a priority on the free of question and you can easily make a question on the bunch.</p>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="faq-accordion">
                                    <ul className="accordion">
                                        <li className="accordion-item">
                                            <a className="accordion-title" href="javascript:void(0)">
                                                
                                                What services do you offer for web development?
                                            </a>
                                           
                                                <p>
                                                    At Ochefi Technologies, we specialize in creating custom web solutions tailored to your needs. 
                                                    Our services include front-end and back-end development, e-commerce solutions, content management systems (CMS), 
                                                    and website maintenance.
                                                </p>
                                            
                                        </li>

                                        <li className="accordion-item">
                                            <a className="accordion-title" href="javascript:void(0)">
                                                
                                                Do you provide mobile application development services?
                                            </a>
                                            <div >
                                                <p>
                                                    Yes, we offer comprehensive mobile application development services for both iOS and Android platforms. 
                                                    Our team of experienced developers can bring your app idea to life, from conceptualization to deployment.
                                                </p>
                                            </div>
                                        </li>

                                        <li className="accordion-item">
                                            <a className="accordion-title" href="javascript:void(0)">
                                                
                                                Can you assist with CCTV installation?
                                            </a>
                                            <div >
                                                <p>
                                                    Absolutely! We provide professional CCTV installation services to help secure your premises. 
                                                    Our team ensures seamless installation and integration with your existing systems for optimal security coverage.
                                                </p>
                                            </div>
                                        </li>

                                        <li className="accordion-item">
                                            <a className="accordion-title" href="javascript:void(0)">
                                                
                                                What about access control for windows and doors?
                                            </a>
                                            <div >
                                                <p>
                                                    Ochefi Technologies offers advanced access control solutions for both windows and doors. 
                                                    Our systems provide enhanced security measures, including biometric authentication, keyless entry, and remote access management.
                                                </p>
                                            </div>
                                        </li>

                                    </ul>
            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Area End */}
            <Footer />
        </>
    )
}
