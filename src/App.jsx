import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DegalLogo from './DegalLogo'
import ScrollSuggestion from './scrollSuggestion'
import WhoAreWe from './WhoAreWe'
import './App.css'

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function App(props) {
    return (
        <>
            <ScrollSuggestion />
            <DegalLogo />
            <WhoAreWe />
            <div className="spacer" />
        </>
    );
}