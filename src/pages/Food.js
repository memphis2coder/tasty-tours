import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';

import '../styles/Food.scss';

export default function Food() {

    let black = useRef(null);
    let title = useRef(null);
    let text = useRef(null);

    useEffect(() => {
        gsap.from(black, {
            y: '-100vw',
            duration: 1.5,
            delay: 0.2,
            opacity: 0,
            ease: "power3.inOut",
        })
        gsap.from(title, {
            y: 50,
            duration: 1,
            delay: 1.3,
            opacity: 1,
            ease: "power3.inOut",
        })
        gsap.from(text, {
            y: 100,
            duration: 1,
            delay: 1.5,
            opacity: 1,
            ease: "power3.inOut",
        })
    })



    return (
        <div className="food">
            <div className="container">
                <div className="left-container">
                    <div ref={el => {black =el}} className="left-container-inner">
                        <div className="text-content">
                            <h2 ref={el => {title =el}}>Drinks and Food are Included</h2>
                            <div ref={el => {text =el}} className="bullets">
                            <ul>
                                <li>A fun & memorable tastings tour, uncovering some hidden gems of where to dine later.</li>
                                <li>Ideal for local & Visitors. A wonderful & fun way to learn the history of the city</li>
                                <li>Experience the best restaurants for one price.</li>
                                <li>Meet new friends, what a great way for a group outing</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-container-inner">
                        <div className="right-text-content">
                                <h2>Here's the Scoop</h2>
                                <h3> Whats includes:</h3>
                                <ul>
                                    <li>Bottled Water</li>
                                    <li>Food Tour Guide</li>
                                    <li>Our Insider’s Guide</li>
                                    <li>Four to Five Food Portions</li>
                                    <li>Historic & Architectural</li>
                                    <li>Eatery Gratuities</li>
                                </ul>
                                <h3> Key Details:</h3>
                                <ul>
                                    <li>Price: $70</li>
                                    <li>Age: 13 & under are FREE</li>
                                    <li>Every Week: Wed-Sun</li>
                                    <li>2-14 Guests per Group</li>
                                    <li>Duration: 3 – 3.5 hrs</li>
                                    <li>Tour Rain or Shine</li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

