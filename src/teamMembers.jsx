import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./teamMembers.css";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
	return (
		<div id="teamMembersPage-wrap">
			<div className="single-team-member-andheader">
				<h1 style={{ minWidth: "375px"}}>
					TEAM MEMBERS
				</h1>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>GABRIELE DI GIORGIO</h3>
				<h4>Team Manager</h4>
				<p></p>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>DAMIANO LIVONI</h3>
				<h4>Design Engineer</h4>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>ARTURO SERPICO</h3>
				<h4>Design Engineer</h4>
				<p></p>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>LEONARDO ZUCCHINI</h3>
				<h4>Manufacturing Engineer</h4>
				<p></p>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>ADRIANO ROGGERO</h3>
				<h4>Graphic Designer</h4>
				<p></p>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>EMMA BONELLI</h3>
				<h4>Resource Manager</h4>
				<p></p>
			</div>
			<div className="single-team-member-andHeader">
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>LORENZO TESSITORE</h3>
				<h4>Resource Manager</h4>
				<p></p>
			</div>
		</div>
	);
}
