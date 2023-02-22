import { Redirect, Route, Switch } from "react-router-dom";

import Flights from "./pages/Flights";
import { Failure } from "./pages/Failure";
import { Success } from "./pages/Success";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="/success">
        <Success />
      </Route>
      <Route path="/failure">
        <Failure />
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;
