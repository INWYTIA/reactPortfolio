import React from "react";

function Profile() {
  return (
    <article className="container backdrop">
      <div className="row">
        <h1>About Me</h1>
      </div>
      <div className="row contentRow">
        <div className="col-md-2">
          <img src="Headshot.jpg" class="headshot" alt="Headshot"/>
        </div>
        <div className="col-md-10">
          <p>My name is Evan LaFollette.  I'm a thirty-one year old with a passion for music and story telling.  I enjoy spending my free time on creative hobbies such as writing, Dungeons and Dragons, and cooking.  Beyond that I enjoy passtimes such as reading, video games, board games, and Magic: The Gathering.  My tastes are very ecclectic and I'm always willing to try something new.</p>
          <p>I've held multiple jobs in retail and service focused businesses.  I'm eaqually adept at working alone or as part of a team.  I often enjoy listening to music as I work as it helps me to focus on the task at hand.  My favorite types of music are typically electronic in nature, but I also frquently listen to classical, rock, metal, jazz, and other odd song.</p>
        </div>
      </div>
    </article>
  );
}

export default Profile;
