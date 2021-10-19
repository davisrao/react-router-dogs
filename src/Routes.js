import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import GetSingleDog from "./GetSingleDog"

/** Routes for Components 
 * //COMMENT: ADD props
*/
function Routes({ dogsData }) {

    return (
        <Switch>
            <Route exact path="/dogs" >
                <Dogs dogsData={dogsData}/>
            </Route>
            <Route exact path="/dogs/:name" >
                <GetSingleDog dogsData={dogsData}/>
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;