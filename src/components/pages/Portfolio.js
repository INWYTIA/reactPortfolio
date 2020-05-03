import React from "react";
import Project from "../Project";
import projects from "../../API/projects"

function Portfolio() {
  return (
    <article className="container backdrop">
      <div className="row">
        <h1>Projects</h1>
      </div>
      <div className="row">
      {projects.map(item => (
        <Project item={item} />
        ))}
        {/* <div className="col-md-6 prjCrd">
          <div className="card">
            <img src="Trail-Mix.png" className="card-img-top" alt="Trail Mix Site"/>
            <div className="card-body">
              <h5 className="card-title">Trail Mix</h5>
              <p className="card-text">A group project designed to search for biking trails and provide convenient resaurants for each result.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="https://kevinngo.github.io/Project-1/" className="card-link">Trail Mix Site</a></li>
              <li className="list-group-item"><a href="https://github.com/KevinNgo-Creator/Project-1" className="card-link">Github Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 prjCrd">
          <div className="card">
            <img src="Screenshot (18).png" className="card-img-top" alt="Gif It To Me Site"/>
            <div className="card-body">
              <h5 className="card-title">Gif It To Me</h5>
              <p className="card-text">A multiplayer, interactive board game that challenges players to write the funniest or most clever caption for a selection of animated gifs.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="https://polar-savannah-75488.herokuapp.com/" className="card-link">Weather Dashboard Site</a></li>
              <li className="list-group-item"><a href="https://github.com/kelstho/gif-it-to-me" className="card-link">Github Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 prjCrd">
          <div className="card">
            <img src="Weather-Dashboard.png" className="card-img-top" alt="Weather Dashboard Site"/>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">A website that provides current and future weather information for cities with saved searches.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="https://inwytia.github.io/WeatherDashboard/" className="card-link">Weather Dashboard Site</a></li>
              <li className="list-group-item"><a href="https://github.com/INWYTIA/WeatherDashboard" className="card-link">Github Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 prjCrd">
          <div className="card">
            <img src="Dayplanner.png" className="card-img-top" alt="Dayplanner Site"/>
            <div className="card-body">
              <h5 className="card-title">Dayplanner</h5>
              <p className="card-text">A simple application that organizes and saves an hourly schedule with updating dates and time indicators.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="https://inwytia.github.io/DayPlanner/" className="card-link">Dayplanner Site</a></li>
              <li className="list-group-item"><a href="https://github.com/INWYTIA/DayPlanner" className="card-link">Github Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 prjCrd">
          <div className="card">
            <img src="Screenshot (19).png" className="card-img-top" alt="Resume PDF CLI"/>
            <div className="card-body">
              <h5 className="card-title">ResumePDF</h5>
              <p className="card-text">A node script to generate a pdf resume from a github profile name.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="https://github.com/INWYTIA/ResumePDF" className="card-link">Github Repository</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 prjCrd">
          <div className="card">
            <img src="Screenshot (19).png" className="card-img-top" alt="Team Builder CLI"/>
            <div className="card-body">
              <h5 className="card-title">Team Builder</h5>
              <p className="card-text">A CLI application that organizes a programming team and generates a HTML page for reference.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="https://github.com/INWYTIA/TeamBuilder" className="card-link">Github Repository</a></li>
            </ul>
          </div>
        </div> */}
      </div>
    </article>
  );
}

export default Portfolio;
