import React, { Component } from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
import AddTask from "./AddTask";
import Modal from "react-bootstrap-modal";

class Tasks extends Component {
  state = {
    cards: [],
    open: false
  };
  componentDidMount() {
    const data = this.state;
    console.log("data", data);
    const key = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`
    };
    axios("http://localhost:3005/cards", {
      method: "GET",
      data: data,
      headers: headers
    })
      .then(response => {
        if (response.status > 300) {
          throw new Error("An error occured");
        }
        console.log("response: ", response);
        this.setState({ cards: response.data });
        console.log("New state", this.state);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  closeModal = () => {
    this.setState({ open: false });
  };
  handleShow = () => {
    this.setState({ open: true });
    console.log("State after click", this.state);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row" id="head-recent-row">
            <div className="col" id="head-recent-col">
              <h3>
                Recents
                <button
                  type="button"
                  className="btn "
                  id="add-btn"
                  onClick={this.handleShow}
                  onHide={this.closeModal}
                  show={this.state.open}
                >
                  Add Tasks
                </button>
              </h3>
            </div>
          </div>
          <div className="card-deck">
            {this.state.cards.map(card => {
              return <TaskCard card={card} key={card._id} id={card._id} />;
            })}
          </div>
        </div>
        <style>
          {`
            #head-recent-row{
              margin: 5% 0 2% 0; 
            }
            #head-recent-col{
              padding: 0px;
            }
            #add-btn{
              margin-left: 20px;
              border: 1px solid;
              border-radius: 30px;
              width: 114.39px;
              height: 49.48px;
            }
          `}
        </style>
      </div>
    );
  }
}
export default Tasks;
