import React from "react";
import Common from "./Common";
import web from "../images/logo.jpg"


const btnValue = "Contact us"
const titleContent = "Welcome to our About page."

const About = () =>{
    return(
        <>
            <Common title={titleContent} contactBtn={btnValue} imgsrc={web} visit="/contact" />
        </>
    )
}

export default About;