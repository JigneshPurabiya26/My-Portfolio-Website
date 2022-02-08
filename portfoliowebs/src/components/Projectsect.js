import React from "react";
import ProjectCard from "./ProjectCard";
import { Consumer } from "../Context";
import { Link } from "react-router-dom";


export default function Projectsect() {
  return(
    <Consumer>
    {value => {
      const {projects} = value;
      return (
        <div id="projects" className="container text-center my-3" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="font-weight-light">
            My <span className="text-info">Projects </span>
          </h1>
          <div className="lead">These are the projects that I have made.</div>
          <div className="row my-5 py3">
            {
              projects.slice(0,3).map((project) => (
                <div key={project.id} className="col-12 col-md-4 my-2 pl-4">
                  <ProjectCard  project={project} />
                </div>
              ))
            }
          </div>
          <div className="my-5">
            <Link to="/allprojects" className="text-dark text-right">
              <h5>
                See all my Projects <i className="fas fa-arrow-right align-middle"></i>
              </h5>
            </Link>
          </div>
        </div>
      );
    }}
  </Consumer>
  );
}
