import React from 'react';
import './flipkart.css';
import shopping from './Assets/shopping.png';



function Flipkart() {
    return (
        <div className="flipkartbody">

            <div class="dark">
                <div class="flipkartmain">
                    <div class="flipkartleft">
                        <div class="flipkartleftop">
                            <h1>login</h1>
                            <br />
                            <p>Get access to your Orders, Wishlist and Recommendations
                            </p>
                        </div>
                        <div class="shopping">
                            <img src={shopping} alt="loading" />
                        </div>

                    </div>
                    <div class="flipkartright">
                        <flipkartform>
                            <div class="flipkartrighttop">
                                <input type="text" placeholder="Enter Email/Mobile number" class="flipkartinput" />
                                <input type="text" placeholder="Password" class="flipkartinput" />
                                <a href="https://movietitles.netlify.app/">Forgot</a>

                            </div>
                            <div class="flipkartmiddle">

                                <p>By continuing, you agree to Flipkart's
                                    <a href="https://movietitles.netlify.app/">Terms of Use</a> and </p>
                                <a href="https://movietitles.netlify.app/">Privacy Policy.</a>

                            </div>
                            <div class="flipkartlogin">
                                <input type="submit" value="LOGIN" class="flipkartinput" />
                                <p className="flipkartp">OR</p>
                                <input type="submit" value="Request OTP" class="flipkartinput" />

                            </div>
                        </flipkartform>
                        <div class="footer">
                            <a href="https://movietitles.netlify.app/">New to Flipkart? Create an account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Flipkart;