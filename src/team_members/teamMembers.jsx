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
