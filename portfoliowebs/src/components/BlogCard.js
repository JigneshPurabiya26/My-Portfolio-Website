import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogCard(props) {
    const{id,title,excerpt,imageUrl}=props.blog;
    return (
        <div className="card boxShadow h-100">
        <img className="card-image-top" src={imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`/blog/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    )
}
