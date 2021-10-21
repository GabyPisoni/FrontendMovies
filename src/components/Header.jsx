import React, { Fragment } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header({ title, date }) {
  return (
    <Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            {title} - {date}
          </Typography>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Fragment>
  );
}
export default Header;
