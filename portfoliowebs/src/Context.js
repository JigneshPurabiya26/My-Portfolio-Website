import React,{Component} from "react";

const Context = React.createContext();
// This is the boiler plate code for setting up context api for any app 

export class Provider extends Component{

    state = {
     projects : [
            {
              id:1,
              title:"Hotel Management System",
              imageUrl:"https://codecanyon.img.customer.envatousercontent.com/files/247419826/Inline_Preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=246d8fecb8b004dc0ac19070ea582e18",
              excerpt:"This project is about...",    
            },
            {
              id:2,
              title:"Flappy Bird Game",
              imageUrl:"http://web.cse.ohio-state.edu/~wang.3602/courses/cse3541-2017-spring/project_proposal/Adrien_Lindner/flappyBird.jpg",
              excerpt:"This project is about...",    
            },
            {
              id:3,
              title:"Multilingual IDE",
              imageUrl:"https://www.powertransformernews.com/wp-content/uploads/2021/02/code-5113374_640.jpg",
              excerpt:"This project is about...",    
            },
            {
                id:4,
                title:"Health insurance cost prediction",
                imageUrl:"https://www.alliedmarketresearch.com/assets/sampleimages/predictive-analytics-in-healthcare-market-1579610537.jpeg",
                excerpt:"This project is about...",    
              },
          ],
    };

    render(){
        return (
            <Context.Provider value = {this.state}> 
                {this.props.children}
            </Context.Provider>
        );
    }
}

export const Consumer = Context.Consumer;