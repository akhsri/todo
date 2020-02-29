import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import TaskCard from "./TaskCard";
import AddCard from "./AddCard";
import Tasks from "./Tasks";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Signin from "./Signin";
import LandingPage from "./LandingPage";
import AppBar from "./AppBar";
import Main from "./Main";

function App() {
  return (
    <div className="App">
      <div>
        <AppBar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
