import React from 'react'
import { useParams } from 'react-router-dom' //instead of params use "Useparams"
export default function ProjectPage() {
    const {id} = useParams();  //assign the useparams to the variable using curly braces and use the variable
    // no need to use props for getting the variable value.
    return (
        <div className=' text-center py-5 my-5'>
            <h1 className='text-info'>
                Project {id}
                </h1>
        </div>
    )
}
