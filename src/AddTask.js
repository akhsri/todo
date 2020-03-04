import React, { Component, Fragment } from "react";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";

class AddTasks extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
      scheduledAt: "",
      taskDescription: "",
      show: false
    };
  }
  onValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name, event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    const data = this.state;

    axios("http://localhost:3005/cards", {
      method: "POST",
      data: data
    })
      .then(response => {
        if (response.status >= 300) {
          throw new Error("An error occured!");
        }

        toast(`Card added successfully!`);
        this.props.history.push("/dashboard");
        console.log(response);
        return response;
      })
      .catch(error => {
        toast(error.message);
      });

    console.log(this.state);
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <Fragment>
        <Button variant="primary" onClick={this.handleShow}>
          Add Tasks
        </Button>
        <Modal.Dialog show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.onSubmit}>
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                placeholder="Task Name"
                name="taskName"
                value={this.state.name}
                onChange={this.onValueChange}
              />
              <Form.Label>Scheduled At</Form.Label>
              <Form.Control
                placeholder="Scheduled At"
                name="scheduledAt"
                value={this.state.name}
                onChange={this.onValueChange}
              />
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                placeholder="Task Description"
                name="taskDescription"
                value={this.state.name}
                onChange={this.onValueChange}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={this.onSubmit}>
              Add Task
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Fragment>
    );
  }
}
export default AddTasks;
