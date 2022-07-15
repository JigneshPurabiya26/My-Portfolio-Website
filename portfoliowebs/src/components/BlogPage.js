import React from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from "../Context";
import ReactMarkdown from "react-markdown"
export default function BlogPage() {
  const { id } = useParams();
  return <Consumer>
    {value => {
      const {blogs} = value;
      const blog = blogs.filter((blog) => blog.id == id)[0];
      const {imageUrl,title,body} = blog;
      return (
        <div className="container py-5 my-5 markdown">
          <div className="justify-content-center">
            <img src={imageUrl} alt={title} className="w-100"/>
          </div>
          <h1 className="font-weight-light text-center my-5">
            {title}
          </h1>
          <ReactMarkdown children={body} />
        </div>
      )
    }}
  </Consumer>

}
