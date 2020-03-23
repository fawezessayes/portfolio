// Modules
import React, { Component } from "react";
import ScrollReveal from "scrollreveal"

// conponents
import Hero     from "../components/Hero"
import About    from "../components/About"
import Projects from "../components/Projects"
import Contact  from "../components/Contact"
import Footer   from "../components/Footer"
import "../styling/main.css"

// code
class Page extends Component{
    componentDidMount(){
        ScrollReveal().reveal("h1", {delay: 200, origin: "left", duration: 1000, distance: "100px"});
        ScrollReveal().reveal(".button", {delay: 500, origin: "left", duration: 1000, distance: "100px"});
    }
    render(){
        return(
            <div>
                <Hero/>
                <About />
                <Projects />
                <Contact />
                <Footer />
            </div>
        )
    }
}
export default Page;