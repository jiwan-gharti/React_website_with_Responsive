import React from "react";
import Common from "./Common";
import image from '../images/blog.jpg'


const getStartedBtn = "Get Started";
const titleContent = " We have a team of talented developer making websites.";
const Home = () =>{
    return(
       <>
        <Common title={titleContent} contactBtn={getStartedBtn} imgsrc={image} visit="/service" />
       </>
    )
}

export default Home;