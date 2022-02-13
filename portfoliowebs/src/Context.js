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
          projects: [newObject, ...this.state.blogs],
        });
        break;

      case "Add_Recommendation":
        this.setState({
          projects: [newObject, ...this.state.recommendations],
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
        imageUrl:
          "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Other-html-5-icon.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 2,
        name: "CSS3",
        imageUrl:
          "https://cdn.iconscout.com/icon/free/png-256/css-37-226088.png",
        starsTotal: 3,
        starsActive: 2,
      },
      {
        id: 3,
        name: "Javascript",
        imageUrl:
          "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 4,
        name: "Bootstrap 4",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvT6kmy1pgSNCdpmdD8vwVS01C5YXKAh9UM1OARroY-z38AhqcWwnOTMk4E4T4aNF7j5s&usqp=CAU",
        starsTotal: 3,
        starsActive: 3,
      },
      {
        id: 5,
        name: "React",
        imageUrl:
          "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png",
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
    ],
    projects: [
      {
        id: 1,
        title: "Hotel Management System",
        imageUrl:
          "https://codecanyon.img.customer.envatousercontent.com/files/247419826/Inline_Preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=246d8fecb8b004dc0ac19070ea582e18",
        excerpt: "This project is about...",
        body: "body 1",
      },
      {
        id: 2,
        title: "Flappy Bird Game",
        imageUrl:
          "http://web.cse.ohio-state.edu/~wang.3602/courses/cse3541-2017-spring/project_proposal/Adrien_Lindner/flappyBird.jpg",
        excerpt: "This project is about...",
        body: "body 2",
      },
      {
        id: 3,
        title: "Multilingual IDE",
        imageUrl:
          "https://www.powertransformernews.com/wp-content/uploads/2021/02/code-5113374_640.jpg",
        excerpt: "This project is about...",
        body: "body 3",
      },
      {
        id: 4,
        title: "Health insurance cost prediction",
        imageUrl:
          "https://www.alliedmarketresearch.com/assets/sampleimages/predictive-analytics-in-healthcare-market-1579610537.jpeg",
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
        title: "Blog 1",
        excerpt: "This blog is about..",
        imageUrl:
          "https://global-edtech.com/wp-content/uploads/2021/01/Coding-Integrating-Computer-Science-within-other-subjects.png",
      },
      {
        id: 2,
        title: "Blog 2",
        excerpt: "This blog is about..",
        imageUrl:
          "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/124651659/original/db92a216c016a09556ecea240df950f19faad827/help-you-in-computer-science-and-mathematics.jpeg",
      },
      {
        id: 3,
        title: "Blog 3",
        excerpt: "This blog is about..",
        imageUrl:
          "https://www.teahub.io/photos/full/109-1094444_background-computer-science.jpg",
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
