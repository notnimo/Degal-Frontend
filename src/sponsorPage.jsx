import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './sponsorPage.css'

gsap.registerPlugin(ScrollTrigger);

export default function sponsorDisplay(){


    return(
        <div id="sponsorPage-wrap">
            <h1>OUR SPONSORS</h1>
            <div id="sponsors-wrap">
                <div id="macron-sponsor"></div>
                <div id="cosmo3d-sponsor"></div>
                <div id="infDelBorgo-sponsor"></div>  
            </div>
        </div>
    );
}