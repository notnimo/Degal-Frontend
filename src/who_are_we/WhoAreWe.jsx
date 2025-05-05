import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhoAreWe.css";

gsap.registerPlugin(ScrollTrigger);

export default function WhoAreWe() {
	useGSAP(() => {
		gsap.from("#whoAreWePage-content", {
			scrollTrigger: {
				start: "top 40%",
				endTrigger: "#whoAreWePage-wrap",
				end: "bottom bottom",
				scrub: 1,
				trigger: "#whoAreWePage-content",
				pin: true,
			},
			opacity: 0,
		});

		gsap.from(
			"#whoAreWePage-content>div.circular-whoAreWePage-decorations-left>div",
			{
				scrollTrigger: {
					start: "top 40%",
					endTrigger: "#whoAreWePage-wrap",
					end: "bottom bottom",
					scrub: 1,
					trigger: "#whoAreWePage-content",
				},
				left: -250,
			}
		);

		gsap.from(
			"#whoAreWePage-content>div.circular-whoAreWePage-decorations-right>div",
			{
				scrollTrigger: {
					start: "top 40%",
					endTrigger: "#whoAreWePage-wrap",
					end: "bottom bottom",
					scrub: 1,
					trigger: "#whoAreWePage-content",
				},
				left: 1900,
			}
		);

		let elements = document.querySelectorAll(
			"#whoAreWePage-content>main>div"
		);

		elements.forEach((element, index) => {
			gsap.from(element, {
				scrollTrigger: {
					start: "top 40%",
					endTrigger: "#whoAreWePage-wrap",
					end: "bottom bottom",
					scrub: 1,
					trigger: "#whoAreWePage-content",
				},
				translateX: index % 2 ? -(200 + index * 20) : 200 + index * 20, //to set the direction from witch the paragraphs come from
			});
		});
	});

	return (
		<>
			<div style={{ height: 2000 }}></div>
			<div id="whoAreWePage-wrap">
				<div id="whoAreWePage-content">
					<h1>Who are we?</h1>
					<main>
						<div>
							We are a team of high school students competing in
							F1 in Schools,
							<br /> a competition in which you have to create a
							F1 team and administer it under <br /> many aspects,
							like engineering or marketing.
						</div>
						<div>
							With passion and hard work, we managed to qualify to
							the Regional Finals, <br /> a great achievement that
							will make our level of competitiveness rise.
						</div>
						<div className="par-int">Mission</div>
						<div>
							Involving and making the project known to as many
							people as possible <br />
							from our point of view means not only telling a
							story, but building a bond <br />
							that can inspire and make each individual feel part
							of something special.
							<br />
							It is an invitation to share a vision that
							transcends the boundaries <br />
							of a simple competition, to transform into a
							movement that enhances talents, <br />
							promotes collaboration and generates a positive
							impact.
						</div>
						<div className="par-int">Vision</div>
						<div>
							Our vision for F1 in Schools is an extraordinary
							journey, <br />
							full of exciting challenges and increasingly
							significant milestones, which allow us <br />
							to grow and improve, both as individuals and as a
							team. So far, <br />
							we have demonstrated determination and competence,
							passing the Regional Qualifiers <br />
							and earning a place in the Regional Finals. This
							result further motivates us <br />
							to give our best and believe in our dreams.
						</div>
					</main>
					<div className="circular-whoAreWePage-decorations-left">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="circular-whoAreWePage-decorations-right">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</>
	);
}
