import React from "react";
import CounterMain from "./components/CounterMain";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import trump from "./img/15-trump.svg";
import trump2 from "./img/13-trump.svg"
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import CounterMain2 from "./components/CounterMain2";
import ReactGa from "react-ga";
import Analytics from "./components/Analytics";
import TimerMoment from "./components/TimerMoment";

export default class App extends React.Component {
  constructor(){
    super()
    this.state={ 
      darkMode: true, 
    }
    this.handleDarkMode = this.handleDarkMode.bind(this);
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
      ? "Lights Off"
      : "lights Off";

    const darkStyles = {
      backgroundColor: "black",
      color: "white",
    };
    const lightStyles = {
      backgroundColor: "white",
      color: "black",
    };
    const buttonStyle={
      fontSize:".9rem",
      textAlign:"center"
    }
    const cursor={
      cursor: "not-allowed",
      // color: "red"
    }

    return (
      <div style={display === "" ? darkStyles : lightStyles} className="app-container container-fluid">
       <Analytics/>
       <TimerMoment/>
       {this.state.currentImg}
        <Header />
        <Row>
          <Col sm={4}>
            <CounterMain />
          </Col>
          <Col sm={4}>
            <img
              src={trump}
              className="logo"
              alt="logo"
              style={cursor}
            />
             {/* <button style={buttonStyle} onClick={this.handleDarkMode}>{buttonText}</button>  */}
          </Col>
        
          <Col sm={4} className="">
            <CounterMain2/>
          </Col>
        </Row>

        <Quotes />
        <Footer />
      </div>
    );
  }
}
