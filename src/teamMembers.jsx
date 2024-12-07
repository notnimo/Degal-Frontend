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
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>GABRIELE DI GIORGIO</h3>
                </div>
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>DAMIANO LIVONI</h3>
                </div>
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>ARTURO SERPICO</h3>
                </div>
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>LEONARDO ZUCCHINI</h3>
                </div>
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>ADRIANO ROGGERO</h3>
                </div>
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>EMMA BONELLI</h3>
                </div>
                <div className="single-team-member">
                    {/*<img src="" alt="" />*/}
                    <h3>LORENZO TESSITORE</h3>
                </div>
            </div>
        </div>
    );
}