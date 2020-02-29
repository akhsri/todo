import React, { Component, Fragment } from "react";
import { Router, Route, NavLink, HashRouter } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
import { Nav, Row, Col } from "react-bootstrap";

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Row id="hero">
            <Col xs={12} md={6} id="col-1">
              <h1>
                Trello lets you work more collaboratively and get more done.
              </h1>
              <p>
                Trello’s boards, lists, and cards enable you to organize and
                prioritize your projects in a fun, flexible, and rewarding way.
              </p>
            </Col>
            <Col xs={12} md={6} id="col-2">
              <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg"></img>
            </Col>
          </Row>
        </div>
        <style>
          {`

            #nav{
                background-color: #256cc2;
            }
            #hero{
                background: linear-gradient(135deg, #0079bf, #5067c5);
            }
            #col-1{
                padding: 10%;
            color: white;
            }
            #col-2{
                padding: 10%;
            }
            #col-2 > img {
                max-width: 100%
            }
            .nav-item > a{
                color: white;
            }

        `}
        </style>
      </Fragment>
    );
  }
}
export default LandingPage;
