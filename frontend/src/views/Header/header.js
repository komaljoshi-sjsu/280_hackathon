import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../logo.svg";
import Badge from "@mui/material/Badge";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: window.sessionStorage.getItem("user"),
      redirectFlag: false,
      country: this.props.changeCountry,
    };
  }
  setCountry = (e) => {
    this.props.changeCountry(e.target.value);
  };
  render() {
    return (
      <>
        <AppBar
          style={{ background: "#ffff" }}
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar color="white">
            <Typography variant="h6" noWrap component="div">
              <Logo height="50px" width="50px" />
            </Typography>
            <Typography fontWeight="Bold" color="Black">
              Macro Economic & Food Security
            </Typography>
            &nbsp;
            <div>
              <select
                name="Country"
                id="country-select"
                onChange={this.setCountry}
              >
                <option value="USA">USA</option>
                <option value="India">INDIA</option>
                <option value="China">CHINA</option>
              </select>
            </div>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
