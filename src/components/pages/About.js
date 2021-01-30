import React from "react";
import headshot from "../../assets/images/Face.png";

function About () {
    return (
        <main className="container">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="card mt-5">
                        <article className="card-body">
                            <h1 className="card-title">About Me</h1>
                            <hr />
                            <div className="content about-me">
                                <div>
                                    <img src={headshot} alt="My Headshot" />
                                </div>
                                <p className="card-text">
                                    &emsp;I am currently enrolled at Georgia Tech Full Stack Web Development 
                                    and a Junior at Georgia State University with a plan to acquire a Computer 
                                    Information System degree. Effective at combining creativity and problem 
                                    solving skills to develop user-friendly applications, knowledgeable of 
                                    computer networks, and understands hardware functionality.
                                </p>
                                <p className="card-text">
                                    &emsp;I am an advid computer enthusiast with the skills to accomplish 
                                    learning new technologies and programming languages involved with your 
                                    company or business.
                                </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default About;