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
import infDelBorgo from "./sponsor_logo/infDelBorgo_logo.png";

gsap.registerPlugin(ScrollTrigger);

export default function SponsorDisplay() {
	return (
		<div id="sponsorPage-wrap">
			<h1 style={{ minWidth: "375px", color: "white" }}>OUR SPONSOR</h1>
			<div id="sponsors-wrap">
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
				<div className="single-sponsor-wrap">
					<div>
						<img
							id="infDelBorgo-sponsor-logo"
							src={infDelBorgo}
							alt="infDelBorgo logo"
						/>
					</div>
					<div
						className="contact-info-wrap"
						style={{ width: "105px" }}
					>
						<div className="contact-info-single-logo">
							<a href="https://www.facebook.com/p/Infermieri-nel-Borgo-100057531005763">
								<img
									className="contact-info-single-logo"
									src={facebook_icon}
									alt="facebook infDelBorgo info"
								/>
							</a>
						</div>
						<div className="contact-info-single-logo">
							<a href="https://it.linkedin.com/in/infermieri-nel-borgo-studio-associato-a38468156">
								<img
									className="contact-info-single-logo"
									src={linkedin_icon}
									alt="linkedin infDelBorgo info"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
