import React, {Component} from 'react';    //for using the component class we import it by doing some destructuring
import './App.css';

function App() {   //this is the functional component which has some basic jsx i.e. javascript code 
// written in it      
  // let a = 30;
  // let b = 50;
  // let name = "For Jignesh";
  // const customStyle = {
  //   color : "Black",
  //   backgroundColor : "Red"
  // }
  return (     // functional component also uses the return keyword to display the jsx onto the website
    <div className="App">
      <h1 style={customStyle}>Portfolio website </h1> 
        {/* style={{color:"red",backgroundColor:"black"}} using this way we can add css  */}
    </div>
  );
}  
//   //this is jsx i.e. Java script XML
//   //for adding an external css we give classname to the element
// }
// class App extends Component{  //every class component extends the Component class of the react
//     render() {   // in the class component we define the render method 
//       return (    // in the return keyword we write what we want to render on to the website 
//         <div>
//           <h1 >Portfolio website of Jignesh Manoj Purabiya</h1> 
//         </div>  
//       );
//     }  
// }    
// In JSX all the elements should have a closing tag 
// export default App;
//The functional component is used to just render the ui on to the screen and it is recommended to use the functional component whenever possiblle. 
//The class component is used to fetch data from the backend.