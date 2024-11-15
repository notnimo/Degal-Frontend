import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './DegalLogo.css'

gsap.registerPlugin(ScrollTrigger);
export default function DegalLogo() {
    return (
        <>
            <svg id="logo" width="250mm" height="150mm" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                <g id="logo-shadow">
                    <path className="bigV" d="m183.638 26.357 5.098 4.96L125 93.321 61.264 31.316l5.098-4.959H25l100 97.286 100-97.286Z"/>
                    <text xmlSpace="preserve" x="86.353" y="44.295" transform="scale(.96927 1.0317)"><tspan x="86.353" y="44.295">DEGAL</tspan></text>
                    <path className="triangle" d="M146.746 55.797h-43.492L125 76.953z"/>
                </g>
                <path className="bigV" d="m183.638 26.357 5.098 4.96L125 93.321 61.264 31.316l5.098-4.959H25l100 97.286 100-97.286Z"/>
                <text xmlSpace="preserve" x="86.353" y="44.295" transform="scale(.96927 1.0317)"><tspan x="86.353" y="44.295">DEGAL</tspan></text>
                <path className="triangle" d="M146.746 55.797h-43.492L125 76.953z"/>
            </svg>
        </>
    );
}

//<svg id="logo" width="250mm" height="150mm" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
//<path id="bigV" d="m183.638 26.357 5.098 4.96L125 93.321 61.264 31.316l5.098-4.959H25l100 97.286 100-97.286Z"/>
//<text xml:space="preserve" x="86.353" y="44.295" transform="scale(.96927 1.0317)"><tspan x="86.353" y="44.295">DEGAL</tspan></text>
//<path className="triangle" d="M146.746 55.797h-43.492L125 76.953z"/>
//</svg>

//<g id="logo-shadow">
//    <path id="bigV" d="m183.638 26.357 5.098 4.96L125 93.321 61.264 31.316l5.098-4.959H25l100 97.286 100-97.286Z"/>
//    <text xml:space="preserve"><tspan x="86.353" y="44.295">DEGAL</tspan></text>
//    <path className="triangle" d="M146.746 55.797h-43.492L125 76.953z"/>
//</g>

//<svg id="logo" width="1000px" height="1000px" viewBox="0 0 210 297" xmlns="http://www.w3.org/2000/svg">
//            <defs>
//                <path id="a" d="M383.492 781.14h52.148v31.948h-52.148z"/>
//            </defs>
//            <path d="m165.164 149.493 5.23 5.23L105 220.118l-65.394-65.395 5.23-5.23H2.398L105 252.096l102.602-102.603Z"/>
//            <text xml:space="preserve" x="63.754" y="161.513" transform="scale(.95602 1.046)"><tspan x="63.754" y="161.513">DEGAL</tspan></text>
//            <path className="triangle" d="M127.57 178.898H82.43l22.57 22.57z"/>
//            </svg>