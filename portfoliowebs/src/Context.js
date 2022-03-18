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
        imageUrl:require("././assets/Other-html-5-icon.png").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:require("././assets/css-37-226088.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:require("././assets/js1.webp").default,
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:require("././assets/bootstrap.png").default,        
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 5,
        name: "React",
        imageUrl:require("././assets/react.webp").default,
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
        imageUrl:require("././assets/python.webp").default,
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 8,
        name: "Flask",
        imageUrl:require("././assets/flask.png").default,
        starsTotal: 3,
        starsActive: 2,
      },
    ],
    projects: [
      {
        id: 1,
        title: "Hotel Management System",
        imageUrl:require("././assets/Inline_Preview.jpg").default,
        excerpt: "This project is about...",
        body: "body 1",
      },
      {
        id: 2,
        title: "Flappy Bird Game",
        imageUrl:require("././assets/flappyBird.jpg").default,
        excerpt: "This project is about...",
        body: "body 2",
      },
      {
        id: 3,
        title: "Multilingual IDE",
        imageUrl:require("././assets/IDE.jpg").default,
        excerpt: "This project is about...",
        body: "body 3",
      },
      {
        id: 4,
        title: "Health insurance cost prediction",
        imageUrl:require("././assets/HC.jpeg").default,
        excerpt: "This project is about...",
        body: "body 4",
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
        body: "body 1",
        imageUrl: require('././assets/MLcourses.jpeg').default,
      },
      {
        id: 2,
        title: "Java Course",
        excerpt: "Coding Ninjas Java Course",
        body: "body 2",
        imageUrl: require('././assets/Codingninjas.jpeg').default,
      },
      {
        id: 3,
        title: "Full Stack Web Development",
        excerpt: "Unschool Web development course",
        body: "body 1",
        imageUrl:require("././assets/Full-Stack-Developer.webp").default,
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
