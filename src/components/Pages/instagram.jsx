import React from 'react';
import './instagram.css';
import side from './Assets/side.png';
import play from './Assets/play.png';
import logo from './Assets/logo.png';
import micro from './Assets/micro.png';
import fb from './Assets/fb.png';


function Instagram() {
  return (
    <div className="instabody">
      <div className="main">
        <div className="left">
          <img src={side} alt="loading" />
        </div>
        <div className="right">
          <div className="container">
            <div className="insta">
              <img src={logo} alt="instalogo" />
            </div>
            <div className="form">
              <input type="text" placeholder="Phone number, username, or email" />
              <input type="password" placeholder="Password" />
              <div className="login">
                <input type="submit" value="Log in" />
              </div>
            </div>
            <div className="middle">
              <br />
              <div className="or">
                <p> <hr /> OR <hr /></p>
              </div>

              <div className="fblog">
                <img src={fb} alt="fblogo" />
                <a style={{ fontWeight: 500 }} href="#">Log int with Facebook</a>
              </div>
              <br />
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="box2">
            <p>Don't have an account? <a href="#">Sign up</a></p>
          </div>

          <div className="bottom">
            <p>Get the app.</p>
            <a href="#">
              <img src={play} alt="no" />
            </a>
            <a href="#">
              <img src={micro} alt="no" />
            </a>
          </div>

        </div>
      </div>
      <div className="footer">
        <div className="line">
          <a href="#"> Meta</a>
          <a href="#"> About</a>
          <a href="#"> Blog</a>
          <a href="#"> Jobs</a>
          <a href="#"> Help</a>
          <a href="#"> API</a>
          <a href="#"> Privacy</a>
          <a href="#"> Terms</a>
          <a href="#"> Top Accounts</a>
          <a href="#"> Locations</a>
          <a href="#"> Instagram Lite</a>
          <a href="#"> Contact Uploading & Non-Users</a>
        </div>
        <div className="lan">
          <select name="Language" id="Language">
            <option>English</option>
            <option>Marathi</option>
            <option>Hindi</option>
            <option>Bangla</option>
            <option>Kannada</option>
          </select>

          <p>© 2023 Instagram from Meta</p>
        </div>

      </div>
      </div>
  );
}

export default Instagram;
