import React from "react";
import { TextField, Typography } from "@mui/material";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(e) {
    this.props.setState({ keyword: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <form>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: "1rem", fontFamily: "Roboto" }}
        >
          Currency name:
        </Typography>
        <TextField
          align="center"
          sx={{ display: "block", mx: "auto" }}
          onChange={this.inputChangeHandler}
        />
      </form>
    );
  }
}
