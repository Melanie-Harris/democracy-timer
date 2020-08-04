import React from "react";
// import CounterMain from './components/CounterMain';
import { Col, Row } from "react-bootstrap";

export default function Quotes() {
  return (
    <div className="quote">
      <span className="vote">Vote, Vote, Vote</span>
        <blockquote>
      {/* <span>
        “Someone struggled for your right to vote. Use it.” – Susan B. Anthony
      </span><br/> */}
      <span>
        “Resistance isn’t enough. If we want change, we have to get out and
        vote.”― DaShanne Stokes
      </span><br/>
      <span>
        “There’s no such thing as a vote that doesn’t matter.”― Barack Obama
      </span><br/>
      <span>“Voting is not only our right—it is our power.” – Loung Ung</span><br/>
      {/* <span>
        “Every election is determined by the people who show up.” – Larry J.
        Sabato
      </span><br/> */}
      </blockquote>
      
    </div>
  );
}
