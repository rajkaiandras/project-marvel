import React from 'react';

// assets
import profilePhoto from '../../assets/images/profile-photo.webp';

// styles
import './AboutMe.css';

export const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="profile-card">
        <div className="head-container">
          <img className="profile-photo" src={profilePhoto} alt="profile" />
          <h1 className="profile-name">
            <span className="initialize">A</span>ndrás{' '}
            <span className="initialize">R</span>ajkai
          </h1>
          <h4 className="profession">Frontend Developer</h4>
          <h6 className="profession-detail">Building UIs with React.js</h6>
        </div>
        <div className="social-icons">
          <a href="http://www.linkedin.com/in/andrasrajkai">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:rajkaiandras@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
        <hr />
        <div className="skills-container">
          <h2 className="skills-title">My skills</h2>
          <div className="skills-list">
            <div className="skill">
              <h3 className="skill-title">Social competencies</h3>
              <ul>
                <li>Growth Mindset, Willingness of Long Life Learning</li>
                <li>Enthusiasm, High Level of Motivation</li>
                <li>Communication Skills</li>
                <li>Strong Attention to Detail</li>
                <li>Critical Thinking</li>
                <li>Teamwork</li>
                <li>Emotional Intelligence</li>
              </ul>
            </div>
            <div className="skill">
              <h3 className="skill-title">Technical skills</h3>
              <ul>
                <li>React.js</li>
                <li>Javascript ES6</li>
                <li>SCSS</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>Firebase</li>
                <li>Express.js</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Trello - Project Management</li>
                <li>Agile Methodologies - SCRUM</li>
                <li>English B2 Complex C</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="story-container">
          <h2 className="story-title">The story behind me</h2>
          <p>Hi, I'm András, a highly motivated frontend developer.</p>
          <p>
            I have always loved computer science. I must have been thirteen
            years old, when I sorted the computer parts myself and built my
            first computer alone. My whole childehood was spent under the spell
            of computer science. Not only computer games intrested me, but also
            various editing programs. In high school, with Adobe Dreamweaver, a
            web development application, I created a fan website for my favorite
            game, where different informations about characters and background
            story could be found.
          </p>

          <p>
            Unfortunately, in the last year of primary school, I made a bad
            decision and continued my studies at econimical high school, not in
            computer science. At the end of high school I chose computer science
            as my fifth graduation subject, where I was the only one in my grade
            who took a one hundred percent exam. Finally, I graduated as a
            teacher at University of Pécs.
          </p>
          <p>
            About 2 years ago I noticed a Hungarian programming bootcamp
            advertisement. This was how it became clear, this would be a great
            opportunity to change career, so finally I could do what I wanted
            all in my life. I started preparing for a career change in a
            self-taught way. I really liked it, so I subscribed to the online
            platform of CodeBerry programming school, where I did almost all
            curriculum about front-end development alone. After that, I felt
            it's time to move on for significant development in my studies. To
            reach my goals, I was successfully admitted and completed the
            frontend development course at CodeCool. I just loved every moment
            of it.
          </p>
          <p className="highlighted-text">
            I'm currently looking to contribute my skills to a team where I can
            prove my skills while growing in my capabilities. If you are looking
            for a competent, highly-motivated developer, contact me.
          </p>
        </div>
        <p className="signature">András Rajkai</p>
      </div>
    </div>
  );
};
