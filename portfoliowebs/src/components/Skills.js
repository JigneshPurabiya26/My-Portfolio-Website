import React from "react";
import {v4 as uuid} from "uuid";

export default function Skills(props) {
    const{name,imageUrl,starsTotal,starsActive} = props.skill;
    const starsList = [];
    for(let i=0;i<starsTotal;i++){
        if(i<starsActive){
            starsList.push(<span key={uuid()} className="text-info pl-0">★</span>);
        }else{
            starsList.push(<span key={uuid()} >★</span>);
        }
    }
  return (
    <div>
      <img
        className="rounded-circle"
        src={imageUrl}
        alt={name}
        style={{width: "85px", height: "85px"}}
      />
      <div>
        {starsList}
      </div>
    </div>
  );
}
