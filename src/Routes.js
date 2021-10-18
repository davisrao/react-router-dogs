import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";

function Routes() {
    return (
        <Switch>
            <Route exact path="/dogs" >
                <Dogs />
            </Route>
            <Route exact path="/dogs/:name" >
                <Dog />
                {/** Do we need to pass in props */}
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;