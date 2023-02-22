import { Redirect, Route, Switch } from "react-router-dom";

import Flights from "./pages/Flights";
import { Confirmation } from "./pages/Confirmation";

const Routes = () => {
  return (
    <Switch>
      <Route path="/flights">
        <Flights />
      </Route>
      <Route path="/confirmation">
        <Confirmation />
      </Route>
      <Route path="*">
        <Redirect to="flights" />
      </Route>
    </Switch>
  );
};

export default Routes;
