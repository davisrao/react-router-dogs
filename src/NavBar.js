import { NavLink, Switch } from "react-router-dom"
import "./NavBar.css";

/** Navigation bar to show in every page */
function NavBar({ dogData }) {
    return (
        <nav>
            {console.log("I'm in the NavBar")}
            <NavLink exact to="/dogs">Home</NavLink>
            {dogData.map(dog => (
                <NavLink exact to={`/dogs/${dog.src}`} key={dog.name}>
                    {dog.name}
                </NavLink>
            ))}
            {/* <NavLink exact to="/"></NavLink>
            <NavLink exact to="/dogs/whiskey">Whiskey</NavLink>
            <NavLink exact to="/dogs/perry">Perry</NavLink>
            <NavLink exact to="/dogs/duke">Duke</NavLink> */}
        </nav>
    );
};

export default NavBar;
