import React, { Component } from "react";
import moment, {duration} from "moment";

//** */ duration allows us to specify point in time and gives us the amount of time from a stated time until another (duration)

export default class TimerMoment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        days:0,
        hours:0,
        minutes:0,
        seconds:0
    };
  }

  setTimer(){
    const currentDate = moment()
    const newDate = moment(this.props.newDate)
    const timerDuration = duration(newDate.diff(currentDate))

    const days = Math.floor(timerDuration.asDays())
    //** */ used asDays()method returns the number of in day format. asDays() returns the total duration, in units of whole and fractional days. .days() returns the number of days that are remaining after accounting for .years() and .months().
    const hours = timerDuration.hours()
    const minutes = timerDuration.minutes()
    const seconds = timerDuration.seconds()

    this.setState({
      days:days,
      hours:hours,
      minutes:minutes,
      seconds:seconds
    })
  }

  componentDidMount(){
    //** */  used to get clock attributes right away instead of showing zeros
    this.setTimer()
    this.interval = setInterval(()=> {
      this.setTimer()

    }, 1000)
    //** */ number in milliseconds. 1000 milliseconds = 1 second
  }

  componentWillUnmount(){
    clearInterval(this.interval)
    //** */ when page is unmounted we do not want additional resources used to continue to calculate the interval
    //** */ no resources used when interval is unmounted from page by using this method with interval
    //** */ want access to when component unmounts
  }

leadingZero(num){ return num < 10 ? "0" + num : num}

  render() {
    const keyStyles = {
      fontSize:"1.6rem"
    };
      
    return (
      <div> 
       <section style={keyStyles} className="keys-display">
          <div>{this.leadingZero(this.state.days)} Days</div><br/>
          <div>{this.leadingZero(this.state.hours)} Hours</div><br/>
          <div>{this.leadingZero(this.state.minutes)} Minutes</div><br/>
          <div>{this.leadingZero(this.state.seconds)} Seconds</div>
        </section>
      </div>
    );
  }
}
