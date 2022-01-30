import React from "react"
import BlogCard from "./BlogCard";

function blog() {
  const blogs=[
    {
      id:1,
      title:"Blog 1",
      excerpt:"This blog is about..",
      imageUrl:"https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
    },
    {
      id:2,
      title:"Blog 2",
      excerpt:"This blog is about..",
      imageUrl:"https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
    },
    {
      id:3,
      title:"Blog 3",
      excerpt:"This blog is about..",
      imageUrl:"https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg",
    },
  ]
  return (
    <div id="blog" className="container text-center my-3" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="font-weight-light">
        My <span className="text-info">Blogs </span>
      </h1>
      <div className="lead">These are some blogs that I have written.</div>
      <div className="row my-5 py3">
        {
        blogs.map((blog)=> (
          <div key={blog.id} className="col-12 col-md-4 my-2 pl-4">
            <BlogCard blog={blog}/>
          </div>
        ))
      }
      </div>
      <div className="my-5">
        <a href="/" className="text-dark text-right">
          <h5>
            Read all my Blogs
            <i className="fas fa-arrow-right align-middle"></i>
          </h5>
        </a>
      </div>
    </div>
  );
}

export default blog;
