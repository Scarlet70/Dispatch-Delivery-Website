import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import DroneAnimated from "../assets/drone-delivery-animate.svg?react";

const Contact = () => {
    return (
        <section id="contact">
            <article id="contact-info">
                <h3>
                    We'd <span className="app-highlight">Love</span> to Hear
                    From <span className="app-highlight">You</span>
                </h3>
                <p className="contact-description">
                    Have questions, need support, or want to partner with us?
                    Reach out and our team will get back to you shortly.
                </p>
                <div className="contact-links">
                    <p>
                        Email:
                        <a href="mailto:support@etransit.com">
                            {" "}
                            support@etransit.com
                        </a>
                    </p>
                    <p>
                        Phone:
                        <a href="tel: +1 (555) 123-4567">+1 (555) 123-4567</a>
                    </p>
                    <p>Office Hours: Mon - Sat, 8:00am - 6:00pm</p>
                </div>
                <p>Connect with us on socials</p>
                <ul>
                    <li>
                        <a href="">
                            <FaTwitter />
                        </a>
                        <span className="tooltip">Twitter</span>
                    </li>
                    <li>
                        <a href="">
                            <FaLinkedin />
                        </a>
                        <span className="tooltip">LinkedIn</span>
                    </li>
                    <li>
                        <a href="">
                            <FaInstagram />
                        </a>
                        <span className="tooltip">Instagram</span>
                    </li>
                    <li>
                        <a href="">
                            <FaFacebook />
                        </a>
                        <span className="tooltip">Facebook</span>
                    </li>
                </ul>
                <div className="deliveryImg">
                    <DroneAnimated />
                </div>
            </article>
            <article id="contact-form">
                <form onSubmit={(e) => e.preventDefault()}>
                    <fieldset>
                        <legend>
                            Let's Start a
                            <span className="app-highlight"> Conversation</span>
                        </legend>
                        <label
                            htmlFor="fullname"
                            className="offScreen"
                        >
                            FullName
                        </label>
                        <input
                            type="text"
                            id="fullname"
                            placeholder="Enter full Name"
                        />
                        <label
                            htmlFor="email"
                            className="offScreen"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                        />
                        <label
                            htmlFor="subject"
                            className="offScreen"
                        >
                            Subject
                        </label>
                        <select
                            name="subject"
                            id="subject"
                        >
                            <option
                                value=""
                                disabled
                            >
                                Choose Subject
                            </option>
                            <option value="support">Support</option>
                            <option value="partnership">Partnership</option>
                            <option value="general-inquiry">
                                General Inquiry
                            </option>
                        </select>
                        <label
                            htmlFor="message"
                            className="offScreen"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="send us a message"
                        ></textarea>
                        <button>Submit</button>
                    </fieldset>
                </form>
            </article>
        </section>
    );
};

export default Contact;
