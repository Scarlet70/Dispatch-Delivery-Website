import { useState } from "react";

const TrackShipment = () => {
    const [trackingId, setTrackingId] = useState();
    return (
        <aside id="tracking">
            <h3>
                Track Your <span className="app-highlight">Shipment</span> in
                Real <span className="app-highlight">Time</span>
            </h3>
            <p>
                Enter your tracking ID below to see the current status of your
                delivery.
            </p>
            <form
                className="track-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <label htmlFor="tracking-number">Tracking Details</label>
                <input
                    type="text"
                    placeholder="Enter tracking ID"
                    id="tracking-number"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                />
                <button>Track Package</button>
            </form>
        </aside>
    );
};

export default TrackShipment;
