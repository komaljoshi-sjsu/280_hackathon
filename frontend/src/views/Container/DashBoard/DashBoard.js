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
import Header from "../../Header/header";
import Manufacturing from "../../Agriculture/Manufacturing";
import AnnualGrowth from "../../Agriculture/AnnualGrowth";
import FertilizerProd from "../../Agriculture/FertilizerProd";
import FertilizerCons from "../../Agriculture/FertilizerCons";
import ImportReserves from "../../Debt/ImportReserves";
import GoldReserves from "../../Debt/GoldReserves";
import TotalReserves from "../../Debt/TotalReserves";
import DebtServices from "../../Debt/DebtServices";
import TotalDebt from "../../Debt/TotalDebt";
import CurrentGni from "../../Debt/CurrentGni";

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
  }
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
                <ListItem button key="GDP" onClick={this.handleGdp}>
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
                <ListItem button key="manufacturing" onClick={()=>this.changeGraphType('manufacturing')}>
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Manufacturing(%GDP)" />
                </ListItem>
                <ListItem button key="annualgrowth" onClick={()=>this.changeGraphType('annualgrowth')}>
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
                  key="Fertilizers Production"
                  onClick={()=>this.changeGraphType('fertilizer_prod')}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Fertilizers Production" />
                </ListItem>
                <ListItem
                  button
                  key="FDI Consumption"
                  onClick={()=>this.changeGraphType('fertilizer_cons')}
                >
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Fertilizers Consumption" />
                </ListItem>
                {" "}
                {" "}
                <ListItemText primary="Debt Services" />
                <ListItem button key="importReserves" onClick={()=>this.changeGraphType('importReserves')}>
                  <ListItemIcon>
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Total reserves in months of imports" />
                </ListItem>

                <ListItem button onClick={()=>this.changeGraphType('goldReserves')} key="goldReserves">
                  <ListItemIcon>
                    {" "}
                    <Arrow />
                  </ListItemIcon>
                  <ListItemText primary="Total reserves (includes gold, current US$)" />
                </ListItem>

                <ListItem button key="totalReserves" onClick={()=>this.changeGraphType('totalReserves')}>
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Total reserves (% of total external debt)" />
                </ListItem>

                <ListItem button key="debtServices" onClick={()=>this.changeGraphType('debtServices')}>
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Debt service" />
                </ListItem>

                <ListItem button key="totalDebt" onClick={()=>this.changeGraphType('totalDebt')}>
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="Total debt service (% of GNI)" />
                </ListItem>

                <ListItem button key="currentGni" onClick={()=>this.changeGraphType('currentGni')}>
                  <ListItemIcon>
                    {" "}
                    <ListItemIcon>
                      {" "}
                      <Arrow />
                    </ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary="GNI (current US$)" />
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
          {this.state.page === "fertilizer_prod" ? <FertilizerProd /> : null}
          {this.state.page === "fertilizer_cons" ? <FertilizerCons /> : null}
          {/* Debt Services */}
          {this.state.page === "importReserves" ? <ImportReserves /> : null}
          {this.state.page === "goldReserves" ? <GoldReserves /> : null}
          {this.state.page === "totalReserves" ? <TotalReserves /> : null}
          {this.state.page === "debtServices" ? <DebtServices /> : null}
          {this.state.page === "totalDebt" ? <TotalDebt /> : null}
          {this.state.page === "currentGni" ? <CurrentGni /> : null}
        </Box>
      </div>
    );
  }
}

export default DashBoard;
