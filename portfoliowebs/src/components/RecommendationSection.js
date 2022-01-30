import React from 'react';
import {v4 as uuid} from "uuid";
import RecommendationCard from './RecommendationCard';

export default function RecommendationSection() {
    const recommendations=[
        {
            id:1,
            name:"Random guy1",
            company:"Abc",
            designation:"CEO",
            message:"He is clueless",
        },
        {
            id:2,
            name:"Random guy2",
            company:"Abc",
            designation:"CEO",
            message:"He is ambitious",
        },
        {
            id:3,
            name:"Random guy3",
            company:"Abc",
            designation:"CEO",
            message:"He is awesome",
        },
        {
            id:4,
            name:"Random guy4",
            company:"Abc",
            designation:"CEO",
            message:"He is great",
        },
    ];
    return (
        <div className="container-fluid my-5 " data-aos="fade-up" data-aos-duration="1000">
            <div className="row text-center py-5 d-flex flex-nowrap scrollbar" style={{overflow:'scroll'}}>
                {
                    recommendations.map((recommendation) =>(
                        <RecommendationCard key={uuid()} recommendation = {recommendation}/>
                    ))
                }
            </div>
        </div>
    )
}
