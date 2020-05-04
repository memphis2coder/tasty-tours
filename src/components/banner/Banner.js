import React, { useRef, useEffect } from 'react'
import gsap from 'gsap';

import './Banner.scss';

export default function Banner() {

    // vars for out DOM nodes for animations
    let text = useRef(null);

    useEffect(() => {
        gsap.from(text, {
            y: 60,
            duration: 1,
            delay: 0.1,
            opacity: 0,
            ease: "power3.inOut",
        });
    });
    
    
        return (
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="line">
                            <h1 className="banner-title">Make each meal your masterpiece.</h1>
                            <p ref={el => (text = el)}  className="banner-text">Plan your whole afternoon or evening with a <strong>tour</strong>, activities, and <strong>food</strong>.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
}
