import React, { Component, Fragment } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import AppBar from "./AppBar";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  onValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log(this.state);
    axios("http://localhost:3005/users/login", {
      method: "POST",
      data: data
    })
      .then(response => {
        localStorage.setItem("token", response.data.token);
        this.props.history.push("/dashboard");
        console.log("response:", response);
        return response;
      })
      .catch(error => {
        toast(error.message);
      });
  };

  render() {
    return (
      <Fragment>
        <div>
          <AppBar />
        </div>
        <div id="container">
          <Row>
            <Col xs={12} md={6} className="back-img">
              <div>
                <img
                  src="http://66.media.tumblr.com/tumblr_m34i0zbR9R1qahug3o1_500.jpg"
                  alt="cover-img"
                ></img>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div id="form">
                <h3>Sign In</h3>
                <Form onSubmit={this.onSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={this.state.name}
                      onChange={this.onValueChange}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.name}
                      onChange={this.onValueChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" id="btn">
                    Signin
                  </Button>

                  <div>
                    <p id="signup-para">
                      Don't have an account?
                      <a href="#"> Sign up </a>
                    </p>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>

          <style>
            {`
                #container{
                    height: 100vh;
                }
                img{
                    width: 100%;
                    height: 100vh;
                }
    
                #form{
                    padding: 20% 25% 0 25%;
                }
    
                #form > h3 {
                    margin-bottom: 10%;
                }
    
                #btn{
                    border-radius: 30px;
                    padding: 12px 30px;
                    color: white;
                    background: black;
                    border: 1px solid;
                    margin-left: 30%;
                    margin-top: 5%;
                }
    
                #signup-para{
                    text-align: center;
                    color: #696969;
                    margin-top: 5%;
                }
                
                #signup-para > a{
                    color: black;
                    text-decoration: none;
                    font-weight: bolder;
                }
            `}
          </style>
        </div>
      </Fragment>
    );
  }
}

export default Signin;
