import React from "react";

function Hero(props){
    return(
        <section className="hero">
            <section className="hero_container">
                <h1 id="hi">Hi, my name is </h1>
                <br/>
                <h1 id="job">I'm the Unknown Developper.</h1>
                <div className="button">
                    <button className="btn">Learn more</button>
                </div>
            </section>
        </section>
    )
}
export default Hero;