import * as React from "react";

export const Feedback = () => {
    return (
        <>
            {/* Clients Area */}
            <section className="clients-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sp-color2">Our Clients</span>
                        <h2>Our Clients Feedback</h2>
                    </div>
                    <div className="clients-slider owl-carousel owl-theme pt-45">
                        <div className="clients-content">
                            <div className="content">
                                <img src="assets/images/clients-img/clients-img1.jpg" alt="Images" />
                                <i className="bx bxs-quote-alt-left" />
                                <h3>Jonthon Martin</h3>
                                <span>App Developer</span>
                            </div>
                            <p>
                                “Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi loren accumsan ipsum velit.”
                            </p>
                        </div>
                        <div className="clients-content">
                            <div className="content">
                                <img src="assets/images/clients-img/clients-img2.jpg" alt="Images" />
                                <i className="bx bxs-quote-alt-left" />
                                <h3>Alin Decros</h3>
                                <span>Graphic Designer</span>
                            </div>
                            <p>
                                “Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi loren accumsan ipsum velit.”
                            </p>
                        </div>
                        <div className="clients-content">
                            <div className="content">
                                <img src="assets/images/clients-img/clients-img3.jpg" alt="Images" />
                                <i className="bx bxs-quote-alt-left" />
                                <h3>Elen Musk</h3>
                                <span>Web Developer</span>
                            </div>
                            <p>
                                “Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                                sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi loren accumsan ipsum velit.”
                            </p>
                        </div>
                    </div>
                </div>
                <div className="client-circle">
                    <div className="client-circle-1">
                        <div className="circle" />
                    </div>
                    <div className="client-circle-2">
                        <div className="circle" />
                    </div>
                    <div className="client-circle-3">
                        <div className="circle" />
                    </div>
                    <div className="client-circle-4">
                        <div className="circle" />
                    </div>
                    <div className="client-circle-5">
                        <div className="circle" />
                    </div>
                    <div className="client-circle-6">
                        <div className="circle" />
                    </div>
                    <div className="client-circle-7">
                        <div className="circle" />
                    </div>
                </div>
            </section>
            {/* Clients Area End */}

        </>
    )
}