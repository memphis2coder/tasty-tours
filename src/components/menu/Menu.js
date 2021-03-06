import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom';
import gsap from 'gsap';

import './Menu.scss';

export default function Menu({state}) {
    // vars for our DOM nodes for animations
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let info = useRef(null);


    useEffect(() => {
        if (state.clicked === false) {
            // close the menu
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            });
        } else if (state.clicked === true || state.clicked === true && state.clicked === null) {
            // open the menu
            gsap.to(menu, {
                duration: 0,
                css: {display: "block"}
            });
            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info);
            staggerLinks(line1, line2, line3);
        }
    }, [state]);

    // function for stagger animation
    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: "right top",
            skewY: 2,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        });
    };

    // animations for the 3 links
    const staggerLinks = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: 0.8,
            y: 100,
            delay: 0.1,
            ease: "power3.InOut",
            stagger: {
                amount: 0.3
            }
        });
    };

    // fadeInUp animation
    const fadeInUp = node => {
        gsap.from(node, {
            y: 60,
            duration: 1,
            delay: 0.2,
            opacity: 0,
            ease: "power3.inOut"
        });
    };

    return (
        <div ref={el => (menu = el)} className="menu">
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-color"></div> 
            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="container"> 
                    <div className="menu-links">
                        <nav>
                            <ul>
                                <li ref={el => (line1 = el)}>
                                    <Link to='/story'>Our Story</Link>
                                </li>
                                <li ref={el => (line2 = el)}>
                                    <Link to='/food'>Foods</Link>
                                </li>
                                <li ref={el => (line3 = el)}>
                                    <Link to='/contact'>Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                        <div ref={el => (info = el)} className="info">
                            <h3>Are food tours worth it?</h3>
                            <p>Food tours are worth booking because food is such a big part of what makes the culture the way it is…and they're so much fun!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
