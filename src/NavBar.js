import { NavLink } from "react-router-dom"
import "./NavBar.css";

/** Navigation bar to show in every page 
 * 
 * Props:
 *  - Dog data [{dog}, {dog},...]
*/
function NavBar({ dogsData }) {
    console.log("NavBar", dogsData);
    return (
        <nav>
            <NavLink exact to="/dogs">Home</NavLink>
            {dogsData.map(dog => (
                <NavLink exact to={`/dogs/${dog.src}`} key={dog.name}>
                    {dog.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default NavBar;
