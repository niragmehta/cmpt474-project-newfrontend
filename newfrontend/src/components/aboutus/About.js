import React, { Component } from "react";

export class About extends Component {
    render() {
        return (
            <div class="jumbotron">
                <h1 class="display-3">Hello, world!</h1>
                <p class="lead">
                    The Connect People App is a web app designed to bring together people
                    of different countries and cultures where information and experience
                    can be shared in a friendly and supportive environment.
                </p>
                <hr class="my-4" />
                <p>
                    The team is as follows
                    <br /> Nirag Mehta
                    <br /> Jordan Hoang
                    <br /> Michael Wong
                    <br /> Elias
                    <br /> Archer Zhi
                </p>
            </div>
        );
    }
}

export default About;