import { useParams, Redirect } from "react-router-dom";
import Dog from "./Dog"

/** Shows information about a single Dog
 * 
 *  Props: 
 *  - dogData (all Dogs)
 *  - dogName (optional: current dog to show)
 * 
 *  State:
 *  - None
 * 
 *  { Dogs, Routes } -> Dog
 */
function GetSingleDog ({ dogsData}) {
    const { name } = useParams();

    const dog = dogsData.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if(dog === undefined){
        return(
        <Redirect to="/dogs" />
        )
    }
   
    // const dogImage =`/images/${dog.name}.jpg`;

    return (
        <div>
            <Dog dogData={dog}/>
        </div>
    )
}

export default GetSingleDog;