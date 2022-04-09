import * as React from "react";

import Box from "@mui/material/Box";
import { ReactComponent as Logo } from "../../../swa_logo_dark.svg";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Arrow from "@mui/icons-material/ArrowRightAltSharp";

import Header from "../../Header/header";
//import Profile from "../../";
const drawerWidth = 240;
class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setPage = (page) => {
    this.setState({ page: page, redirectFlag: false });
  };

  componentDidMount = () => {};
  handlePageChange = (e) => {
    if (e.target.innerText === "My Profile") {
      this.setState({
        page: "profile",
      });
    }
    if (e.target.innerText === "Search Flight") {
      this.setState({
        page: "search",
      });
    }
  };

  handlePayment = () => {
    this.setState({
      page: "payment",
    });
  };

  handleBooking = () => {
    this.setState({
      page: "booking",
    });
  };

  handleRewards = () => {
    this.setState({
      page: "rewards",
    });
  };

  handleAddFlight = () => {
    this.setState({
      page: "addFlight",
    });
  };

  handleEditFlight = () => {
    this.setState({
      page: "editFlight",
    });
  };

  handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("payment");
    localStorage.removeItem("passengers");
    localStorage.removeItem("flight");
    localStorage.removeItem("bookingid");
    this.setState({ user: null });
    this.setState({ redirectFlag: true });
  };

  render() {
    /*let redirectVar = null;
    if (this.state.redirectFlag) {
      redirectVar = <Redirect to={{ pathname: "/" }} />;
    }*/
    return (
      <div>
        <Header></Header>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <>
                <ListItem
                  button
                  key="SearchFlight"
                  onClick={this.handlePageChange}
                >
                  {" "}
                  <ListItemText primary="Macroeconomic" />
                </ListItem>
                <ListItem button key="GDP" onClick={this.handleRewards}>
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="GDP" />
                </ListItem>
                <ListItem
                  button
                  onClick={this.handlePageChange}
                  key="MyProfile"
                >
                  <ListItemIcon>
                    {" "}
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="FDI Inflows" />
                </ListItem>

                <ListItem
                  button
                  key="FDI Outflows"
                  onClick={this.handleBooking}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="FDI OutFlows" />
                </ListItem>
                <ListItem
                  button
                  key="SearchFlight"
                  onClick={this.handlePageChange}
                >
                  {" "}
                  <ListItemText primary="Agriculture" />
                </ListItem>
                <ListItem button key="GDP" onClick={this.handleRewards}>
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Contribution of Agri" />
                </ListItem>
                <ListItem
                  button
                  onClick={this.handlePageChange}
                  key="MyProfile"
                >
                  <ListItemIcon>
                    {" "}
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Credit" />
                </ListItem>

                <ListItem
                  button
                  key="FDI Outflows"
                  onClick={this.handleBooking}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Fertilizers" />
                </ListItem>
                <ListItem
                  button
                  key="FDI Outflows"
                  onClick={this.handleBooking}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Fertilizers Prod" />
                </ListItem>
                <ListItemText primary="Debt Services" />

                <ListItem button key="GDP" onClick={this.handleRewards}>
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Contribution of Agri" />
                </ListItem>
                <ListItem
                  button
                  onClick={this.handlePageChange}
                  key="MyProfile"
                >
                  <ListItemIcon>
                    {" "}
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Credit" />
                </ListItem>

                <ListItem
                  button
                  key="FDI Outflows"
                  onClick={this.handleBooking}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Fertilizers" />
                </ListItem>
                <ListItem
                  button
                  key="FDI Outflows"
                  onClick={this.handleBooking}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Fertilizers Prod" />
                </ListItem>
              </>
            </List>
            <Divider />
            <List>
              {["Import/export Flows"].map((text, index) => (
                <ListItem button key={text} onClick={this.handleLogout}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
          style={{ "padding-left": "250px", "padding-top": "100px" }}
        ></Box>
      </div>
    );
  }
}

export default DashBoard;
