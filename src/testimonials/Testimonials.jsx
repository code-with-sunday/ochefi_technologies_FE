import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import * as React from "react";
import Slider from "react-slick";
GIT 

export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <Header />
            {/* Clients Area Two */}
            <section className="clients-area clients-area-two pt-100 pb-70">
                <div className="container">
                    <div className="section-title text-center">
                        <span className="sp-color2">Our Clients</span>
                        <h2>Our Clients Feedback</h2>
                    </div>
                    <Slider {...settings} className="pt-45">
                        <div className="clients-slide">
                            <div className="clients-content">
                                <div className="content">
                                    <img src="./techex/assets/images/clients-img/clients-img1.jpg" alt="Images" />
                                    <i className="bx bxs-quote-alt-left" />
                                    <h3>Jonthon Martin</h3>
                                    <span>App Developer</span>
                                </div>
                                <p>
                                    “Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi loren accumsan ipsum velit.”
                                </p>
                            </div>
                        </div>
                        <div className="clients-slide">
                            <div className="clients-content">
                                <div className="content">
                                    <img src="./techex/assets/images/clients-img/clients-img2.jpg" alt="Images" />
                                    <i className="bx bxs-quote-alt-left" />
                                    <h3>Alin Decros</h3>
                                    <span>Graphic Designer</span>
                                </div>
                                <p>
                                    “Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis.
                                    sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi loren accumsan ipsum velit.”
                                </p>
                            </div>
                        </div>
                        <div className="clients-slide">
                            <div className="clients-content">
                                <div className="content">
                                    <img src="./techex/assets/images/clients-img/clients-img3.jpg" alt="Images" />
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
                    </Slider>
                </div>
            </section>
            {/* Clients Area Two End */}
            <Footer/>
        </>
    );
};
