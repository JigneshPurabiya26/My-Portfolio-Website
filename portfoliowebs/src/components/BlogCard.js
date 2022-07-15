import React from 'react'
import { Link,useLocation } from 'react-router-dom';

export default function BlogCard(props) {
    const{id,title,excerpt,imageUrl}=props.blog;
    const history = useLocation();
    let location = history.pathname==="/allblogs"?"bc card boxShadow h-100 allblogs ":"bc card boxShadow h-100"
    return (
        <div className={location}>
        <img className="card-image-top border border-dark" src={imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{excerpt}</p>
          <Link to={`/blog/${id}`} className="stretched-link"></Link>
        </div>
      </div>
    )
}
