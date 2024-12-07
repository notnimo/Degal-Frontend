import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './DegalLogo.css'

gsap.registerPlugin(ScrollTrigger);
export default function DegalLogo() {
    useGSAP(() => {
        let scrollTrigger = {
            scrub: 1,
            trigger: '#degal-frontpage-logo',
            start: 'top top',
            end: '+=5000'
        }
        gsap.to('#degal-frontpage-logo', {
            scrollTrigger: scrollTrigger,
            scale: 40,
        });
        gsap.to('#degal-frontpage-logo>text', {
            scrollTrigger: scrollTrigger,
            y: -150,
            opacity: 0
        });
        gsap.to('#degal-frontpage-logo>path.frontpage-logo-bigV-symbol', {
            scrollTrigger: scrollTrigger,
            y: 150,
            opacity: 0
        });
    });

    return (
        <>
            <svg id="degal-frontpage-logo" width="250mm" height="150mm" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                <path className="frontpage-logo-bigV-symbol" d="m183.638 26.357 5.098 4.96L125 93.321 61.264 31.316l5.098-4.959H25l100 97.286 100-97.286Z"/>
                <text xmlSpace="preserve" x="86.353" y="44.295" transform="scale(.96927 1.0317)"><tspan x="86.353" y="44.295">DEGAL</tspan></text>
                <path className="frontpage-logo-triagle" d="M146.746 55.797h-43.492L125 76.953z"/>
            </svg>
        </>
    );
}