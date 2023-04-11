import React from 'react';
import './skype.css';
import skypelogo from './Assets/skype/skype_logo.png'
import microsoftlogo from './Assets/skype/microsoft.svg'
import que from './Assets/skype/que.svg'
import key from './Assets/skype/key.svg'


function Skype() {
    return (
        <div className="skypebody">
            <div class="logo">
                <img src={skypelogo} alt="error" />
            </div>

            <div class="sbox1">
                <img src={microsoftlogo} alt="" />
                <div class="signin">
                    <p>Sign in</p>
                </div>
                <p>to continue to Skype</p>
                <input type="text" placeholder="Email, phone, or Skype" />
                <div class="noac">
                    <p>No account? <a href="#"> Create one!</a></p>
                </div>
                <div class="key">
                    <a href="#">Sign in with a security key </a>
                    <a href="#"><img src={que} alt="error" /></a>
                </div>
                <div class="button">
                    <input type="submit" value="Next" />
                </div>
            </div>
            <div class="sbox2">
                <img src={key} alt="error" />
                <div class="sigh"><p>Sign-in options</p></div>
            </div>
        </div>

    );
}

export default Skype;