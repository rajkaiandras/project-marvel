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
          <img src={profilePhoto} alt="profile" />
          <h1 className="profile-name">András Rajkai</h1>
        </div>
        <div className="content">
          <p>
            I have always loved computer science. You know, I was the friend
            next door who always reinstalled his friends operating system and
            repaired their PC if something went wrong. I must have been thirteen
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
          <p>
            I'm currently looking to contribute my skills to a team where I can
            prove my skills while growing in my capabilities. If you are looking
            for a competent, highly-motivated developer, contact me. You can
            reach me at rajkaiandras@gmail.com or here on LinkedIn."
          </p>
        </div>
      </div>
    </div>
  );
};
