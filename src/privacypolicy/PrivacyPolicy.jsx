import { Footer } from "../components/Footer";
import { Header } from "../components/Header"
import * as React from "react";

export const PrivacyPolicy = () => {
    return (
        <>
            <Header />
            {/* Privacy-Policy Area */}
            <div className="privacy-policy-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sp-color2">Privacy Policy</span>
                        <h2>Ochefi-Technologies Privacy Policy</h2>
                    </div>
                    <div className="row pt-45">
                        <div className="col-lg-12">
                            <div className="single-content">
                                <h3>Information Collection</h3>
                                <p>
                                    At Ochefi-Technologies, we collect certain information about you to provide and improve our services. This may include personal information such as your name, email address, contact details, and browsing activity.
                                </p>
                                <p>
                                    We collect this information through various means, including when you interact with our website, subscribe to our newsletter, or use our services. We may also collect information from third-party sources to enhance our services and personalize your experience.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>Use of Information</h3>
                                <p>
                                    The information we collect is used to understand your needs and preferences, improve our products and services, communicate with you, and personalize your experience. We may also use this information to send you promotional emails, newsletters, or other marketing materials.
                                </p>
                                <p>
                                    We may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you, provided that those parties agree to keep this information confidential. We do not sell or rent your personal information to third parties.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>Security Measures</h3>
                                <p>
                                    Ochefi-Technologies takes the security of your personal information seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction.
                                </p>
                                <p>
                                    However, please note that no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>Third-party Links</h3>
                                <p>
                                    Our website may contain links to third-party websites or services that are not owned or controlled by Ochefi-Technologies. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                                </p>
                                <p>
                                    We encourage you to review the privacy policies of these third-party websites or services before providing any personal information or engaging in any transactions with them.
                                </p>
                            </div>
                            <div className="single-content">
                                <h3>Changes to This Privacy Policy</h3>
                                <p>
                                    Ochefi-Technologies reserves the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the updated Privacy Policy on our website.
                                </p>
                                <p>
                                    We encourage you to periodically review this Privacy Policy for any changes. Your continued use of our website after the posting of any modifications to this Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the updated Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Privacy-Policy Area End */}
            <Footer />
        </>
    )
}
