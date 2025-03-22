import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./teamMembers.css";
import { use } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers() {
	//useGSAP(() => {
	//	const container_ref = useRef(null);
	//
	//	useEffect(() => {
	//		let TMCards = gsap.utils.toArray(".single-team-member-andHeader");
	//		gsap.to(TMCards, {
	//			xPercent: -100 * (TMCards.length - 1),
	//			ease: "none",
	//			scrollTrigger: {
	//				trigger: container_ref.current,
	//				pin: true,
	//				scrub: 1,
	//				//snap: 1 / (TMCards.length - 1),
	//				end: () => "+=" + container_ref.current.offsetWidth,
	//			},
	//		});
	//	});
	//});

	//useGSAP(() => {
	//	let TMCards = document.querySelectorAll(
	//		".single-team-member-andHeader"
	//	);
	//
	//	gsap.to("#temMembersPage-wrap", {
	//		scrollTrigger: {
	//			pin: true,
	//			trigger: "#initTrigger",
	//			start: "top 2%",
	//			endTrigger: "#endTGsap",
	//			end: "right right",
	//			scrub: 1,
	//		},
	//	});
	//
	//	TMCards.forEach((element, index) => {
	//		gsap.to(element, {
	//			scrollTrigger: {
	//				trigger: "#initTrigger",
	//				start: "top 2%",
	//				endTrigger: element,
	//				end: "bottom bottom",
	//				scrub: 1,
	//			},
	//			translateX: element.getBoundingClientRect().x + 10000, //3455
	//		});
	//	});
	//});

	const containerRef = useRef(null);

	useGSAP(() => {
		let TMCards = document.querySelectorAll(
			".single-team-member-andHeader"
		);

		gsap.to(containerRef.current, {
			scrollTrigger: {
				trigger: containerRef.current,
				start: "top top",
				end: () => "+=" + containerRef.current.offsetWidth,
				pin: true,
				scrub: 1,
			},
		});

		TMCards.forEach((element, index) => {
			gsap.to(element, {
				x: -containerRef.current.offsetWidth,
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top top",
					end: () => "+=" + containerRef.current.offsetWidth,
					scrub: 1,
				},
			});
		});
	});

	return (
		<div id="teamMembersPage-wrap" ref={containerRef}>
			{/*ref={container_ref}*/}
			<div className="space" id="initTrigger"></div>
			<div className="single-team-member-andHeader">
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
					<p className="TM-paragraph">
						I am the one who coordinates the team. With ability, I
						was able to understand from the very beginning what had
						to be done to achieve the established goals and to find
						efficient alternatives in difficult moments. My work is
						essential for the good functioning of the team's
						activities
					</p>
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
					<p className="TM-paragraph"></p>
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
					<p className="TM-paragraph">
						Despite only being 14 years old, I am extremely
						passionate about the world of science, especially
						mathematics and computer science. I quickly learned how
						to model with CAD software and designed an aerodynamic
						car. I am an active part of the team's success
					</p>
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
					<p className="TM-paragraph">
						My role consists of hand finishing the final printed
						model and designing its mechanisms: thanks to my
						manufacturing skills it was possible to show up at the
						race with cars that were not only fast but also
						beautiful. My presence is also of great importance for
						the performance of the car, as I design the wheels and
						the wing attachment systems
					</p>
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
					<p className="TM-paragraph">
						If it wasn't for me, the team wouldn't have a logo,
						official colors and graphic elements. My contribute is
						of vital importance, as I actively work to brand the
						team, creating eye-catching images for the public
					</p>
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
					<p className="TM-paragraph">
						I'm the only girl in the team, and I carefully and
						skillfully analyze the latest trends on social media, so
						to understand what content needs to be published to
						attract people. I therefore carry out a fundamental work
						in making the team's accounts popular, following the
						brand identity established by all of us.
					</p>
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
					<p className="TM-paragraph">
						Winning: this is the goal, and to do so you need to have
						an adequate marketing strategy. I am the mind behind the
						team's commercial choices, which have led us to achieve
						excellent results not only in the engineering field. The
						team owes me a lot for this.
					</p>
				</div>
			</div>
			<div className="space"></div>
		</div>
	);
}
/*return (
	<div id="teamMembersPage-wrap">
		<div className="space" id="initTrigger"></div>
		<div className="single-team-member-andHeader">
			<h1>TEAM MEMBERS</h1>
		</div>
		<div className="single-team-member-andHeader">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>GABRIELE DI GIORGIO</h3>
				<h4>Team Manager</h4>
				<p></p>
			</div>
		</div>
		<div className="single-team-member-andHeader">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>DAMIANO LIVONI</h3>
				<h4>Design Engineer</h4>
				<p></p>
			</div>
		</div>
		<div className="single-team-member-andHeader">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>ARTURO SERPICO</h3>
				<h4>Design Engineer</h4>
				<p></p>
			</div>
		</div>
		<div className="single-team-member-andHeader">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>LEONARDO ZUCCHINI</h3>
				<h4>Manufacturing Engineer</h4>
				<p></p>
			</div>
		</div>
		<div className="single-team-member-andHeader">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>ADRIANO ROGGERO</h3>
				<h4>Graphic Designer</h4>
				<p></p>
			</div>
		</div>
		<div className="single-team-member-andHeader">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>EMMA BONELLI</h3>
				<h4>Resource Manager</h4>
				<p></p>
			</div>
		</div>
		<div className="single-team-member-andHeader" id="endTGsap">
			<div>
				<img href="https://via.placeholder.com/150" alt="placeholder" />
				<h3>LORENZO TESSITORE</h3>
				<h4>Resource Manager</h4>
				<p></p>
			</div>
		</div>
		<div className="space"></div>
	</div>
);*/
