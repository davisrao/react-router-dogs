import {NavLink} from "react-router-dom"

function NavBar(){
    return (
        <nav>
            <NavLink exact to="/"></NavLink>
            <NavLink exact to="/dogs/whiskey">Whiskey</NavLink>
            <NavLink exact to="/dogs/perry">Perry</NavLink>
            <NavLink exact to="/dogs/duke">Duke</NavLink>
        </nav>
    );
};

export default NavBar;