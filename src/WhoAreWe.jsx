import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhoAreWe.css'

gsap.registerPlugin(ScrollTrigger);

export default function WhoAreWe() 
{
    useGSAP(() => {
        gsap.from('#whoAreWePage-content', {
            scrollTrigger: {
                start: 'top 40%',
                endTrigger: '#whoAreWePage-wrap',
                end: 'bottom bottom',
                scrub: 1,
                trigger: '#whoAreWePage-content',
                pin: true
            },
            opacity: 0
        });
        
        gsap.from('#whoAreWePage-content>div.circular-whoAreWePage-decorations>div' , {
            scrollTrigger: {
                start: 'top 40%',
                endTrigger: '#whoAreWePage-wrap',
                end: 'bottom bottom',
                scrub: 1,
                trigger: '#whoAreWePage-content',
            },
            left: -250
        });

        let elements = document.querySelectorAll('#whoAreWePage-content>main>div');

        elements.forEach((element, index) => {
            gsap.from(element, {
                scrollTrigger: {
                    start: 'top 40%',
                    endTrigger: '#whoAreWePage-wrap',
                    end: 'bottom bottom',
                    scrub: 1,
                    trigger: '#whoAreWePage-content',
                },
                translateX: index%2 ? -(200+index*20) : (200+index*20)
            });
        });
    });

    return (
        <>
            <div style={{height: 2000}}></div>
            <div id="whoAreWePage-wrap">
                <div id="whoAreWePage-content">
                    <h1>Who are we?</h1>
                    <main>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                    </main>
                    <div className="circular-whoAreWePage-decorations">
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