import React from 'react'
import { Link } from 'react-router-dom';

export default function ProjectCard(props) {
    const{id,title,excerpt,imageUrl}=props.project;
    return (
        <div className="card boxShadow h-100">
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
