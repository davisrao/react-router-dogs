import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";

/** Routes for Components */
function Routes({ dogData }) {
    return (
        <Switch>
            <Route exact path="/dogs" >
                <Dogs dogData={dogData}/>
            </Route>
            <Route exact path="/dogs/:name" >
                <Dog dogData={dogData}/>
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;