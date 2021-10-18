import { Route, Switch, Redirect } from "react-router-dom";
import Dogs from "./Dogs";
import Dog from "./Dog";

/** Routes for Components 
 * //COMMENT: ADD props
*/
function Routes({ dogsData }) {
    // function getDogDataFromName(name){
    //    return dogsData.find(dog => dog.name.toLowerCase() === name.toLowerCase());
    // }
    // let dogName; 
    // let dogData;
    return (
        <Switch>
            <Route exact path="/dogs" >
                <Dogs dogsData={dogsData}/>
            </Route>
            <Route exact path="/dogs/:name" >
                <Dog dogsData={dogsData}/>
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    );
}

export default Routes;