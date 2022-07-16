import React from "react"
import { Link } from "react-router-dom";
import { Consumer } from "../Context";
import BlogCard from "./BlogCard";

function blog() {
  return(
    <Consumer>
      {value => {
        const {blogs} = value;
        return (
          <div id="blog" className="container text-center my-3" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="font-weight-light">
              <span className="text-info">Certificates & Courses </span>
            </h1>
            {/* <div className="lead">These are some blogs that I have written.</div> */}
            <div className="row my-5 py3">
              {
              blogs.slice(0,3).map((blog)=> (
                <div key={blog.id} className="col-12 col-md-4 my-2 pl-4">
                  <BlogCard blog={blog}/>
                </div>
              ))
            }
            </div>
            <div className="my-5">
              <Link to="/allblogs" className="text-dark text-right">
                <h5>
                  More Certificates
                  <i className="fas fa-arrow-right align-middle"></i>
                </h5>
              </Link>
            </div>
          </div>
        );
      }}
    </Consumer>
  )

}

export default blog;
