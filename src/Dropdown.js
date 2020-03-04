import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <i
        className="material-icons"
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        more_vert
      </i>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <div className="row">
            <div className="col-3">
              <i class="material-icons">delete</i>
            </div>
            <div className="col-9">Remove</div>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
