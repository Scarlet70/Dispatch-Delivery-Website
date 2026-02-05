import { CircleCheck } from "lucide-react";

const Pricing = () => {
    return (
        <section id="pricing">
            <h3>
                Pricing That <span className="app-highlight">Scales</span> With
                Your Business!
            </h3>
            <p>
                No surprises — just clear pricing and dependable delivery
                service.
            </p>
            <p>
                From one-off deliveries to high-volume logistics, we've got a
                plan built for you!
            </p>
            <section id="prices-section">
                <article className="price-card basic">
                    <h3>
                        BASIC - <em>Pay-As-You-Go</em>
                    </h3>
                    <h4>
                        <span>$8 - $12</span>
                        <sup> /delivery</sup>
                    </h4>
                    <p>
                        Best for: Individuals & one-time deliveries -{" "}
                        <em>No monthly commitment</em>
                    </p>
                    <p>What's included</p>
                    <ul>
                        <li>
                            <CircleCheck /> Same-day delivery
                        </li>
                        <li>
                            <CircleCheck />
                            Real-time tracking
                        </li>
                        <li>
                            <CircleCheck />
                            Email & SMS delivery updates
                        </li>
                        <li>
                            <CircleCheck /> Standard rider assignment
                        </li>
                        <li>
                            <CircleCheck /> Support during business hours
                        </li>
                    </ul>

                    <a href="order-placement">
                        <button type="button">Book a Delivery</button>
                    </a>
                </article>
                <article className="price-card standard">
                    <span className="value-highlight">Best Value!</span>
                    <h3>
                        STANDARD - <em>Business Plus (Popular)</em>
                    </h3>
                    <h4>
                        <span className="strikeThrough">$79</span>{" "}
                        <span>$59</span> <sup>/delivery</sup>
                    </h4>
                    <p>Best for: Small businesses & online sellers</p>
                    <p>What's included</p>
                    <ul>
                        <li>
                            <CircleCheck /> Up to 30 deliveries per month
                        </li>
                        <li>
                            <CircleCheck /> Priority rider assignment
                        </li>
                        <li>
                            <CircleCheck /> Live GPS tracking
                        </li>
                        <li>
                            <CircleCheck /> Delivery history & invoices
                        </li>
                        <li>
                            <CircleCheck /> Free re-delivery (1x monthly)
                        </li>
                        <li>
                            <CircleCheck /> Faster support response
                        </li>
                    </ul>

                    <a href="order-placement">
                        <button type="button">Get Started</button>
                    </a>
                </article>
                <article className="price-card premium">
                    <h3>
                        PREMIUM — <em>Enterprise</em>
                    </h3>
                    <h4>Custom Pricing</h4>
                    <p>What's included</p>
                    <ul>
                        <li>
                            <CircleCheck /> Unlimited deliveries
                        </li>
                        <li>
                            <CircleCheck /> Same-hour express delivery
                        </li>
                        <li>
                            <CircleCheck /> Dedicated dispatch manager
                        </li>
                        <li>
                            <CircleCheck /> Advanced delivery analytics
                        </li>
                        <li>
                            <CircleCheck /> API access & integrations
                        </li>
                        <li>
                            <CircleCheck /> 24/7 priority support
                        </li>
                    </ul>
                    <a href="order-placement">
                        <button type="button">Contact Sales</button>
                    </a>
                </article>
            </section>
        </section>
    );
};

export default Pricing;
