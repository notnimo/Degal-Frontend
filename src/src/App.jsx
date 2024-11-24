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
    useGSAP(() => {
        //let tl = gsap.timeline({
        //    scrollTrigger: {
        //        scrub: 1,
        //        trigger: '#logo',
        //        start: "-200px top",
        //        //endTrigger: 'body',
        //        end: "+=5000"
        //    }
        //});

        //let scrollTrigger = {
        //    scrub: 1,
        //    trigger: '#logo',
        //    start: "-100px top",
        //    //endTrigger: 'body',
        //    end: "+=5000"
        //}
        //gsap.to('#logo', {
        //    scrollTrigger: scrollTrigger,
        //    scale: 30
        //});
        //gsap.to('#logo>text, #logo-shadow>text', {
        //    scrollTrigger: scrollTrigger,
        //    y: -150,
        //});
        //gsap.to('#logo>path.bigV, #logo-shadow>path.bigV', {
        //    scrollTrigger: scrollTrigger,
        //    y: 150,
        //});
        
    });
    return (
        <>
            <ScrollSuggestion />
            <DegalLogo />
            <WhoAreWe />
            <div className="spacer" />
        </>
    );
}
//<DegalLogo />
//<div id="spacer" className="spacer" />