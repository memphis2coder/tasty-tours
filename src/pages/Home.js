import React, {useRef} from 'react'
import gsap from 'gsap';

import '../styles/Home.scss';

import Banner from '../components/banner/Banner';

import DC from '../images/DC.jpg';
import LA from '../images/LA.jpg';
import NO from '../images/NO.jpg';
import NYC from '../images/NYC.jpg';

export default function Home() {
    // DOM NODE
    let cityBackground = useRef(null);

    const cities = [
    {name: 'Washington DC', image: DC},
    {name: 'Los Angeles', image: LA},
    {name: 'New Orleans', image: NO},
    {name: 'New York City', image: NYC},
    ]

    const handleCity = city => {
        gsap.to(cityBackground, {
            duration: 0,
            background: `url(${city}) center center`
        });
        gsap.to(cityBackground, {
            opacity: .9,
            duration: 0.4,
            ease: 'power3.inOut'
        });
        gsap.to(cityBackground, {
            duration: 0.4,
            skeyY: 2,
            transformOrigin: 'right top'
        });
    };

    const offCity = () => {
        gsap.to(cityBackground, {
            opacity: 0,
            duration: 0
        })
    }

    return (
        <div className="home">
            <div ref={el => {cityBackground =el}} className="cityBackground"></div>
            <div className="container">
            <Banner />
                <div className="locations">
                    <ul className="list">
                        <li className="first"><strong>LOCATIONS:</strong></li>
                        {cities.map(el => 
                            (<li><a key={el.name} onMouseEnter={() => handleCity(el.image)} onMouseLeave={offCity}>{el.name}</a></li>))}
                    </ul>
                </div>
            </div>
            
        </div>
    )
};
