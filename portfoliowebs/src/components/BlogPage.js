import React from 'react'
import { useParams } from 'react-router-dom'
import { Consumer } from "../Context";
import ReactMarkdown from "react-markdown"
import remarkGfm from 'remark-gfm'
export default function BlogPage() {
  const { id } = useParams();
  return <Consumer>
    {value => {
      const {blogs} = value;
      const blog = blogs.filter((blog) => blog.id == id)[0];
      const {imageUrl,title,body,link} = blog;
      return (
        <div className="container py-5 my-5 markdown">
          <div className="justify-content-center">
            <img src={imageUrl} alt={title} className="w-75 m-auto rounded border border-dark border-5"/>
          </div>
          <h1 className="font-weight-bold text-center my-5">
            {title}
          </h1>
          <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} className="container w-75 font-weight-light-normal text-justify overflow-hidden"/>
          <ReactMarkdown children={link} remarkPlugins={[remarkGfm]} className="container w-75 font-weight-light-normal text-justify overflow-hidden"/>
          {/* <ReactMarkdown children={body1} remarkPlugins={[remarkGfm]} className="container w-75 font-weight-light-normal text-justify overflow-hidden"/> */}
        </div>
      )
    }}
  </Consumer>

}
