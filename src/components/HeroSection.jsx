import HeroImage from "../assets/hero-image2.svg?react";
import Location from "../assets/hero-pin.svg?react";
import { Send, SplinePointer } from "lucide-react";

const HeroSection = () => {
	return (
		<section id="home" className="heroSection">
			<div className="heroText">
				<Location className="heroLocationPin" />
				<h1>
					Deliver <span className="heroSpan">Smarter.</span> Move <span className="heroSpan">Faster.</span> Stay <span className="heroSpan">Ahead.</span>
				</h1>
				<p>On-demand dispatch services designed for modern businesses and busy individuals.</p>
				<div className="CTA-btns">
					<a href="#">
						<button type="button">
							<span></span>Send a Package <Send />
						</button>
					</a>
					<a href="#tracking">
						<button type="button">
							<span></span>Track Delivery <SplinePointer />
						</button>
					</a>
				</div>
			</div>

			<div className="heroImage">
				<HeroImage className="hero-svg" />
			</div>
		</section>
	);
};

export default HeroSection;
