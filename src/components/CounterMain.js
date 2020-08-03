import React, { Component } from "react";
import Timer from "./Timer";

export default class CounterMain extends Component {
  constructor() {
    super();
    this.state = {
      specifiedDate: "January 1, 2021",
      newDate: "",
      darkMode: true,
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleDarkMode = this.handleDarkMode.bind(this);
  }

  changeDate() {
    // console.log("state", this.state)
    this.setState({
      specifiedDate: this.state.newDate,

      // this.setState(prevState =>{
      //     return{
      //         specifiedDate: prevState.newDate
      //     }
    });
  }
  handleInput(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleDarkMode() {
    this.setState((prevState) => {
      return {
        // returning the opposite of darkMode initial state of true
        darkMode: !prevState.darkMode,
      };
    });
  }

  render() {
    let display = this.state.darkMode ? "" : null;
    let buttonText = this.state.darkMode
      ? "Turn Dark Mode Off"
      : "Turn Light Mode Off";

    const darkStyles = {
      backgroundColor: "black",
      color: "white",
    };
    const lightStyles = {
      backgroundColor: "white",
      color: "black",
    };
    // console.log(this.newDate)
    return (
      <div className="main" style={display === "" ? darkStyles : lightStyles}>
        {/* <button onClick={this.handleDarkMode}>{buttonText}</button> */}
        <h1 className="">Trump Out of Office</h1>
        <section>
          <h6>{this.state.specifiedDate}</h6>
        </section>
        <Timer specifiedDate={this.state.specifiedDate} />
        <section>
          {/* <input placeholder="new date" name="newDate" onChange={this.handleInput}/>
          <button type="button" onClick={()=> this.changeDate()}> submit</button> */}
        
        </section>
      </div>
    );
  }
}
