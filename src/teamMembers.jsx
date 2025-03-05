import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./teamMembers.css";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
	useGSAP(() => {
		/*let TMCards = document.querySelectorAll(
			".single-team-member-andHeader"
		);

		TMCards.forEach((element) => {*/
		gsap.to("#teamMembersPage-wrap", {
			scrollTrigger: {
				trigger: "#initTrigger",
				start: "left",
				endTrigger: "#endTGsap",
				end: "center right",
				scrub: 1,
			},
			translateX:
				document
					.getElementById("teamMembersPage-wrap")
					.getBoundingClientRect().x - 3455,
			duration: 100,
		});
	});

	return (
		<div id="teamMembersPage-wrap">
			<div className="space"></div>
			<div className="single-team-member-andHeader" id="initTrigger">
				<h1>TEAM MEMBERS</h1>
			</div>
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
			<div className="space"></div>
		</div>
	);
}
