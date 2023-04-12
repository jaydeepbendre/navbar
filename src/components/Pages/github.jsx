import React from 'react';
import './github.css';
import githublogo from './Assets/githublogo.png'

function github() {
  return (
    <div className="githubbody">
      <a href="https://movietitles.netlify.app/">
        <img src={githublogo} alt="error" class="githublogo" />
      </a>
      <div class="sign">
        <p>Sign in to GitHub</p>
      </div>
      <div class="box1">
        <div class="user">
          <p>Username or email address</p>
          <input type="text" placeholder="" class="githubinput"/>
          <p>Password<a href="https://movietitles.netlify.app/">Forgot password?</a></p>
          <input type="text" placeholder="" class="githubinput"/>
        </div>
        <div class="button">
          <input type="submit" value="Sign in" class="githubinput"/>
        </div>
      </div>

      <div class="box2">
        <p>New to GitHub? <a href="https://movietitles.netlify.app/">Create an account.</a></p>

      </div>

      <div class="term">

        <a href="https://movietitles.netlify.app/">Terms</a>
        <a href="https://movietitles.netlify.app/">Privacy</a>
        <a href="https://movietitles.netlify.app/">Security</a>
        <a href="https://movietitles.netlify.app/">Contact GitHub</a>
      </div>

    </div>
  )
}
export default github;