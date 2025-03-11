import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DegalLogo from "./DegalLogo";
import ScrollSuggestion from "./scrollSuggestion";
import WhoAreWe from "./WhoAreWe";
import SponsorDisplay from "./sponsorPage";
import TeamMembers from "./teamMembers";
import "./App.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App(props) {
	return (
		<>
			{/*<DegalLogo />
			<ScrollSuggestion />
			<div id="WAWeTM-wrap">
				<WhoAreWe />
				<TeamMembers />
			</div>*/}
			<SponsorDisplay />
			<div className="spacer" />
		</>
	);
}
