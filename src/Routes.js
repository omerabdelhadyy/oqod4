import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      redirectToLogin: false,
    };
  }

  componentDidMount = async () => {
    const usertoken = await window.sessionStorage.getItem("usertoken");
    if (!usertoken) {
      this.setState({ redirectToLogin: true });
    }
  };

  render() {
    const { redirectToLogin } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/Home"} component={Home} />
          <Route path={"/Login"} component={Login} />
          <Route path={"/"} component={Register} />
        </Switch>
        {/* {redirectToLogin && <Redirect to={"/"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
