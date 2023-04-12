import React from 'react';
import './netflix.css';
import NetflixHLogo from './Assets/NetflixHLogo.png'

function Netflix() {
    return (
        <div class="black"> 
        <div className="netflixbody">

            <div class="logo">
                <img src ={NetflixHLogo} alt="logo" class="netflixlogo"/>
            </div>
            <div id="full">
                <div id="signinform">
                    <div id="loginformmain">
                        <h1> Sign in</h1>
                        <div class="typebox">
                            <input type="text" placeholder="Email or phone number" />
                        </div>
                        <div class="typebox">
                            <input type="password" placeholder="Password" />
                        </div>
                        <div id="redsignin">
                            <input type="submit" value="Sign In" />
                        </div>
                    </div>
                    <div class="checkboxblock">
                        <div>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>
                        <a href="https://movietitles.netlify.app/">Need help?</a>
                    </div>
                    <div class="moreinfo">
                        <div>
                            <span>New to Netflix?</span>
                            <a href="https://movietitles.netlify.app/" > Sign up now</a>
                        </div>
                        <div>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                            <a href="https://movietitles.netlify.app/"> Learn more.</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>

    );
}

export default Netflix;