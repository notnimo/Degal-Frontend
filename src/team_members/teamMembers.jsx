import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./teamMembers.css";
import { use } from "react";
import adriano from "./member_immages/adriano.png";
import arturo from "./member_immages/arturo.png";
import damiano from "./member_immages/damiano.png";
import emma from "./member_immages/emma.png";
import digio from "./member_immages/io.png";
import leonardo from "./member_immages/leonardo.png";
import tex from "./member_immages/tex.png";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
	const containerRef = useRef(null);

	useGSAP(() => {
		let TMCards = document.querySelectorAll(
			".single-team-member-andHeader"
		);

		gsap.to(containerRef.current, {
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top top",
				end: () => "+=" + containerRef.current.offsetWidth + "+950",
				pin: true,
				scrub: 1,
			},
		});

		TMCards.forEach((element, index) => {
			gsap.to(element, {
				x: () => "-" + containerRef.current.offsetWidth + "-5000",
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: () => "+=" + containerRef.current.offsetWidth + "+950",
					scrub: 1,
				},
			});
		});
	});

	return (
		<div id="teamMembersPage-wrap" ref={containerRef}>
			<div className="space" id="initTrigger"></div>
			<div className="single-team-member-andHeader">
				<h1>TEAM MEMBERS</h1>
			</div>
			<div className="single-team-member-andHeader">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={digio} />
					</div>
					<h3>GABRIELE DI GIORGIO</h3>
					<h4>Team Manager</h4>
					<p className="TM-paragraph">
						I am the one who coordinates the team. With ability I
						was able to understand from the very beginning what had
						to be done to achieve the established goals and to find
						efficient alternatives in difficult moments. My work is
						essential for the good functioning of the team's
						activities
					</p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={damiano} />
					</div>
					<h3>DAMIANO LIVONI</h3>
					<h4>Design Engineer</h4>
					<p className="TM-paragraph">
						I started with the only role of running the simulation
						to improve the aerodynamics of the car, but I also
						thought that the team needed a website for marketing
						purposes so i learned web development and coded this
						website. I sometimes help out the other team members
						with their tasks if needed.
					</p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={arturo} />
					</div>
					<h3>ARTURO SERPICO</h3>
					<h4>Design Engineer</h4>
					<p className="TM-paragraph">
						Despite being only 14 years old, I am extremely
						passionate about the world of science, especially
						mathematics and computer science. I quickly learned how
						to model with CAD software and designed an aerodynamic
						car. I am an active part of the team's success
					</p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={leonardo} />
					</div>
					<h3>LEONARDO ZUCCHINI</h3>
					<h4>Manufacturing Engineer</h4>
					<p className="TM-paragraph">
						My role consists of hand finishing the final printed
						model and designing its mechanisms: thanks to my
						manufacturing skills it was possible to show up at the
						race with cars that were not only fast but also
						functional. My presence is also of great importance for
						the performance of the car, as I design the wheels and
						the wing attachment systems
					</p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={adriano} />
					</div>
					<h3>ADRIANO ROGGERO</h3>
					<h4>Graphic Designer</h4>
					<p className="TM-paragraph">
						If it wasn't for me, the team wouldn't have a logo,
						official colors and graphic elements. My contribute is
						of vital importance, as I actively work to brand the
						team, creating eye-catching images for the public
					</p>
				</div>
			</div>
			<div className="single-team-member-andHeader">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={emma} />
					</div>
					<h3>EMMA BONELLI</h3>
					<h4>Resource Manager</h4>
					<p className="TM-paragraph">
						I'm the only girl in the team, and I carefully and
						skillfully analyze the latest trends on social media to
						understand what content needs to be published. I
						therefore carry out a fundamental part of the work in
						making the team's accounts popular, following the brand
						identity established by all of us.
					</p>
				</div>
			</div>
			<div className="single-team-member-andHeader" id="endTGsap">
				<div className="TM-cont">
					<div className="TM-image-cont">
						<img src={tex} />
					</div>
					<h3>LORENZO TESSITORE</h3>
					<h4>Resource Manager</h4>
					<p className="TM-paragraph">
						Winning: this is the goal, and to do so it's necessary
						an adequate marketing strategy. I am the mind behind the
						team's commercial choices, if the team had results not
						only in the engineering field it owes me a lot for this.
					</p>
				</div>
			</div>
			<div className="space"></div>
		</div>
	);
}
