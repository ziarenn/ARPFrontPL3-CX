// stwórz komponent klasowy Navbar który będzie zwracał Navbar wystylowany przy pomocy material UI
import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default class Navbar extends React.Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h1"
              align="center"
              sx={{ flexGrow: 1, fontSize: "2rem", fontFamily: "Roboto" }}
            >
              Currency exchange
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
