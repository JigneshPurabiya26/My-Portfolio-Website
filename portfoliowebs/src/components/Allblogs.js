import React from 'react'
import { Consumer } from "../Context";
import { Link } from "react-router-dom";
import BlogCard from './BlogCard'; 

export default function Allblogs() {
  return (
    <Consumer>
      {(value) => {
        const { blogs } = value;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All my <span className="text-info">Certifications</span>
            </h1>
            <div className="row my-4 pt-4">
              {blogs.map((blog) => (
                <div key={blog.id} className="col-12 col-md-6 py-3">
                  <BlogCard blog={blog} />
                </div>
              ))}
            </div>
            <Link to="/blog/addblog" className="ml-auto mx-3">
              <button className="btn btn-outline-info ">Add More</button>
            </Link>
          </div>
        );
      }}
    </Consumer>
  )
}
