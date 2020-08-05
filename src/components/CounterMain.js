import React, { Component } from "react";
import Timer from "./Timer";
import TimerMoment from "./TimerMoment";

export default class CounterMain extends Component {
  constructor() {
    super();
    this.state = {
      specifiedDate: "November 3, 2020",
      newDate: "",
    };
    this.handleInput = this.handleInput.bind(this);
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

  render() {
  console.log(new Date())
    // console.log(this.newDate)
    return (
      <div className="main" >
        <span className="title-text">Presidential Election Day</span>
        <section>
          <h6>{this.state.specifiedDate}</h6>
        </section>
        <TimerMoment newDate={this.state.specifiedDate}/>
        {/* <Timer specifiedDate={this.state.specifiedDate} /> */}
        <section>
          {/* <input placeholder="new date" name="newDate" onChange={this.handleInput}/>
          <button type="button" onClick={()=> this.changeDate()}> submit</button> */}
        
        </section>
      </div>
    );
  }
}
