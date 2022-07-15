import React from 'react'
import { useParams } from 'react-router-dom' //instead of params use "Useparams"
import { Consumer } from "../Context";
import ReactMarkdown from "react-markdown"
export default function ProjectPage() {
    const { id } = useParams();  //assign the useparams to the variable using curly braces and use the variable
    // no need to use props for getting the variable value.
    return <Consumer>
        {value => {
            const {projects} = value;
            const project = projects.filter((project) => project.id == id)[0];
            const {imageUrl,title,body} = project;
            return (
                <div className='container py-5 my-5 markdown'>
                    <div className="justify-content-center">
                        <img src={imageUrl} alt={title} className="w-75 m-auto rounded border border-dark border-5"/>
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
