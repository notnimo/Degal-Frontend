import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DegalLogo from "../degal_logo/DegalLogo";
import ScrollSuggestion from "../scroll_suggestion/scrollSuggestion";
import WhoAreWe from "../who_are_we/WhoAreWe";
import SponsorDisplay from "../sponsor_display/sponsorPage";
import TeamMembers from "../team_members/teamMembers";
import "./App.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App(props) {
	return (
		<>
			<DegalLogo />
			<ScrollSuggestion />
			<WhoAreWe />
			<TeamMembers />
			<SponsorDisplay />
			<div className="spacer" />
		</>
	);
}
