import { MapPinCheckInside } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about-trust">
            <article id="about">
                <h3>
                    Who we are! ~ <br />
                    <span className="app-highlight">e</span>-<em>TRANSIT</em>
                </h3>
                <p>
                    We are a logistics and dispatch company committed to
                    <br />
                    making deliveries faster, safer, and more reliable.
                    <br /> Our network of professional riders and <br />
                    smart routing technology ensures your packages <br />
                    get where they need to be — on time, every time.
                </p>
            </article>
            <article id="trust">
                <h3>Why Choose us</h3>
                <ul>
                    <li>
                        <MapPinCheckInside />
                        Fast & Reliable Deliveries
                    </li>
                    <li>
                        <MapPinCheckInside />
                        Real-Time Tracking
                    </li>
                    <li>
                        <MapPinCheckInside />
                        Affordable Pricing
                    </li>
                    <li>
                        <MapPinCheckInside />
                        Professional Riders
                    </li>
                    <li>
                        <MapPinCheckInside />
                        Customer-First Support
                    </li>
                </ul>
            </article>
        </section>
    );
};

export default AboutSection;
