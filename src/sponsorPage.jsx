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
			<h1 style={{ minWidth: "375px", color: "white" }}>OUR SPONSORS</h1>
			<div id="sponsors-wrap">
				<div className="single-sponsor-wrap">
					<a href="https://www.macron.com">
						<div id="macron-logo-wrap">
							<img
								className="sponsor-logo"
								src={macron_logo}
								alt="macron logo"
							/>
						</div>
					</a>
					<div className="contact-info-wrap">
						<a href="https://www.instagram.com/macron/">
							<img
								className="contact-info-single-logo"
								src={instagram_icon}
								alt="instagram macron info"
							/>
						</a>
						<a href="https://x.com/macronsports">
							<img
								className="contact-info-single-logo"
								src={x_icon}
								alt="x macron info"
							/>
						</a>
						<a href="https://www.facebook.com/macronsports/">
							<img
								className="contact-info-single-logo"
								src={facebook_icon}
								alt="facebook macron info"
							/>
						</a>
						<a href="https://clubshop.macron.com/torino">
							<img
								className="contact-info-single-logo"
								src={web_icon}
								alt="local macron site"
							/>
						</a>
						<a href="https://www.instagram.com/macronsportshubtorino/">
							<img
								className="contact-info-single-logo"
								src={instagram_icon}
								alt="local macron instagram info"
							/>
						</a>
					</div>
				</div>
				<div className="single-sponsor-wrap">
					<a href="http://www.cosmo3d.it/">
						<img
							className="sponsor-logo"
							src={cosmo3d_logo}
							alt="cosmo3d logo"
						/>
					</a>
					<div className="contact-info-wrap">
						<a href="https://www.facebook.com/cosmo3d">
							<img
								className="contact-info-single-logo"
								src={facebook_icon}
								alt="facebook cosmo3d info"
							/>
						</a>
					</div>
				</div>
				<div className="single-sponsor-wrap">
					<img
						className="sponsor-logo"
						src={infDelBorgo}
						alt="infDelBorgo logo"
					/>
					<div className="contact-info-wrap">
						<a href="https://www.facebook.com/p/Infermieri-nel-Borgo-100057531005763">
							<img
								className="contact-info-single-logo"
								src={facebook_icon}
								alt="facebook infDelBorgo info"
							/>
						</a>
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
	);
}
