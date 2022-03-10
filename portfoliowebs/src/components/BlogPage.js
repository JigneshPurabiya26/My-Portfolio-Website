import React from 'react'
import { useParams } from 'react-router-dom'
export default function BlogPage() {
    const {id} = useParams();
  return (
    <div className="text-center py-5 my-5">
        <h1 className='text-info'>Blog {id}</h1>
    </div>
  )
}
