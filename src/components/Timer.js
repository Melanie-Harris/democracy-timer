import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    };
    // console.log(this.props)
  }
componentWillMount(){
    this.getRemainingTime(this.props.specifiedDate)
}
  componentDidMount(){
      setInterval(()=> this.getRemainingTime(this.props.specifiedDate),1000)
    //   milliseconds
  }

  getRemainingTime(specifiedDate){
      const time = Date.parse(specifiedDate) - Date.parse(new Date())
    //   console.log("time", time)
    const seconds = Math.floor((time/1000)%60)
    const minutes = Math.floor((time/1000/60)%60)
    const hours = Math.floor(time/(1000*60*60)%24)
    const days = Math.floor(time/(1000*60*60*24))
    // console.log("secs",seconds,"mins",minutes,"hours",hours,"days", days)

    this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    })
  }

  leadingZero(num){ return num < 10 ? "0" + num : num}

  render() {
      
    //   this.getRemainingTime(this.props.specifiedDate)
    return (
       
      <div> 
        <section className="keys-display">
          <div>{this.leadingZero(this.state.days)} Days</div>
          <div>{this.leadingZero(this.state.hours)} Hours</div>
          <div>{this.leadingZero(this.state.minutes)} Minutes</div>
          <div>{this.leadingZero(this.state.seconds)} Seconds</div>
        </section>
      </div>
    );
  }
}
