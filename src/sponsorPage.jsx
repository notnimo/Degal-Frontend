import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./sponsorPage.css";

gsap.registerPlugin(ScrollTrigger);

export default function SponsorDisplay() {
	return (
		<div id="sponsorPage-wrap">
			<h1>OUR SPONSORS</h1>
			<div id="sponsors-wrap">
				<div className="single-sponsor-wrap">
					<a href="https://www.macron.com">
						<img
							className="sponsor-logo"
							src=""
							alt="macron logo"
						/>
					</a>
                    <div className="contact-info-wrap">
                        <a href="https://www.instagram.com/macron/">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="instagram macron info"
                            />
                        </a>
                        <a href="https://x.com/macronsports">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="x macron info"
                            />
                        </a>
                        <a href="https://www.facebook.com/macronsports/">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="facebook macron info"
                            />
                        </a>
                        <a href="https://clubshop.macron.com/torino">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="local macron site"
                            />
                        </a>
                        <a href="https://www.instagram.com/macronsportshubtorino/">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="local macron instagram info"
                            />
                        </a>
                    </div>
				</div>
				<div className="single-sponsor-wrap">
					<a href="http://www.cosmo3d.it/">
						<img
							className="sponsor-logo"
							src=""
							alt="cosmo3d logo"
						/>
					</a>
                    <div className="contact-info-wrap">
                        <a href="">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="facebook cosmo3d info"
                            />
                        </a>
                    </div>
				</div>
				<div className="single-sponsor-wrap">
					<img
						className="sponsor-logo"
						src=""
						alt="infDelBorgo logo"
					/>
                    <div className="contact-info-wrap">
                        <a href="">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="facebook infDelBorgo info"
                            />
                        </a>
                        <a href="">
                            <img
                                className="contact-info-single-logo"
                                src=""
                                alt="linkedin infDelBorgo info"
                            />
                        </a>
                    </div>
				</div>
			</div>
		</div>
	);
}
