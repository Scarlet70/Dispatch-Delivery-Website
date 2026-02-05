import { TruckElectric, Building2, PackageCheck, Motorbike, ArrowRight } from "lucide-react";

const Services = () => {
	return (
		<section id="services">
			<h2>Our Delivery Services</h2>
			<p className="delivery-msg">We provide flexible delivery solutions tailored to your needs </p>
			<p className="delivery-msg msg2">— whether it's a single package or bulk business deliveries.</p>
			<section id="service-cards">
				<article className="service-card">
					<TruckElectric className="service-icon" />
					<h3>Same-Day Delivery</h3>
					<p>Get your packages delivered within hours across the city.</p>
					<button type="button" className="service-card-btn">
						<span></span>
						<ArrowRight />
					</button>
				</article>
				<article className="service-card">
					<Motorbike className="service-icon" />
					<h3>Express Dispatch</h3>
					<p>Fast, secure delivery for time-sensitive packages.</p>
					<button type="button" className="service-card-btn">
						<span></span>
						<ArrowRight />
					</button>
				</article>
				<article className="service-card">
					<Building2 className="service-icon" />
					<h3>Business Deliveries</h3>
					<p>Reliable logistics support for SMEs, e-commerce, and corporate clients.</p>
					<button type="button" className="service-card-btn">
						<span></span>
						<ArrowRight />
					</button>
				</article>
				<article className="service-card">
					<PackageCheck className="service-icon" />
					<h3>Interstate Deliveries</h3>
					<p>Safe and timely delivery across state lines.</p>
					<button type="button" className="service-card-btn">
						<span></span>
						<ArrowRight />
					</button>
				</article>
			</section>
		</section>
	);
};

export default Services;
