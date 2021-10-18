import { useParams } from "react-router-dom";

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
function Dog ({ dogsData, dogName}) {
    const { name } = useParams();

    const soughtName = (dogName || name);

    console.log("inside dog component", {dogsData,dogName,name})

    const dog = dogsData.find(dog => dog.name.toLowerCase() === soughtName.toLowerCase());
    
    const dogImage =`/images/${dog.name}.jpg`;

    return (
        <div>
            <h1>Name: {dog.name}</h1>
            <h2>Age: {dog.age}</h2>
            <img src={dogImage} alt={`a cute dog named ${dog.name}`}></img>
            <ul><h2>Facts:</h2> 
                {dog.facts.map((fact,i) =>
                    <li key={i}>{fact}</li>
                )}
            </ul>
        </div>
    )
}

export default Dog;