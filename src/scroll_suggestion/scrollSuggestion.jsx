import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ScrollSuggestion.css'

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSuggestion() {
    useGSAP(() => {
        gsap.to('#scroll', {
            scrollTrigger: {
                scrub: 0.5,
                trigger: '#scroll',
                start: '-550 top',
                end: '+=100'
            },
            opacity: 0
        })
        gsap.to('#top-arrow', {
            translateY: 15,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        })
        gsap.to('#bottom-arrow', {
            translateY: 25,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 0.3
        })
    }) 
    return (
        <div id="scroll">
            <svg id="arrows" width="100px" height="100px" viewBox="0 0 210 220" xmlns="http://www.w3.org/2000/svg">
                <path id="bottom-arrow" d="M206.404 89.877h-35.58L105 155.702 39.175 89.877H3.597L105 191.28Z"/>
                <path id="top-arrow" d="M206.404 39.175h-35.58L105 105 39.175 39.175H3.597L105 140.58Z"/>
            </svg>
            <p> scroll down </p>
        </div>
    );
}