import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../swa_logo_dark.svg";
import Button from "@mui/material/Button";
import Dropdown from "react-bootstrap/Dropdown";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: window.sessionStorage.getItem("user"),
      redirectFlag: false,
    };
  }
  handleLogout = () => {
    window.sessionStorage.removeItem("user");
    this.setState({ redirectFlag: true });
  };
  render() {
    let redirectVar = null;
    const user = this.state.user;
    if (this.state.redirectFlag) {
      redirectVar = <Redirect to={{ pathname: "/login" }} />;
    }
    return (
      <>
        {redirectVar}
        <AppBar
          style={{ background: "#ffff" }}
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar color="white">
            <Typography variant="h6" noWrap component="div">
              <Logo />
            </Typography>
            {user === null ? (
              <>
                <Button
                  size="small"
                  sx={{ fontSize: 14 }}
                  style={{ "padding-left": "700px" }}
                >
                  Login
                </Button>
                <Button
                  size="small"
                  sx={{ fontSize: 14 }}
                  style={{ "padding-left": "20px" }}
                >
                  signup
                </Button>
              </>
            ) : (
              <div>
                <Dropdown>
                  <Dropdown.Toggle className="header-user" id="dropdown-basic">
                    {user.firstName}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/userprofile">
                      My Profile
                    </Dropdown.Item>
                    <Dropdown.Item href="creategroup">
                      Create Group
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleLogout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
