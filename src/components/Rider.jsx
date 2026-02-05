import { Bike } from "lucide-react";
import RiderImage1 from "../assets/riderImg1-nobg.webp";

const Rider = () => {
    return (
        <section id="rider">
            <article id="rider-text">
                <h3>
                    Become a <span className="app-highlight">Rider</span> -
                </h3>
                <h4>
                    <em>
                        Earn on your own
                        <span className="app-highlight">
                            {" "}
                            schedule.
                            <br />
                        </span>
                        Deliver with
                        <span className="app-highlight"> confidence.</span>
                    </em>
                </h4>
                <p>
                    Join our growing network of trusted delivery riders and get
                    access to consistent delivery requests, flexible working
                    hours, and reliable payouts. Whether you ride full-time or
                    part-time, we make it easy for you to earn while you move.
                </p>

                <h5>Perks</h5>
                <ul>
                    <li>
                        <Bike /> Flexible work hours that fit your schedule
                    </li>
                    <li>
                        <Bike /> Competitive earnings per delivery
                    </li>
                    <li>
                        <Bike /> Fast and reliable payout system
                    </li>
                    <li>
                        <Bike /> Easy-to-use delivery and tracking tools
                    </li>
                </ul>
                <button>Start Today!</button>
                <p className="no-friction">
                    No registration fees • Quick approval • Support available
                </p>
            </article>
            <article id="rider-image">
                <img
                    src={RiderImage1}
                    alt="a rider on a bike"
                />
            </article>
        </section>
    );
};

export default Rider;
