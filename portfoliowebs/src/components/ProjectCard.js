import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function ProjectCard(props) {
    const history= useLocation();
    let location = history.pathname==="/allprojects"?"card boxShadow h-100 allproject ":"card boxShadow h-100"
    const{id,title,excerpt,imageUrl}=props.project;
    return (
        <div className={location}>
        <img
          className="card-image-top"
          src={imageUrl}
          alt={title}
        />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`/project/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    )
}
