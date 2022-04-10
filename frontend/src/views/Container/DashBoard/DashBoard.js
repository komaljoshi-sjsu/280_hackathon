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
import Gdp from "../../Macroeconomic/gdpPage.js";
import GdpCurrentUsd from "../../Macroeconomic/GdpCurrentUsd.js";
import GdpCurrentAccoutnBalance from "../../Macroeconomic/GdpCurrentAccoutnBalance.js";
import FDINet from "../../Macroeconomic/FDINet.js";
import FDINetInflows from "../../Macroeconomic/FDINetInflows.js";
import FDINetOutflows from "../../Macroeconomic/FDINetOutflows.js";
import FDINetOutflowsPercentGDP from "../../Macroeconomic/FDINetOutflowsPercentGDP.js";
import Header from "../../Header/header";
import Manufacturing from "../../Agriculture/Manufacturing";
import AnnualGrowth from "../../Agriculture/AnnualGrowth";
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

  changeGraphType = (type) => {
    this.setState({
      page: type,
    });
  };
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

  handleGdp = () => {
    this.setState({
      page: "gdp",
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
                <ListItem
                  button
                  key="GDP"
                  onClick={() => this.changeGraphType("gdp")}
                >
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="GDP Growth Rage" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => this.changeGraphType("gdpCurrentUsd")}
                  key="gdpCurrentUsd"
                >
                  <ListItemIcon>
                    {" "}
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="GDP Current USD" />
                </ListItem>

                <ListItem
                  button
                  key="Current Account Balance (% of GDP)"
                  onClick={() => this.changeGraphType("currentAccountBalance")}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Current Account Balance (% of GDP)" />
                </ListItem>
                <ListItem
                  button
                  key="Foreign direct investment, net (BoP, current US$)"
                  onClick={() => this.changeGraphType("fdiNet")}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Foreign direct investment, net (BoP, current US$)" />
                </ListItem>
                <ListItem
                  button
                  key="Foreign direct investment, net outflows (BoP, current US$) "
                  onClick={() => this.changeGraphType("fDINetOutflows")}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Foreign direct investment, net outflows (BoP, current US$) " />
                </ListItem>
                <ListItem
                  button
                  key="Foreign direct investment, net inflows (% of GDP) "
                  onClick={() => this.changeGraphType("fdiNetInflows")}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Foreign direct investment, net inflows (% of GDP)" />
                </ListItem>
                <ListItem
                  button
                  key="FDI-NetOutflows(%ofGDP)"
                  onClick={() =>
                    this.changeGraphType("fDINetOutflowsPercentGDP")
                  }
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="FDI-NetOutflows(%ofGDP)" />
                </ListItem>
                <ListItem
                  button
                  key="SearchFlight"
                  onClick={this.handlePageChange}
                >
                  {" "}
                  <ListItemText primary="Agriculture" />
                </ListItem>
                <ListItem
                  button
                  key="manufacturing"
                  onClick={() => this.changeGraphType("manufacturing")}
                >
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Manufacturing(%GDP)" />
                </ListItem>
                <ListItem
                  button
                  key="annualgrowth"
                  onClick={() => this.changeGraphType("annualgrowth")}
                >
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Agriculture, forestry, and fishing, value added" />
                </ListItem>
                <ListItem
                  button
                  onClick={this.handlePageChange}
                  key="MyProfile1"
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
                  key="MyProfile2"
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
        >
          {this.state.page === "gdp" ? <Gdp /> : null}
          {this.state.page === "manufacturing" ? <Manufacturing /> : null}
          {this.state.page === "annualgrowth" ? <AnnualGrowth /> : null}
          {this.state.page === "gdpCurrentUsd" ? <GdpCurrentUsd /> : null}
          {this.state.page === "currentAccountBalance" ? (
            <GdpCurrentAccoutnBalance />
          ) : null}
          {this.state.page === "fdiNet" ? <FDINet /> : null}
          {this.state.page === "fdiNetInflows" ? <FDINetInflows /> : null}
          {this.state.page === "fDINetOutflows" ? <FDINetOutflows /> : null}
          {this.state.page === "fDINetOutflowsPercentGDP" ? (
            <FDINetOutflowsPercentGDP />
          ) : null}
        </Box>
      </div>
    );
  }
}

export default DashBoard;
