import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./MenuListComposition.css";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function MenuListComposition() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="card__one">
      <div className="card-content__one">
        <p className="p1">Make the background image blur </p>
        <Button
          className="btn__1"
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}>
          Pass
        </Button>

        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <StyledMenuItem>
            <p>Pass</p>
            <CheckBoxIcon style={{ marginRight: "50px" }} />
          </StyledMenuItem>
          <StyledMenuItem>
            <p>Failed</p>
            <CheckBoxIcon style={{ marginRight: "50px" }} />
          </StyledMenuItem>
          <StyledMenuItem>
            <p>Retest</p>
            <CheckBoxIcon style={{ marginRight: "50px" }} />
          </StyledMenuItem>
          <StyledMenuItem>
            <p>Untest</p>
            <CheckBoxIcon style={{ marginRight: "50px" }} />
          </StyledMenuItem>
        </StyledMenu>
      </div>{" "}
    </div>
  );
}

/**These are the clickable buttons in the second column */
