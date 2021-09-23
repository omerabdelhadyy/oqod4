import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import AddEstate from "./pages/addEstate/addEstate";
import HomeWorks from "./pages/HomeWorks/HomeWorks";
import Profile from "./pages/profile/profile";
import ProtfolloValue from "./pages/protfolloValue/protfolloValue";
import { getItem } from "./services/storage";

class Routes extends Component {
  constructor() {
    super();
    this.state = {
      // redirectToLogin: false,
    };
  }

  componentWillUnmount = async () => {
    // const usertoken = await getItem('userData').token;
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
          <Route path={"/Login"} component={Login} />
          <Route path={"/register"} component={Register} />
          <Route path={"/"} component={Home} />
        </Switch>
        {/* {redirectToLogin && <Redirect to={"/"} />} */}
      </BrowserRouter>
    );
  }
}

export default Routes;
