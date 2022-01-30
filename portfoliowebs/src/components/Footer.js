import React from "react";
import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="contianer-fluid text-center mx-0"
        style={{ backgroundColor: "black" }}
        data-aos="fade-up" data-aos-duration="1000"
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
              Blogs
            </a>
            <a href="/#projects" className="text-light d-block">
              Projects
            </a>
            <Link to="/contact" className="text-light d-block">
              Contact me
            </Link>
            <Link to="/recommendation" className="text-light">
              Write a recommendation <i className="fas fa-heart"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <p className="text-light text-justify pl-3 py-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus inventore quia, id unde, quod ab mollitia distinctio
              ratione aliquid voluptates quaerat ducimus, aliquam numquam? Totam
              quam iusto in quis neque nesciunt vero architecto accusamus
              aliquid magnam. Suscipit, aliquid aperiam veritatis sapiente
              doloremque optio? Soluta dolorem optio hic laborum quo repellat
              consequuntur. Laboriosam quisquam officia provident!
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info pb-4">Social</h5>
            <a href="/" style={{textDecoration:"none"}}>
            <i className="fab fa-linkedin fa-2x text-light d-block mb-2"></i>
            </a>
            <a href="/" style={{textDecoration:"none"}}>
              <i className="fab fa-github-square fa-2x text-light d-block mb-2"></i>
            </a>
            <a href="/" style={{textDecoration:"none"}}>
              <i className="fas fa-envelope fa-2x text-light  d-block mb-2 "></i>
            </a>
          </div>
        </div>
        <div className="text-muted py-1">
          <p>Copyright &copy; Jignesh Purabiya 2022</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
