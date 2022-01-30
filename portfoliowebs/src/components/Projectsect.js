import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projectsect() {
  const projects = [
    {
      id:1,
      title:"Hotel Management System",
      imageUrl:"https://codecanyon.img.customer.envatousercontent.com/files/247419826/Inline_Preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=246d8fecb8b004dc0ac19070ea582e18",
      excerpt:"This project is about...",    
    },
    {
      id:2,
      title:"Flappy Bird Game",
      imageUrl:"http://web.cse.ohio-state.edu/~wang.3602/courses/cse3541-2017-spring/project_proposal/Adrien_Lindner/flappyBird.jpg",
      excerpt:"This project is about...",    
    },
    {
      id:3,
      title:"Multilingual IDE",
      imageUrl:"https://www.powertransformernews.com/wp-content/uploads/2021/02/code-5113374_640.jpg",
      excerpt:"This project is about...",    
    },
  ]
  return (
    <div id="projects" className="container text-center my-3" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="font-weight-light">
        My <span className="text-info">Projects </span>
      </h1>
      <div className="lead">These are the projects that I have made.</div>
      <div className="row my-5 py3">
        {
          projects.map((project) => (
            <div key={project.id} className="col-12 col-md-4 my-2 pl-4">
              <ProjectCard  project={project} />
            </div>
          ))
        }
      </div>
      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            See all my Projects <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}
