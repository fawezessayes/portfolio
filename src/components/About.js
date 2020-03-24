import React from "react";
import "animate.css"
function About(props){
    return(
        <section className="about_frame_container">
            <h1 className="container_title">About me</h1>
            <section className="about_container"> 
                <img id="me" src="https://simplfolio.netlify.com/assets/profile.f6fd88820ecef02e2cb672446058641d.jpg" alt="me xD"/>
                <section className="txt">
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Error modi optio perferendis fugiat molestias!
                    Recusandae ducimus excepturi labore aliquid minima
                    harum voluptas cum tenetur optio nemo, architecto
                    voluptates fugit illo?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugit in, sequi molestias earum labore expedita quibusdam 
                    similique facilis veniam explicabo dolorem ab hic,
                    repellendus iste fuga esse sint iure incidunt!
                    </p>
                    <button className="btn">Learn more</button>
                </section>
            </section>
        </section>
    )
}
export default About;