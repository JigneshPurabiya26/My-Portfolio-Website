import React from "react";

function Aboutme() {
  return (
    <div
      id="aboutus"
      className="container-fluid bg-light text-center my-5"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="font-weight-light">
        <span className="text-info">About</span> me
      </h1>
      <div className="row my-5 px-2">
        <div className="col-12 col-md-6">
          <h4>How can I help you?</h4>
          <p className="text-justify px-5">
            As displayed in Technology Stack section I can design and develop a
            range of websites using the tools mentioned in it.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <h4>What am I doing currently?</h4>
          <p className="text-justify px-5">
            Currently I am studying engineering in Information Technology from
            St.John's college of engineering and management.
          </p>
        </div>
      </div>
      <div className="row my-5 px-2 justify-content-center">
        <div className="col-12 col-md-6 ">
          <h4>What do I believe in?</h4>
          <p className="text-justify px-5">
            With the constantly evolving IT industry, I believe in constantly
            evolving oneself as well, being informed about what new
            technological advancements are taking place every now and then helps
            you to keep the pace up with the professionals in the IT fraternity.
          </p>
        </div>
        {/* <div className="col-12 col-md-6">
          <h4>How can I help you?</h4>
          <p className="text-justify px-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            itaque sapiente officia libero. Omnis doloremque, amet provident
            reiciendis quasi ducimus harum? Nostrum, distinctio nam modi magnam
            numquam reiciendis quas fuga.
          </p>
        </div> */}
      </div>
    </div>
  );
}
export default Aboutme;
