import React from "react";
import Skills from "./Skills";
import {v4 as uuid} from "uuid";
import {Consumer} from "../Context"

export default function SkillSection() {

  return(
    <Consumer>
      {value => {
        const {skills} = value;
        const finalSkillRow = [];
        for (let i = 0; i < skills.length / 4; i++) {
          let skillRow = skills.slice(i * 4, (i + 1) * 4);
          finalSkillRow.push(
            <div key={uuid()} className="d-flex justify-content-around py-3">
              {skillRow.map((skill) => (
                <Skills key={uuid()} skill={skill} />
              ))}
            </div>
          );
        }
        return (
          <div className="bg-light w-100">
            <div className="container text-center py-5" data-aos="fade-up" data-aos-duration="1000">
              <h1 className="font-weight-light">
                <span className="text-info">Technology </span> stack
              </h1>
              <div className="lead">
                I design,develop and deliver with these Frameworks.
              </div>
              {finalSkillRow}
            </div>
          </div>
        );
      }}
    </Consumer>
  )
 
}
