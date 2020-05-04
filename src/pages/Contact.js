import React from 'react'

import '../styles/Contact.scss';

export default function Contact() {
    return (

        <div className="contact">
            <div className="container">
                    <div className="contact-form">
                    <h1>Get in Touch</h1>
                    <p>Please fill out the form and we will be in touch ASAP.</p>
                        <form>
                            <div className="input-fields">
                                <input type="text" name="name"placeholder="Name" />
                                <input type="text" name="email"placeholder="Email Address" />
                                <input type="text" name="phone"placeholder="Phone Number" />
                            </div>
                            <br/>
                            <div className="message">
                                <textarea name="Message" placeholder="Message"></textarea>
                                <br/>
                                <button>Send</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    )
}

