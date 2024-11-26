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
                start: 'top 40%',
                endTrigger: '#WhoAreWe-wrap',
                end: 'bottom bottom',
                scrub: 1,
                trigger: '#WhoAreWe',
                pin: true
            },
            opacity: 0
        });
        
        let temp = document.querySelectorAll('#WhoAreWe>div.decorations>div');

        gsap.from('#WhoAreWe>div.decorations>div' , {
            scrollTrigger: {
                start: 'top 40%',
                endTrigger: '#WhoAreWe-wrap',
                end: 'bottom bottom',
                scrub: 1,
                trigger: '#WhoAreWe',
            },
            left: -250
        });

        let elements = document.querySelectorAll('#WhoAreWe>main>div');

        elements.forEach((element, index) => {
            gsap.from(element, {
                scrollTrigger: {
                    start: 'top 40%',
                    endTrigger: '#WhoAreWe-wrap',
                    end: 'bottom bottom',
                    scrub: 1,
                    trigger: '#WhoAreWe',
                },
                translateX: index%2 ? -(200+index*20) : (200+index*20)
            });
        });
    });

    return (
        <>
            <div style={{height: 2000}}></div>
            <div id="WhoAreWe-wrap">
                <div id="WhoAreWe">
                    <h1>Who are we?</h1>
                    <main>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                        <div>hello</div>
                    </main>
                    <div className="decorations">
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

//Vestibulum placerat neque ac tellus accumsan consectetur ut quis eros. Curabitur accumsan tincidunt tortor non dapibus. Vivamus odio odio, lacinia ac malesuada at, lobortis quis nisi. Aliquam tempor tortor quis semper fermentum. Ut ultricies id augue sed posuere. Phasellus eu ullamcorper justo. Fusce at risus venenatis, luctus leo ac, interdum erat. Maecenas non lectus quis tellus vehicula laoreet quis sed eros. Nullam eu luctus dolor, nec dictum ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc nec nisl elit. In nec odio eleifend, ultrices neque quis, ultrices nunc. In hac habitasse platea dictumst. Sed quis risus risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed tempus, risus vitae molestie porttitor, tellus nibh lacinia ante, a dapibus ipsum mi eu ex.