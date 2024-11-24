import React from "react"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhoAreWe.css'

gsap.registerPlugin(ScrollTrigger);

export default function WhoAreWe() 
{
    useGSAP(() => {
        gsap.from('#WhoAreWe', {
            scrollTrigger: {
                start: '50% top',
                end: '+=4500',
                scrub: 1,
                trigger: '#WhoAreWe'
            },
            opacity: 0,
            translateX: -200,
        });
    });

    return (
        <div id="WhoAreWe">
            <h1>Who are we?</h1>
            <p>
            Vestibulum placerat neque ac tellus accumsan consectetur ut quis eros. Curabitur accumsan tincidunt tortor non dapibus. Vivamus odio odio, lacinia ac malesuada at, lobortis quis nisi. Aliquam tempor tortor quis semper fermentum. Ut ultricies id augue sed posuere. Phasellus eu ullamcorper justo. Fusce at risus venenatis, luctus leo ac, interdum erat. Maecenas non lectus quis tellus vehicula laoreet quis sed eros. Nullam eu luctus dolor, nec dictum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec nisl elit. In nec odio eleifend, ultrices neque quis, ultrices nunc. In hac habitasse platea dictumst. Sed quis risus risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempus, risus vitae molestie porttitor, tellus nibh lacinia ante, a dapibus ipsum mi eu ex.
            </p>
        </div>
    );
}