import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AddEstate from "./pages/addEstate/addEstate";
import HomeWorks from "./pages/HomeWorks/HomeWorks";
import Profile from "./pages/profile/profile";
import ProtfolloValue from "./pages/protfolloValue/protfolloValue";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount = async () => {
    // const usertoken = await window.sessionStorage.getItem("usertoken");
    // if (!usertoken) {
    //   this.setState({ redirectToLogin: true });
    // }
  };

  render() {
    const { redirectToLogin } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/ProtfolioValue"} component={ProtfolloValue} />
          <Route path={"/Profile"} component={Profile} />
          <Route path={"/HomeWorks"} component={HomeWorks} />
          <Route path={"/Create"} component={AddEstate} />
          <Route path={"/"} component={Home} />
          {/* <Route path={"/Login"} component={Login} />
          <Route path={"/"} component={Register} /> */}
        </Switch>
        {/* {redirectToLogin && <Redirect to={"/"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
