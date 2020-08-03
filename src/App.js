import React from "react";
import CounterMain from "./components/CounterMain";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import trump from "./img/15-trump.svg";
import trump2 from "./img/13-trump.svg"
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";
import CounterMain2 from "./components/CounterMain2";

export default class App extends React.Component {
  constructor(){
    super()
    this.state={ darkMode: true,}
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
    return (
      <div style={display === "" ? darkStyles : lightStyles} className="app-container">
       
        <Header />
        <Row>
          <Col lg={4}>
            <CounterMain />
          </Col>
          <Col lg={4}>
            <img
              src={trump}
              className="App-logo"
              alt="logo"
              style={{textAlign:"center"}}
            />
             <button style={buttonStyle} onClick={this.handleDarkMode}>{buttonText}</button> 
          </Col>
          <Col lg={4} className="">
            <CounterMain2/>
          </Col>
        </Row>

        <Quotes />
        <Footer />
      </div>
    );
  }
}
