import {
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaGithub,
} from "react-icons/fa";

const Footer = () => {
    const today = new Date();

    return (
        <footer>
            <div className="footer-tagline">
                <h3>
                    <span className="app-highlight">Moving</span> packages.{" "}
                    <span className="app-highlight">Connecting</span> people.
                </h3>
                &copy; {today.getFullYear()} etransit. All rights reserved.
            </div>
            <section id="footer-links">
                <div className="footer-card">
                    <h5>
                        <span className="app-highlight">e</span>Transit
                    </h5>
                    <p>
                        Fast, reliable delivery services designed to move your
                        packages safely and on time. Built for individuals,
                        businesses, and riders who value efficiency and trust.
                    </p>
                </div>
                <div className="footer-card">
                    <h5>Company</h5>
                    <ul>
                        <li>
                            <a href="#about">About Us</a>
                        </li>
                        <li>
                            <a href="#process">How it Works</a>
                        </li>
                        <li>
                            <a href="#booking">Pricing</a>
                        </li>
                        <li>
                            <a href="#rider">Become a Rider</a>
                        </li>
                        <li>
                            <a href="#contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h5>Services</h5>
                    <ul>
                        <li>
                            <a href="">Place a Delivery</a>
                        </li>
                        <li>
                            <a href="#tracking">Track Shipment</a>
                        </li>
                        <li>
                            <a href="#services">Business Deliveries</a>
                        </li>
                        <li>
                            <a href="#services">Same-Day Delivery</a>
                        </li>
                        <li>
                            <a href="#services">Scheduled Dispatch</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h5>Support</h5>
                    <ul>
                        <li>
                            <a href="">Help Center</a>
                        </li>
                        <li>
                            <a href="">Rider Support</a>
                        </li>
                        <li>
                            <a href="">FAQs</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-card">
                    <h5>Socials</h5>
                    <ul>
                        <li>
                            <a href="">
                                <FaLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaTwitter />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FaGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="copyright-msg">
                <p>
                    &copy; {today.getFullYear()} scarletEdge. All rights
                    reserved{" "}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
