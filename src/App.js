import React from "react";
import CounterMain from "./components/CounterMain";
import { Col, Row } from "react-bootstrap";
import Header from "./components/Header";
import trump from "./img/15-trump.svg";
import Footer from "./components/Footer";
import Quotes from "./components/Quotes";

function App() {
  return (
    <div className="app-container">
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
            style={{ backgroundColor: "black" }}
          />
        </Col>
        <Col lg={4} className="">
          <CounterMain />
        </Col>
      </Row>

      <Quotes />
      <Footer />
    </div>
  );
}

export default App;
