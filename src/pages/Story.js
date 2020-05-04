import React, {useRef, useEffect} from 'react'
import gsap from 'gsap';

import '../styles/Story.scss';

import pic from '../images/food.jpg';
import pic2 from '../images/food2.jpg';

export default function Story() {

// DOM nodes
let photo1 = useRef(null);
let photo2 = useRef(null);

useEffect(() => {
    fadeInUp([photo1, photo2])
})

const fadeInUp = (node1, node2) => {
    gsap.from([node1, node2], {
        y: 60,
        duration: 1,
        delay: 0.2,
        opacity: 0,
        ease: "power3.inOut",
        scale: 1.6,
        stagger: {
            amount: 0.3
        }
    });
};


    return (
        <div className="story">
            <div className="container">
                <div className="story-inner">
                    <div className="story-content">
                        <div className="story-content-inner">
                        <h1>Our Story</h1>
                        <p>Our tours are conducted by knowledgeable locals who are enthusiastic about the area and are committed to making this a fun, memorable experience.</p>
                        <p>Make sure to bring your appetite for adventure as we explore not only the behind-the-scenes restaurant action, but also embark on a walking journey that highlights the history, architecture, and culture.</p>
                        </div>
                    </div>
                    <div className="story-images">
                        <div className="story-images-inner">
                            <div className="story-image one">
                                <img ref={el => (photo1 = el)} src={pic} alt="one" />
                            </div>
                            <div className="story-image two">
                                <img ref={el => (photo2 = el)} src={pic2} alt="two" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

