import React from 'react'

import './Locations.scss';

import DC from '../../images/DC.jpg';
import LA from '../../images/LA.jpg';
import NO from '../../images/NO.jpg';
import NYC from '../../images/NYC.jpg';

const cities = [
  {name: 'DC', images: DC},
  {name: 'LA', images: LA},
  {name: 'NO', images: NO},
  {name: 'NYC', images: NYC},
]

export default function Locations() {
    return (
        <div className="locations">
            <ul className="list">
                <li className="first"><strong>LOCATIONS:</strong></li>
                <li><a>LOS ANGELES</a></li>
                <li><a>NEW ORLEANS</a></li>
                <li><a>WASHINGTON D.C.</a></li>
                <li><a>NYC</a></li>
            </ul>
        </div>
    )
}


