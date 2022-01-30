import React from 'react'

export default function RecommendationCard(props) {
    const {name,company,designation,message}=props.recommendation;
    return (
        <div className="col-12 col-md-3">
        <div className="card h-100 boxShadow">
          <div className="card-body">
            <h4 className="card-text">{message}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">{designation} at {company}</p>
          </div>
        </div>
      </div>
    )
}
