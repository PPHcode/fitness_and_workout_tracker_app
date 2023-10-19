import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeMain.css'
// import google from '../images/google.png'
// import apple from '../images/apple.png'
// import fb from '../images/fb.png'

function HomeMain() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCreateAccount = () => {
    // Handle the logic for creating the account here
    // For example, you can send a request to your API to create the account

    // After creating the account, navigate to the "/home" route
    navigate('/home');
  };
  return (

    <div className='main'>
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>

      <div class="create">

        <div class="content-container">
          <h1>Empowering Your Fitness Journey....</h1>
          <p>
            Welcome to our Fitness and Workout Tracker website! We are thrilled that you are considering joining our community of fitness enthusiasts. This is a place where people come to work hard, sweat, and achieve their health and fitness goals. Whether you are a seasoned athlete or a beginner, we have something for everyone.....

            We believe that fitness is not just about physical strength, but also mental and emotional well-being. That's why we strive to create a welcoming and inclusive environment where everyone feels comfortable and supported.

            When you start feeling the pain, that’s when Everything Starts!
            You are the only difference between Fit and Fat. Move your body and make your body a reflection of your confidence.
            No Pain, No Gain!</p>
        </div>
      </div>

      <div className='create2'>
        {/* <SideContainer imageDimensions="/frame8.svg" /> */}
        <div className='content'>
          <h2 className='title'>Create Account</h2>

          <input className='input' type="text" placeholder="Username*" name="username" required />
          <input className='input' type="password" placeholder="Password*" name="password" required />
          <button classname='btn' onClick={handleCreateAccount}>Log In</button>
          <a className='link' href=''>Already have an Account? Log in</a>
          <div className='media'>
            {/* <img className='mediaicon' src= {google}></img>
            <img className='mediaicon' src= {apple}></img>
            <img className='mediaicon fb' src= {fb}></img> */}
          </div>
          <p className='ref'>-or Create Account Via Email-</p>
        </div>
      </div>
    </div>
  )
}

export default HomeMain
