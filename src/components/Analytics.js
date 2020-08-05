import React, { useEffect } from 'react';
import ReactGa from "react-ga";
// import{
//     BrowserRouter as Router,
//     Switch,
//     Route
// } from "react-router-dom"




export default function Analytics() {

    useEffect(()=>{
        ReactGa.initialize("UA-174457188-1")

        //to report page view
        // ReactGa.pageview("/")
        ReactGa.pageview(window.location.pathname + window.location.search)
    },[])

  return (
    <div className="">
    </div>
  );
}