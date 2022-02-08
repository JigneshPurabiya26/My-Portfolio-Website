import React from 'react';
import {v4 as uuid} from "uuid";
import { Consumer } from '../Context';
import RecommendationCard from './RecommendationCard';

export default function RecommendationSection() {
    return(
        <Consumer>
            {value => {
                const {recommendations} = value;
                return(
                    
                        <div className="container-fluid my-5 " data-aos="fade-up" data-aos-duration="1000">
                            <div className="row text-center py-5 d-flex flex-nowrap scrollbar" style={{overflow:'scroll'}}>
                                {
                                    recommendations.map((recommendation) =>(
                                        <RecommendationCard key={uuid()} recommendation = {recommendation}/>
                                    ))
                                }
                            </div>
                        </div>
                );
            }}
        </Consumer>
    )
}
