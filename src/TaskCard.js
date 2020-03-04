import React, { Component } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";

class TaskCard extends Component {
  render() {
    return (
      <div>
        <div className="card  mb-3" id="card" style={{ maxWidth: "18rem" }}>
          <div className="row">
            <div className="col-9">
              <button className="card-header" id="card-header">
                {this.props.card.cardHeader}
              </button>
            </div>
            <div col-3>
              <div id="more-option-btn">
                <Dropdown
                  card={this.props.card}
                  key={this.props.card._id}
                  id={this.props.card._id}
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <div>
              <p>{this.props.card.scheduledAt}</p>
              <h4>{this.props.card.workDescription}</h4>
            </div>
          </div>
          <style>
            {`  
          #card{
              height: 18rem;
              border-radius: 10px;
              color:#050A9D;
              background-color: white;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          #card-header{
              border: 1px solid black;
              border-radius: 30px;
              color: #050A9D;
              border-color: #050A9D;
              width: 55%;
              text-align: center;
              margin-left: 5%;
              margin-top: 5%;
          }
          #more-option-btn{
            margin-top: 10.33px;
            padding-left: 70%;
          }
          .card-body{
              flex: 1 1 auto;
              min-height: 1px;
              padding: 1.25rem;
              margin-top: 30%
          }
          .card-body > div > h4{
            font-weight: bolder;
          }
      `}
          </style>
        </div>
      </div>
    );
  }
}
export default TaskCard;
