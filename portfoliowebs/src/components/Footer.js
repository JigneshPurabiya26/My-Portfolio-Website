import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div
        className="contianer-fluid text-center mx-0"
        style={{ backgroundColor: "black" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="py-5">
          <h2 className="text-light">Interested in working with me?</h2>
          <Link to="/contact">
            <button className="btn btn-outline-light btn-lg">Let's talk</button>
          </Link>
        </div>
        <div className="row mr-0">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-4">More Links</h5>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <a href="/#blog" className="text-light d-block">
              Certificates
            </a>
            <a href="/#projects" className="text-light d-block">
              Projects
            </a>
            <Link to="/contact" className="text-light d-block">
              Contact me
            </Link>
            {/* <Link to="/recommendation" className="text-light">
              Write a recommendation <i className="fas fa-heart"></i>
            </Link> */}
          </div>
          <div className="col-12 col-md-4">
            <p className="text-light text-justify pl-3 py-3">
              This is my portfolio website, where you will find the projects
              that I have created from the 1<sup>st</sup> year of my engineering
              till date. Here I have also showcased the skill that I possess and
              the Certification Courses that I have completed.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-4">Social</h5>
            <a
              href="https://www.linkedin.com/in/jignesh-purabiya-a166971ba/"
              style={{ textDecoration: "none" }}
              target="_blank" rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x text-light d-block mb-2"></i>
            </a>
            <a
              href="https://github.com/JigneshPurabiya26"
              style={{ textDecoration: "none" }}
              target="_blank" rel="noreferrer"
            >
              <i className="fab fa-github-square fa-2x text-light d-block mb-2"></i>
            </a>
            <a
              href="https://public.tableau.com/app/profile/jignesh.purabiya"
              style={{ textDecoration: "none" }}
              target="_blank" rel="noreferrer"
            >
              <img src={require('../assets/tab.png').default} alt="tableau_logo" className="w-25" />
            </a>
          </div>
        </div>
        <div className="text-muted py-1">
          <p>Copyright &copy; Jignesh Purabiya 2024</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
