// Modules
import React, { Component } from "react";

// conponents
import "../styling/style.css"

// code
class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            projects: 5
        }
    }
    render(){
        return(
            <h1>My portfolio</h1>
        )
    }
}
export default Page;