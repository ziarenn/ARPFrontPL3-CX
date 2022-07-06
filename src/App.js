import React from "react";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor() {
    super();
    this.state = { keyword: "", currencyTable: null };
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form setState={this.setState} />
      </div>
    );
  }
}

export default App;
