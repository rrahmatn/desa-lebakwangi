import { React } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../page/dashboard/dashboard";
import Profile from "../page/profile/profile";


const Rout = () => {


  return (
    <>
      <BrowserRouter>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
          </Switch>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Rout;
