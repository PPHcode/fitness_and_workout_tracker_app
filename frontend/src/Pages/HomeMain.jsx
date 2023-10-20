import React from 'react'
import { useNavigate } from 'react-router-dom';
import './HomeMain.css'
import NavBar from './navBar';


function HomeMain() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCreateAccount = () => {

    navigate('/home');
  };
  return (

    <div className='main'>
      <NavBar/>

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
        
        <div className='content'>
          <h2 className='title'>Create Account</h2>

          <input className='input' type="text" placeholder="Username*" name="username" required />
          <input className='input' type="password" placeholder="Password*" name="password" required />
          <button classname='btn' onClick={handleCreateAccount}>Log In</button>
          <a className='link' href=''>Already have an Account? Log in</a>
          <div className='media'>
            
          </div>
          <button className='ref'onClick={handleCreateAccount} >-or Create Account Via Email-</button>
        </div>
      </div>

      

    </div>
  )
}

export default HomeMain
