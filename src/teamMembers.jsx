import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './teamMembers.css'

gsap.registerPlugin(ScrollTrigger);

export default function TeamMembers(){
    return(
        <div id="teamMembersPage-wrap">
            <h1>TEAM MEMBERS</h1>
            <div id="team-members-wrap">
                <div className="single-team-member">GABRIELE DI GIORGIO</div>
                <div className="single-team-member">DAMIANO LIVONI</div>
                <div className="single-team-member">ARTURO SERPICO</div>
                <div className="single-team-member">LEONARDO ZUCCHINI</div>
                <div className="single-team-member">EMMA BONELLI</div>
                <div className="single-team-member">LORENZO TESSITORE</div>
                <div className="single-team-member">ADRIANO ROGGERO</div>
            </div>
        </div>
    );
}