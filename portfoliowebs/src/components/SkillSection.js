import React from "react";
import Skills from "./Skills";
import {v4 as uuid} from "uuid";

export default function SkillSection() {
  const skills = [
    {
      id: 1,
      name: "HTML5",
      imageUrl:
        "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 2,
      name: "CSS3",
      imageUrl:"https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png",      
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 3,
      name: "Javascript",
      imageUrl: "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 4,
      name: "Bootstrap 4",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvT6kmy1pgSNCdpmdD8vwVS01C5YXKAh9UM1OARroY-z38AhqcWwnOTMk4E4T4aNF7j5s&usqp=CAU",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 5,
      name: "React",
      imageUrl:"https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 6,
      name: "MySQL",
      imageUrl:
        "https://pbs.twimg.com/profile_images/621577553376100352/lvR3kClO_400x400.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 7,
      name: "Python",
      imageUrl:
        "https://cdn.iconscout.com/icon/free/png-256/python-2-226051.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 8,
      name: "Flask",
      imageUrl:
        "https://nyxwolves.com/assets/images/services-icons-tech/ai/1.png",
      starsTotal: 3,
      starsActive: 2,
    },  
  ];

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
}
