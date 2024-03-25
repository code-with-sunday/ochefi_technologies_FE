import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import * as React from "react";

export const TermsCondition = () => {
    return (
        <>
            <Header />
            {/* Terms Conditions Area */}
            <div className="terms-conditions-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Ochefi Technologies Terms &amp; Conditions</h2>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-12">
                            
                            <div className="single-content">
                                <h3>1. Introduction</h3>
                                <p>
                                    Welcome to Ochefi Technologies. These terms and conditions outline the rules and regulations for the use of Ochefi Technologies' Website.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>2. Intellectual Property Rights</h3>
                                <p>
                                    Other than the content you own, under these terms, Ochefi Technologies and/or its licensors own all the intellectual property rights and materials contained in this Website.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>3. Restrictions</h3>
                                <p>
                                    You are specifically restricted from all of the following:
                                    <ul>
                                        <li>Publishing any Website material in any other media</li>
                                        <li>Selling, sublicensing, and/or otherwise commercializing any Website material</li>
                                        <li>Publicly performing and/or showing any Website material</li>
                                        <li>Using this Website in any way that is or may be damaging to this Website</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>4. Your Content</h3>
                                <p>
                                    In these Website Standard Terms and Conditions, "Your Content" shall mean any audio, video text, images, or other material you choose to display on this Website.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>5. No warranties</h3>
                                <p>
                                    This Website is provided "as is," with all faults, and Ochefi Technologies expresses no representations or warranties of any kind related to this Website or the materials contained on this Website.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>6. Limitation of liability</h3>
                                <p>
                                    In no event shall Ochefi Technologies, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Terms Conditions Area End */}
            <Footer />
        </>
    )
}
