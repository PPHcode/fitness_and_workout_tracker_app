import React from 'react';
import './News.css';
import NavBar from './navBar';

function News() {
  return (
    <div>
      <NavBar />
      <div className="create7">
        <div className="content-container">
          <h1>News</h1>
          <div className="news-item">
            <h2>Exciting Announcement!</h2>
            <p>
              We are thrilled to announce the launch of our new fitness program! Starting next month, we will be offering specialized training sessions led by professional trainers. Get ready to challenge yourself and achieve your fitness goals like never before.
            </p>
            <p className="date">Published on October 20, 2023</p>
          </div>

          <div className="news-item">
            <h2>Healthy Eating Workshop</h2>
            <p>
              Join us this weekend for a workshop on healthy eating habits and nutrition. Our nutrition experts will share valuable insights and practical tips to help you maintain a balanced diet. Don't miss this opportunity to learn and improve your overall well-being.
            </p>
            <p className="date">Published on October 15, 2023</p>
          </div>

          <div className="news-item">
            <h2>Community Fitness Challenge</h2>
            <p>
              We are organizing a community fitness challenge next month! Participate in various fitness activities, compete with others, and win exciting prizes. It's a great way to stay motivated, have fun, and improve your fitness level. Stay tuned for more details!
            </p>
            <p className="date">Published on October 10, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
