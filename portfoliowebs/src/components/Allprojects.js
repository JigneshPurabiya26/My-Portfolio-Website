import React from "react";
import { Consumer } from "../Context";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";

export default function Allprojects() {
  return (
    <Consumer>
      {(value) => {
        const { projects } = value;
        return (
          <div className="container text-center my-5 py-5">
            <h1 className="font-weight-light py-5">
              All my <span className="text-info">Projects</span>
            </h1>
            <div className="row my-4 pt-4">
              {projects.map((project) => (
                <div key={project.id} className="col-12 col-md-6 py-3">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
            {/* <Link to="/project/addproject" className="ml-auto mx-3">
              <button className="btn btn-outline-info ">Add Project</button>
            </Link> */}
          </div>
        );
      }}
    </Consumer>
  );
}
