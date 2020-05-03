import React from "react";

function Project(props) {

  let alt;
  let site;
  if (props.item.sitelink) {
    alt = `${props.item.title} Site`;
    site = <li className="list-group-item"><a href={props.item.sitelink} className="card-link">{props.item.title} Site</a></li>;
  } else {
    alt = props.item.title;
  };

  return (
    <div className="col-md-6 prjCrd">
      <div className="card">
        <img src={props.item.img} className="card-img-top" alt={alt}/>
        <div className="card-body">
          <h5 className="card-title">{props.item.title}</h5>
          <p className="card-text">{props.item.text}</p>
        </div>
        <ul className="list-group list-group-flush">
          {site}
          <li className="list-group-item"><a href={props.item.gitlink} className="card-link">Github Repository</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
