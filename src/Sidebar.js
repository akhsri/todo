import React from "react";

const Sidebar = () => {
  return (
    <div className="col-12 col-md-12" id="nav-container">
      <div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <div>
              <a className="nav-link active" href="#">
                <i className="material-icons md-inactive">dashboard</i>
                Dashboard
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i className="material-icons">done_all</i>
              All tasks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              <i class="material-icons">query_builder</i>
              Recent
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              <i class="material-icons">favorite_border</i>
              Favorites
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              <i class="material-icons">settings</i>
              Settings
            </a>
          </li>
          <li class="nav-item">
            <a
              className="nav-link active"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              <i className="material-icons">notifications_none</i>
              Notifications
            </a>
          </li>
        </ul>
        <style>
          {`
        i{
          float: left;
        }
        a{
          color: gray;
          
        }
        #nav-container{
          
          min-height: 100vh;
        }
        
        `}
        </style>
      </div>
    </div>
  );
};
export default Sidebar;
