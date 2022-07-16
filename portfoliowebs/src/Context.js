import React, { Component } from "react";

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

      case "Add_Recommendation":
        this.setState({
          recommendations: [newObject, ...this.state.recommendations],
        });
        break;

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
        name: "HTML5",
        imageUrl: require("././assets/Other-html-5-icon.png").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl: require("././assets/css-37-226088.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl: require("././assets/js1.webp").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl: require("././assets/bootstrap.png").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 5,
        name: "React",
        imageUrl: require("././assets/react.webp").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 6,
        name: "MySQL",
        imageUrl: require("././assets/sql.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 7,
        name: "Python",
        imageUrl: require("././assets/python.webp").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Tableau",
        imageUrl: require("././assets/Tableau.jpg").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 9,
        name: "Flask",
        imageUrl: require("././assets/flask.png").default,
        starsTotal: 3,
        starsActive: 2,
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
        title: "Flappy Bird Game",
        imageUrl: require("././assets/flappyBird.png").default,
        excerpt: "Game created using Python",
        body: "This is a Flappy Bird game created in Python using the Pygame library, the basic rule of this game is to play until the bird hits the obstacle and after hitting the obstacle we need to press Enter to restart the game, click the link below to checkout the project.",
        link: "Github Link :- https://github.com/JigneshPurabiya26/FlappyBird_Game.git",
      },
      {
        id: 3,
        title: "Multilingual IDE",
        imageUrl: require("././assets/terminal.png").default,
        excerpt: "Online IDE using HTML, CSS, JS & PHP",
        body: "This is an online IDE(Integrated Development Environment) I have created using HTML, PHP and Javascript which supports multiple languages for coding such as C, C++, Python, Javascript and PHP.This provides the benefit to the user to code online without downloading any libraries or dependencies in their system. It also has some basic dynamic functionalities such as Undo and Redo options, formatting the document and also has the option of changing the theme of IDE as well, in order to checkout the complete project click the link below.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Online-Multilingual-IDE.git",
      },
      {
        id: 4,
        title:"Car Parking Sensor",
        imageUrl : require("././assets/car_parking.jpg").default,
        excerpt: "Car Parking Sensor(Ultrasonic Sensor)",
        body:"This is a Hardware Project based on sensors for sensing the obstacles at the front and rear end of a vehicle.The basic premise of this project is that the closer a reversing car gets to an object, the greater the frequency of beeps from a buzzer. Eventually if the car gets too close to an object, the buzzer will remain on continuously, click the link below in order to know about the complete project and all the Hardware components required.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Car_Parking_Sensor.git",
      },  
      {
        id: 5,
        title: "Hotel Management System",
        imageUrl: require("././assets/jdbc.png").default,
        excerpt: "JDBC Connectivity",
        body:"This is a basic Hotel Management System that I created using Java, inorder to create such type of management systems one needs the knowledge of Java language and MySql, I also created the database which contains different tables for room booking, customer booking and many more, click the link below to checkout the complete project.",
        link:"Github Link :- https://github.com/JigneshPurabiya26/Hotel-Management.git",
      },
    ],
    recommendations: [
      {
        id: 1,
        name: "Random guy1",
        company: "Abc",
        designation: "CEO",
        message: "He is clueless",
      },
      {
        id: 2,
        name: "Random guy2",
        company: "Abc",
        designation: "CEO",
        message: "He is ambitious",
      },
      {
        id: 3,
        name: "Random guy3",
        company: "Abc",
        designation: "CEO",
        message: "He is awesome",
      },
      {
        id: 4,
        name: "Random guy4",
        company: "Abc",
        designation: "CEO",
        message: "He is great",
      },
    ],
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
        title: "Java Course",
        excerpt: "Coding Ninjas Java Course",
        body: "Certificate Link :- https://files.codingninjas.in/certi_image60894e08b4375c6eaff84b687dedc5d111c45.jpg",
        imageUrl: require('././assets/Codingninjas.jpeg').default,
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
        body: "Certificate Link :- : https://cert.devtown.in.tech/verify/Z1qhc0v",
        imageUrl: require('././assets/Devtown.png').default,
      },
      {
        id: 5,
        title: "Full Stack Web Development",
        excerpt: "Unschool Web development course",
        body: "Certificate Link :- Course in Progress",
        imageUrl: require("././assets/Full-Stack-Developer.webp").default,
      },
      {
        id: 6,
        title: "MLOps Certification",
        excerpt: "Udemy MLOps Certification",
        body: "Certificate Link :- https://udemy-certificate.s3.amazonaws.com/image/UC-7e5dee01-f17b-4643-aec6-b44479204624.jpg?v=1655031450000",
        imageUrl: require("././assets/MLops.png").default,
      },
    ],
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
