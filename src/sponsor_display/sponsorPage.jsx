import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sponsorPage.css";
import x_icon from "./contact_icon/x_icon.png";
import instagram_icon from "./contact_icon/instagram_icon.png";
import facebook_icon from "./contact_icon/facebook_icon.png";
import web_icon from "./contact_icon/web_icon.png";
import linkedin_icon from "./contact_icon/linkedin_icon.png";
import macron_logo from "./sponsor_logo/macron_logo.png";
import cosmo3d_logo from "./sponsor_logo/cosmo3d_logo.png";
import zerbini_logo from "./sponsor_logo/zerbini_logo.png";
import napoli_logo from "./sponsor_logo/napoli_logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function SponsorDisplay() {
	return (
		<div id="sponsorPage-wrap">
			<div className="space"></div>
			<h1 id="sponsorPage-header">OUR SPONSORS</h1>
			<div className="sponsors-wrap">
				<div className="single-sponsor-wrap">
					<div>
						<a href="https://www.macron.com">
							<img
								id="macron-sponsor-logo"
								src={macron_logo}
								alt="macron logo"
							/>
						</a>
					</div>
					<div
						className="contact-info-wrap"
						style={{ width: "300px" }}
					>
						<div className="contact-info-single-logo">
							<a href="https://www.instagram.com/macron/">
								<img
									src={instagram_icon}
									alt="instagram macron info"
								/>
							</a>
						</div>
						<div className="contact-info-single-logo">
							<a href="https://x.com/macronsports">
								<img src={x_icon} alt="x macron info" />
							</a>
						</div>
						<div className="contact-info-single-logo">
							<a href="https://www.facebook.com/macronsports/">
								<img
									src={facebook_icon}
									alt="facebook macron info"
								/>
							</a>
						</div>
						<div className="contact-info-single-logo">
							<a href="https://clubshop.macron.com/torino">
								<div
									style={{
										backgroundColor: "#fff",
										height: "50px",
										width: "50px",
										borderRadius: "20%",
									}}
								>
									<img
										src={web_icon}
										alt="local macron site"
									/>
								</div>
							</a>
						</div>
						<div className="contact-info-single-logo">
							<a href="https://www.instagram.com/macronsportshubtorino/">
								<img
									src={instagram_icon}
									alt="local macron instagram info"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="single-sponsor-wrap">
					<div>
						<a href="http://www.cosmo3d.it/">
							<img
								id="cosmo3d-sponsor-logo"
								src={cosmo3d_logo}
								alt="cosmo3d logo"
								style={{ width: "auto" }}
							/>
						</a>
					</div>
					<div className="contact-info-wrap">
						<div className="contact-info-single-logo">
							<a href="https://www.facebook.com/cosmo3d">
								<img
									src={facebook_icon}
									alt="facebook cosmo3d info"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="sponsors-wrap">
				<div className="single-sponsor-wrap">
					<div>
						<a href="https://zerbinimodelli.com/">
							<img
								id="zerbini-sponsor-logo"
								src={zerbini_logo}
								alt="zerbini logo"
							/>
						</a>
					</div>
					<div className="contact-info-wrap">
						<div className="contact-info-single-logo">
							<a href="https://in.linkedin.com/company/zerbini-modelli-s.r.l.">
								<img
									src={linkedin_icon}
									alt="zerbini linkedin logo"
								/>
							</a>
						</div>
					</div>
				</div>
				<div className="single-sponsor-wrap">
					<div>
						<a href="http://www.dii.unina.it/">
							<img
								id="napoli-sponsor-logo"
								src={napoli_logo}
								alt="napoli logo"
							/>
						</a>
					</div>
					<div className="contact-info-wrap">
						<div className="contact-info-single-logo">
							<a href="https://www.facebook.com/DII.unina">
								<img
									src={facebook_icon}
									alt="napoli facebook logo"
								/>
							</a>
						</div>
						<div className="contact-info-single-logo">
							<a href="https://www.instagram.com/ingegneria.industriale.unina/">
								<img
									src={instagram_icon}
									alt="napoli instagram logo"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="space"></div>
		</div>
	);
}
