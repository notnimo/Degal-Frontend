import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./teamMembers.css";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
	/*useGSAP(() => {
		gsap.from("teamMembersPage-wrap", {
			scrollTrigger: {
				start: "center center",
				end: "left center",
				trigger: "single-team-member-andheader",
				endTrigger: "endTGsap",
			},
		});
	});*/

	return (
		<div id="teamMembersPage-wrap">
			<h1
				className="single-team-member-andHeader"
				style={{ minWidth: "375px", color: "#1b72b8", textShadow: "" }}
			>
				TEAM MEMBERS
			</h1>
			<div className="single-team-member-andHeader">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>GABRIELE DI GIORGIO</h3>
					<h4>Team Manager</h4>
					<p></p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>DAMIANO LIVONI</h3>
					<h4>Design Engineer</h4>
					<p></p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>ARTURO SERPICO</h3>
					<h4>Design Engineer</h4>
					<p></p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>LEONARDO ZUCCHINI</h3>
					<h4>Manufacturing Engineer</h4>
					<p></p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>ADRIANO ROGGERO</h3>
					<h4>Graphic Designer</h4>
					<p></p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>EMMA BONELLI</h3>
					<h4>Resource Manager</h4>
					<p></p>
				</div>
			</div>
			<div className="single-team-member-andHeader" id="endTGsap">
				<div>
					<img
						href="https://via.placeholder.com/150"
						alt="placeholder"
					/>
					<h3>LORENZO TESSITORE</h3>
					<h4>Resource Manager</h4>
					<p></p>
				</div>
			</div>
		</div>
	);
}
