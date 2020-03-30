import React, { Component } from "react";

export class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            country: '',
            region: '',
            password: '',
            password2: ''
        };

    }

onChange = e => this.setState({ [e.target.name]: e.target.value });

selectCountry (val) {
        this.setState({ country: val });
    }

selectRegion (val) {
        this.setState({ region: val });
    }

// Submitting a user
onSubmit = e => {
    e.preventDefault();
    const { username, email, country, region, password, password2 } = this.state;

    if(password !== password2){
        //this.props.createMessage({ passwordNotMatch: "Password do not match" }); Invalid
    } else {
        const newUser = {
            username,
            password,
            email,
            country,
            region
        };
        //this.props.register(newUser); Broken as of now.....
        //Debug statements, seems to work fine!
        // console.log(username);
        // console.log(password);
        // console.log(email);
        // console.log(country);
        // console.log(region);
    }

};

//An import of the old code with some changes.
render() {

    // if (this.props.isAuthenticated) {
    //     return <Redirect to="/" />;
    // }
    return (
        <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            onChange={this.onChange}
                            value=   {this.state.username}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            onChange={this.onChange}
                            value={this.state.email}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.onChange}
                            value={this.state.password}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password2"
                            onChange={this.onChange}
                            value={this.state.password2}
                        />
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <label>Country</label><br></br>*/}
                    {/*    <CountryDropdown*/}
                    {/*        value={country}*/}
                    {/*        onChange={(val) => this.selectCountry(val)} />*/}
                    {/*    <br></br><label>Region</label><br></br>*/}
                    {/*    <RegionDropdown*/}
                    {/*        country={country}*/}
                    {/*        value={region}*/}
                    {/*        onChange={(val) => this.selectRegion(val)} />*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>

                    {/*<p>*/}
                    {/*    Already have an account? <Link to="/login">Login</Link>*/}
                    {/*</p>*/}

                    </form>
                </div>
            </div>
        );
    }
}
