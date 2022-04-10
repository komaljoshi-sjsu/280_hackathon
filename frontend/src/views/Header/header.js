import { useState } from "react";
import { ReactComponent as Logo } from "../../logo.svg";
import Badge from "@mui/material/Badge";
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { userActionCreator } from '../../reduxutils/actions.js'

function Header(props) {
  const dispatch = useDispatch();
  const setCountry = bindActionCreators(userActionCreator.setCountry,dispatch);
  //const[country,setCountry] = useState("");
  // const setCountry = (e) => {
  //   this.props.changeCountry(e.target.value);
  // };
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
              onChange={(e)=>setCountry(e.target.value)}
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

export default Header
