import React, { Component, Fragment } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import AppBar from "./AppBar";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
    // this.onValueChange = this.onvalueChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    const data = this.state;

    axios("http://localhost:3005/users", {
      method: "POST",
      data: data
    })
      .then(response => {
        if (response.status >= 300) {
          throw new Error("An error occured");
        }
        this.props.history.push("/dashboard");
        toast(
          `User ${this.state.user.firstName} ${this.state.user.lastName} signed up!`
        );
        console.log(response);
        return response;
      })
      .catch(error => {
        toast(error.message);
      });

    console.log(this.state);
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
                  src="https://www.gotitdigital.com/wp-content/uploads/2019/03/ezgif.com-gif-maker-1.webp"
                  alt="cover-img"
                ></img>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div id="form">
                <h3>Sign Up</h3>
                <Form onSubmit={this.onSubmit}>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    placeholder="First name"
                    name="firstName"
                    value={this.state.name}
                    onChange={this.onValueChange}
                  />
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    placeholder="Last name"
                    name="lastName"
                    value={this.state.name}
                    onChange={this.onValueChange}
                  />
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
                    Signup
                  </Button>

                  <div>
                    <p id="signin-para">
                      Already have an account?
                      <a href="#"> Sign in </a>
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

            #signin-para{
                text-align: center;
                color: #696969;
                margin-top: 5%;
            }
            
            #signin-para > a{
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
export default withRouter(Signup);
