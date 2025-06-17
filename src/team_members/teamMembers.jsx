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
	const cardsRef = useRef([]);

	useGSAP(() => {
		const container = containerRef.current;
		const cards = cardsRef.current;

		// Calculate total width of all cards
		const totalCardsWidth = cards.reduce(
			(acc, card) => acc + (card?.offsetWidth || 0),
			0
		);

		// Set the end value based on the total width of all cards minus the container width
		const scrollEnd = totalCardsWidth - container.offsetWidth + 360; // 360px buffer

		gsap.to(cards, {
			x: () => `-${scrollEnd}px`,
			ease: "none",
			scrollTrigger: {
				trigger: container,
				start: "top top",
				end: `+=${scrollEnd}`,
				pin: true,
				scrub: 1,
			},
		});
	}, []);

	return (
		<div
			id="teamMembersPage-wrap"
			ref={containerRef}
			style={{ overflow: "hidden" }}
		>
			<div className="space" id="initTrigger"></div>
			{[
				{
					name: "TEAM MEMBERS",
					isHeader: true,
				},
				{
					img: digio,
					name: "GABRIELE DI GIORGIO",
					role: "Team Manager",
					desc: "I am the one who coordinates the team. With ability I was able to understand from the very beginning what had to be done to achieve the established goals and to find efficient alternatives in difficult moments. My work is essential for the good functioning of the team's activities",
				},
				{
					img: damiano,
					name: "DAMIANO LIVONI",
					role: "Design Engineer",
					desc: "I started with the only role of running the simulation to improve the aerodynamics of the car, but I also thought that the team needed a website for marketing purposes so i learned web development and coded this website. I sometimes help out the other team members with their tasks if needed.",
				},
				{
					img: arturo,
					name: "ARTURO SERPICO",
					role: "Design Engineer",
					desc: "Despite being only 14 years old, I am extremely passionate about the world of science, especially mathematics and computer science. I quickly learned how to model with CAD software and designed an aerodynamic car. I am an active part of the team's success",
				},
				{
					img: leonardo,
					name: "LEONARDO ZUCCHINI",
					role: "Manufacturing Engineer",
					desc: "My role consists of hand finishing the final printed model and designing its mechanisms: thanks to my manufacturing skills it was possible to show up at the race with cars that were not only fast but also functional. My presence is also of great importance for the performance of the car, as I design the wheels and the wing attachment systems",
				},
				{
					img: adriano,
					name: "ADRIANO ROGGERO",
					role: "Graphic Designer",
					desc: "If it wasn't for me, the team wouldn't have a logo, official colors and graphic elements. My contribute is of vital importance, as I actively work to brand the team, creating eye-catching images for the public",
				},
				{
					img: emma,
					name: "EMMA BONELLI",
					role: "Resource Manager",
					desc: "I'm the only girl in the team, and I carefully and skillfully analyze the latest trends on social media to understand what content needs to be published. I therefore carry out a fundamental part of the work in making the team's accounts popular, following the brand identity established by all of us.",
				},
				{
					img: tex,
					name: "LORENZO TESSITORE",
					role: "Resource Manager",
					desc: "Winning: this is the goal, and to do so it's necessary an adequate marketing strategy. I am the mind behind the team's commercial choices, if the team had results not only in the engineering field it owes me a lot for this.",
				},
			].map((member, idx) =>
				member.isHeader ? (
					<div
						className="single-team-member-andHeader"
						key={idx}
						ref={(el) => (cardsRef.current[idx] = el)}
					>
						<h1>{member.name}</h1>
					</div>
				) : (
					<div
						className="single-team-member-andHeader"
						key={idx}
						ref={(el) => (cardsRef.current[idx] = el)}
					>
						<div className="TM-cont">
							<div className="TM-image-cont">
								<img src={member.img} alt={member.name} />
							</div>
							<h3>{member.name}</h3>
							<h4>{member.role}</h4>
							<p className="TM-paragraph">{member.desc}</p>
						</div>
					</div>
				)
			)}
			<div className="space"></div>
		</div>
	);
}
