import React, { useEffect } from 'react';
import ReactGa from "react-ga";




export default function Analytics() {

    useEffect(()=>{
        ReactGa.initialize("UA-174457188-1")

        //to report page view
        ReactGa.pageview("/")
    },[])

  return (
    <div className="">
      
       Tracking
     
    </div>
  );
}