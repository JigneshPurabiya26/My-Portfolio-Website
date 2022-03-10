import React, { Component } from "react";
import { Consumer } from "../Context";
import {v4 as uuid} from "uuid";

class Writerecommendation extends Component {
  state = {
    name: "",
    email: "",
    company: "",
    designation: "",
    recommendation: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (Handler, event) => {
    event.preventDefault();
    const { name } = this.state;

    let isSuccessful = true;
    if (isSuccessful) {
      this.setState({
        submitMessage: `Thank you ${name} for your recommendation !`,
        submitMessageTextColor: "text-info",
      });
    } else {
      this.setState({
        submitMessage: "Oops! something went wrong :(",
        submitMessageTextColor: "text-danger",
      });
    }
    const newRecommendation = {
      id:uuid(),
      name:this.state.name,
      company: this.state.company,
      designation: this.state.designation,
      message: this.state.recommendation,
  }

  Handler("Add_Recommendation",newRecommendation);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { 
            submitMessageTextColor,
             submitMessage } = this.state;
          const {Handler} = value;
          return (
            <div
              className="container my-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="font-weight-light text-center py-5">
                What would you<span className="text-info"> Recommend</span>
              </h1>
              <div className="row justify-content-center">
                <div className="col-11 col-lg-5">
                  <form onSubmit={this.onSubmit.bind(this, Handler)}>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company / Institution *</label>
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="designation">Designation*</label>
                      <input
                        type="text"
                        name="designation"
                        className="form-control"
                        onChange={this.onChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="recommendation">Recommendation*</label>
                      <textarea
                        className="form-control"
                        name="recommendation"
                        rows="5"
                        onChange={this.onChange}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info float-right"
                      style={{ backgroundColor: "red" }}
                    >
                      Lot's of love
                    </button>
                  </form>
                </div>
              </div>

              <div className="py-5 mx-2 text-center">
                <h5 className={submitMessageTextColor}>{submitMessage}</h5>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Writerecommendation;
