import { PackageCheck, TruckElectric, ChartNoAxesCombined } from "lucide-react";

const DeliveryProcess = () => {
    return (
        <section id="process">
            <h3>
                Your <span className="app-highlight">Package</span>, our
                <span className="app-highlight"> process!</span>
            </h3>
            <p className="process-msg">
                <em>How we make sure your package gets to you hassle free!</em>
            </p>

            <article id="processes">
                <section className="process-card">
                    <div className="numbering">01</div>
                    <div className="step">
                        <h4>Place Order</h4>
                        <p>
                            Create a delivery request in seconds by entering
                            pickup and drop-off details. <br />
                            Choose your delivery type, schedule, and preferences
                            with ease.
                        </p>
                    </div>
                </section>
                <section className="process-card">
                    <div className="numbering">02</div>
                    <div className="step">
                        <h4>Track Shipment</h4>
                        <p>
                            Monitor your shipment in real time with live
                            location <br />
                            updates and clear status notifications from dispatch
                            to delivery.
                        </p>
                    </div>
                </section>
                <section className="process-card">
                    <div className="numbering">03</div>
                    <div className="step">
                        <h4>Delivered Safely</h4>
                        <p>
                            Your package is delivered safely and on time, <br />
                            with confirmation provided upon successful drop-off.
                        </p>
                    </div>
                </section>
                <div className="progress-bar">
                    <span className="progress-level">
                        <TruckElectric />
                    </span>
                    <span className="progress-level">
                        <ChartNoAxesCombined />
                    </span>
                    <span className="progress-level">
                        <PackageCheck />
                    </span>
                </div>
            </article>
        </section>
    );
};

export default DeliveryProcess;
