import React from 'react';
import NavBar from './navBar';
import './Contact.css';

function Contact() {
  return (
    <div>
      <NavBar />
      <div className="create5">
        <div className="content-container">
          <h1>Contact</h1>
          <p>
            Welcome to our Fitness and Workout Tracker website! We are thrilled that you are considering joining our community of fitness enthusiasts. This is a place where people come to work hard, sweat, and achieve their health and fitness goals. Whether you are a seasoned athlete or a beginner, we have something for everyone.

            We believe that fitness is not just about physical strength, but also mental and emotional well-being. That's why we strive to create a welcoming and inclusive environment where everyone feels comfortable and supported.

            When you start feeling the pain, that’s when Everything Starts! You are the only difference between Fit and Fat. Move your body and make your body a reflection of your confidence. No Pain, No Gain!
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, please feel free to contact us. We are here to help you on your fitness journey.
          </p>

          <ul>
            <li>Email: info@fitnesswebsite.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Fitness Street, Workout City, WZ 56789</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
