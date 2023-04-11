import React from 'react';
import './github.css';
import githublogo from './Assets/githublogo.png'

function github() {
  return (
    <div className="githubbody">
      <a href="#">
        <img src={githublogo} alt="error" class="githublogo" />
      </a>
      <div class="sign">
        <p>Sign in to GitHub</p>
      </div>
      <div class="box1">
        <div class="user">
          <p>Username or email address</p>
          <input type="text" placeholder="" class="githubinput"/>
          <p>Password<a href="#">Forgot password?</a></p>
          <input type="text" placeholder="" class="githubinput"/>
        </div>
        <div class="button">
          <input type="submit" value="Sign in" class="githubinput"/>
        </div>
      </div>

      <div class="box2">
        <p>New to GitHub? <a href="#">Create an account.</a></p>

      </div>

      <div class="term">

        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Security</a>
        <a href="#">Contact GitHub</a>
      </div>

    </div>
  )
}
export default github;