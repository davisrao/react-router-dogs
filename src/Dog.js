import { useParams } from "react-router-dom";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import whiskey from "./images/whiskey.jpg";

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
function Dog ({ dogData, dogName}) {
    const { name } = useParams();
    const currentDog = (dogName|| name).toLowerCase();

    const dog = dogData.filter(dog => dog.name.toLowerCase() === currentDog);
    
    let dogImage;
    if(currentDog === 'whiskey'){
        dogImage = whiskey;
    }else if(currentDog === 'perry'){
        dogImage = perry;
    }else{
        dogImage = duke;
    }

    return (
        <div>
            <h1>Name: {dog[0].name}</h1>
            <h2>Age: {dog[0].age}</h2>
            <img src={dogImage} alt={`a cute dog named ${dog[0].name}`}></img>
            <ul><h2>Facts:</h2> 
                {dog[0].facts.map((fact,i) =>
                    <li key={i}>{fact}</li>
                )}
            </ul>
        </div>
    )
}

export default Dog;