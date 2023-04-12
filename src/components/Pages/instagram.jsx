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
                <a style={{ fontWeight: 500 }} href="https://movietitles.netlify.app/">Log int with Facebook</a>
              </div>
              <br />
              <a href="https://movietitles.netlify.app/">Forgot password?</a>
            </div>
          </div>
          <div className="box2">
            <p>Don't have an account? <a href="https://movietitles.netlify.app/">Sign up</a></p>
          </div>

          <div className="bottom">
            <p>Get the app.</p>
            <a href="https://movietitles.netlify.app/">
              <img src={play} alt="no" />
            </a>
            <a href="https://movietitles.netlify.app/">
              <img src={micro} alt="no" />
            </a>
          </div>

        </div>
      </div>
      <div className="footer">
        <div className="line">
          <a href="https://movietitles.netlify.app/"> Meta</a>
          <a href="https://movietitles.netlify.app/"> About</a>
          <a href="https://movietitles.netlify.app/"> Blog</a>
          <a href="https://movietitles.netlify.app/"> Jobs</a>
          <a href="https://movietitles.netlify.app/"> Help</a>
          <a href="https://movietitles.netlify.app/"> API</a>
          <a href="https://movietitles.netlify.app/"> Privacy</a>
          <a href="https://movietitles.netlify.app/"> Terms</a>
          <a href="https://movietitles.netlify.app/"> Top Accounts</a>
          <a href="https://movietitles.netlify.app/"> Locations</a>
          <a href="https://movietitles.netlify.app/"> Instagram Lite</a>
          <a href="https://movietitles.netlify.app/"> Contact Uploading & Non-Users</a>
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
