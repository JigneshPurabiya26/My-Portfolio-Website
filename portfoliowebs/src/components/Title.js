import React from "react";
import Jignesh from "../assets/jignesh1.jpg";
import PropTypes from "prop-types"

function Title(props) {  
  // for getting the props from the parent component we have to pass a variable named as props in the child component
  const{name,leadText} = props; //this way we get the values given in the props in the parent element.
  // const name="Jignesh Purabiya";
  // const leadtext="I am an engineering student at St.john college of engineering and management.";
  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 pt-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-50"
            // src={require("../assets/jignesh1.jpg")} this is another way of adding the image which is stored locally
            //src="link of the image stored on the internet" this is the way of adding the image which is stored on the internet
            src={Jignesh}
            alt={name}
          />
        </div>
        <div className="col-12 col-md-6">
          <div className="font-weight-light" style={{fontSize: "50px"}}>
            Hi, I am <span className="text-info">{name}</span>
          </div>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}

//The default props are given so that even if we forget to give the prop value in the props this will pass the values to the props.
Title.defaultProps= {
  name:"Jignesh Purabiya",
  leadText:"I am an Engineering student at St.john's College of Engineering and Management."
}

//The PropTypes is used to validate if the value entered in the props is valid or not.
Title.propTypes = {
  name: PropTypes.string.isRequired,
  leadText: PropTypes.string.isRequired,
}
export default Title;
