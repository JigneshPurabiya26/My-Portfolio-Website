import React, { Component } from "react";
// import axios from "axios";

const Context = React.createContext();
// This is the boiler plate code for setting up context api for any app

export class Provider extends Component {
  //this will add the newproject into the state and spread
  // the other projects already present in the state this happens with the help of ... i.e spread fxn.
  Handler = (action, newObject) => {
    switch (action) {
      case "Add_Project":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;

      case "Add_Blog":
        this.setState({
          blogs: [newObject, ...this.state.blogs],
        });
        break;

      // case "Add_Recommendation":
      //   this.setState({
      //     recommendations: [newObject, ...this.state.recommendations],
      //   });
      //   break;

      default:
        break;
    }
  };
  state = {
    Handler: this.Handler, //as we are passing the entire state to the other consumers
    //therefore to access the addprojectHandler method we need to pass it into the state.
    skills: [
      {
        id: 1,
        name: "Python",
        imageUrl: require("././assets/python.png").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "MySQL",
        imageUrl: require("././assets/sql.png").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 3,
        name: "SAS VIYA",
        imageUrl: require("././assets/Sas_viya.webp").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 4,
        name: "Pentaho Data Integration",
        imageUrl: require("././assets/Pentaho.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 5,
        name: "Tableau",
        imageUrl: require("././assets/Tableau.jpg").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 6,
        name: "Excel",
        imageUrl: require("././assets/Excel.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "HTML5",
        imageUrl: require("././assets/html5.png").default,
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 8,
        name: "CSS3",
        imageUrl: require("././assets/css3.png").default,
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 9,
        name: "Javascript",
        imageUrl: require("././assets/javascript.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 10,
        name: "Bootstrap 4",
        imageUrl: require("././assets/bootstrap.png").default,
        starsTotal: 3,
        starsActive: 1,
      },
      {
        id: 11,
        name: "React",
        imageUrl: require("././assets/react.png").default,
        starsTotal: 3,
        starsActive: 1,
      },
    ],
    projects: [
      {
        id: 1,
        title: "Health Insurance Cost Prediction",
        imageUrl: require("././assets/Health_Insurance.png").default,
        excerpt: "Health_Insurance cost prediction using ML",
        body: "This is a Health Insurance Cost Prediction Machine learning Model which predicts the Insurance cost for a particular person on the basis of nummber of parameters such as the Age of the person,Sex of the person, the number of children the person has, in which does the person stay etc.In this model we have used the Random Forest Regression model in order to predict the prices of the Insurance.In order to deploy the model I have saved the machine learning model from google colaboratory to a .SAV file using the PICKLE library in python and then used the STREAMLIT Library from python to create the Graphical User Interface(GUI). The code for the same was written in the SPYDER IDE from the Anaconda Navigator, click the link below to checkout the project.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/HealthInsurance_Cost-Predition.git",
      },
      {
        id: 2,
        title: "Diabetes Prediction",
        imageUrl: require("././assets/Diabetes_Prediction.png").default,
        excerpt: "Diabetes Prediction using ML",
        body: "This is a Diabetes Prediction Model which typically involves training a machine learning model to predict whether a person is diabetic or not on the basis of certian feature variables, click the link below to checkout the project.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Diabetes_Prediction",
      },
      {
        id: 3,
        title: "Covid Analysis Dashboard",
        imageUrl: require("././assets/Covid_analysis.png").default,
        excerpt: "Tableau Visualization",
        body: "This is a COVID ANALYSIS Dashboard created using tableau it displays multiple charts and graphs showing the past cases of covid in various countries, click the link below to checkout the project.",
        link:"Dashboard Link :- https://public.tableau.com/app/profile/jignesh.purabiya/viz/BIL_MINIPROJECT/Dashboard1",
      },
      {
        id: 4,
        title: "Git Hub Topics Web Scraping",
        imageUrl: require("././assets/Scrape_topics.png").default,
        excerpt: "Web Scraping using BeautifulSoup",
        body: "This is Web Scraping Project where I have scraped the TOPICS Section of github where there are various trending topics and people create and upload their git repos and I have also scraped all the information about all the repos for a particular topic and created a csv file for each topic.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Scraping_GitHub_Topics",
      },
      {
        id: 5,
        title: "Quotes Web Scraping",
        imageUrl: require("././assets/Scrape_quotes.png").default,
        excerpt: "Web Scraping using Beautiful Soup",
        body: "This is Web Scraping Project where I have scraped the top tags for different quotes and also for all the corresponding quotes I scraped all the top quotes along with the author names and stored the quotes corresponding to a tag in separate csv files.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Scraping_top_quotes",
      },
      {
        id: 6,
        title: "Rock Vs Mine Prediction",
        imageUrl: require("././assets/Rock_Mine.png").default,
        excerpt: "Rock Vs Mine Prediction using ML",
        body: "This is a Supervised machine learning project which typically involves training a machine learning model to differentiate between rocks and mines based on certain features or characteristics. The goal is to develop a model that can accurately classify sonar readings or other data into one of these two categories, click the link below to checkout the project.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Rock-vs-Mine-Prediction",
      },
      {
        id: 7,
        title: "Acquisitions Dashboard",
        imageUrl: require("././assets/Acq.png").default,
        excerpt: "Tableau Visualization",
        body: "This is an ACQUISITIONS dashboard created using tableau which shows the acquisitions and mergers made by top companies over the past 40 years in an interactive format, click the link below to checkout the project.",
        link:"Tableau Link :- https://public.tableau.com/app/profile/jignesh.purabiya/viz/Aquisitions_16900989485270/Dashboard2",
      },
      {
        id: 8,
        title: "Store Profits Dashboard",
        imageUrl: require("././assets/Store.png").default,
        excerpt: "Tableau Visualization",
        body: "This is STORE PROFITS dashboard created using tableau where I have analyzed the sales and the profits made by a particular store over several product categories in an interactive format, click the link below to checkout the project.",
        link:"Tableau Link :- https://public.tableau.com/app/profile/jignesh.purabiya/viz/StoreProfits_16901825745410/StoreProfitts_1",
      },
      {
        id: 9,
        title: "Flappy Bird Game",
        imageUrl: require("././assets/flappyBird.png").default,
        excerpt: "Game created using Python",
        body: "This is a Flappy Bird game created in Python using the Pygame library, the basic rule of this game is to play until the bird hits the obstacle and after hitting the obstacle we need to press Enter to restart the game, click the link below to checkout the project.",
        link: "Github Link :- https://github.com/JigneshPurabiya26/FlappyBird_Game.git",
      },
      {
        id: 10,
        title: "Multilingual IDE",
        imageUrl: require("././assets/terminal.png").default,
        excerpt: "Online IDE using HTML, CSS, JS & PHP",
        body: "This is an online IDE(Integrated Development Environment) I have created using HTML, PHP and Javascript which supports multiple languages for coding such as C, C++, Python, Javascript and PHP.This provides the benefit to the user to code online without downloading any libraries or dependencies in their system. It also has some basic dynamic functionalities such as Undo and Redo options, formatting the document and also has the option of changing the theme of IDE as well, in order to checkout the complete project click the link below.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Online-Multilingual-IDE.git",
      },
      {
        id: 11,
        title:"Car Parking Sensor",
        imageUrl : require("././assets/car_parking.jpg").default,
        excerpt: "Car Parking Sensor(Ultrasonic Sensor)",
        body:"This is a Hardware Project based on sensors for sensing the obstacles at the front and rear end of a vehicle.The basic premise of this project is that the closer a reversing car gets to an object, the greater the frequency of beeps from a buzzer. Eventually if the car gets too close to an object, the buzzer will remain on continuously, click the link below in order to know about the complete project and all the Hardware components required.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Car_Parking_Sensor.git",
      },  
      {
        id: 12,
        title: "Hotel Management System",
        imageUrl: require("././assets/jdbc.png").default,
        excerpt: "JDBC Connectivity",
        body:"This software is mainly made for management of hotels. The software has been designed with Java Swings as Front End, MySQL as Back End and NetBeans as IDE to run for developing our project.This application ensures the security to the data of customer and also reduces the redundancy of data which fills the loop hole of the manual system.This software has been made in a user friendly interface, So that normal person can add, delete and modify their own profile info as per their requirement but cannot do any changes in admin profile only hotel manager have access to it, Keeping user data safe.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Hotel-Management.git",
      },
    ],
    // recommendations: [
    // `  // {
    //   //   id:1,
    //   //   name:"person's name",
    //   //   company: "company",
    //   //   designation: "persons designation",
    //   //   message: "recommendation",
    //   // },
    //   // {
    //   //   id: 2,
    //   //   name: "person's name",
    //   //   company: "company",
    //   //   designation: "persons designation",
    //   //   message: "recommendation",
    //   // },
    //   // {
    //   //   id: 3,
    //   //   name: "person's name",
    //   //   company: "company",
    //   //   designation: "persons designation",
    //   //   message: "recommendation",
    //   // },
    //   // {
    //   //   id: 4,
    //   //   name: "person's name",
    //   //   company: "company",
    //   //   designation: "persons designation",
    //   //   message: "recommendation",
    //   // },`
    // ],
    blogs: [
      {
        id: 1,
        title: "Machine Learning Course",
        excerpt: "Internshala ML course",
        body: "Certificate Link :- https://trainings.internshala.com/s/v/144973/cf69b7e3",
        imageUrl: require('././assets/MLcourses.jpeg').default,
      },
      {
        id: 2,
        title: "MLOps Certification",
        excerpt: "Udemy MLOps Certification",
        body: "Certificate Link :- https://udemy-certificate.s3.amazonaws.com/image/UC-7e5dee01-f17b-4643-aec6-b44479204624.jpg?v=1655031450000",
        imageUrl: require("././assets/MLops.png").default,
      },
      {
        id: 3,
        title: "Regular Expression",
        excerpt: "Coursera RegEx Project",
        body: "Certificate Link :- https://coursera.org/share/c7fc2ffad4c919b90016966d0765822d",
        link: "Course Task link :- https://github.com/JigneshPurabiya26/Regular_Expressions.git",
        imageUrl: require('././assets/RegEx.png').default,
      },
      {
        id: 4,
        title: "ML Bootcamp",
        excerpt: "DevTown ML Bootcamp",
        body: "Certificate Link :- https://cert.devtown.in.tech/verify/Z1qhc0v",
        imageUrl: require('././assets/Devtown.png').default,
      },
      {
        id: 5,
        title: "Full stack web developement",
        excerpt: "Unschool",
        body: "Certificate Link :- https://www.linkedin.com/posts/jignesh-purabiya-a166971ba_certificate-ugcPost-6977662661761073152-ss3J?utm_source=share&utm_medium=member_desktop",
        imageUrl: require('././assets/Unschool.png').default,
      },
      {
        id: 6,
        title: "Java Course",
        excerpt: "Coding Ninjas Java Course",
        body: "Certificate Link :- https://files.codingninjas.in/certi_image60894e08b4375c6eaff84b687dedc5d111c45.jpg",
        imageUrl: require('././assets/Codingninjas.jpeg').default,
      },
      {
        id: 7,
        title: "Hackathon Certificate",
        excerpt: "Smart India Hackathon (SIH)",
        body: "In the Hackathon our team presented an idea for creating a web based application for predicting and improving employment and admission rates in a particular geographical area click below to checkout the whole idea.",
        link:"Idea Link:- https://drive.google.com/file/d/1raNr-hnzoML9g9sUlRsUqp5_JB0f38n7/view?usp=sharing",
        imageUrl: require("././assets/Hackathon.jpeg").default,
      },
    ],
  };

  // async componentDidMount(){
  //   const response = await axios.get(
  //     "http://127.0.0.1:9000/api/recommendations"
  //     );
  //   this.setState ({recommendations: response.data.results})
  // }


  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
