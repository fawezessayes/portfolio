import React from "react";


function Project(props){
    return(
            <section className="proj_container">
                <section className="proj_txt">
                    <h1 className="proj-title">Project Title</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, placeat sunt dolor nemo repellat quam
                    hey there wlcome to 2020 hqhhh
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis, placeat sunt dolor nemo repellat quam
                    hey there wlcome to 2020 hqhhh

                    </p>
                    <section className="btn_container">
                        <button className="btn">See live</button>
                        <p id="src_code">Source Code</p>
                    </section>
                </section>
                <img src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" alt="project demo"/>
            </section>
    )
}
export default Project;