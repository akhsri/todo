import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import TaskCard from "./TaskCard";
import AddCard from "./AddCard";
import Tasks from "./Tasks";
import AppBar from "./Authenticated.AppBar";

const Dashboard = () => {
  return (
    <Fragment>
      <div>
        <AppBar />
      </div>
      <div className="Dashboard">
        <div>
          <div className="row">
            <div className="col-12 col-md-2" id="sidebar-col">
              <Sidebar />
            </div>
            <div className="col-12 col-md-9">
              <Tasks />
            </div>
          </div>
        </div>
        <style>
          {`
        .Dashboard{
          background-color: #9e9e9e45;
        }
        .container{
          margin: 0px;
        }
        #sidebar-col{
          margin-top: 40px;
        }
      `}
        </style>
      </div>
    </Fragment>
  );
};
export default Dashboard;
