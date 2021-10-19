
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
function Dog ({ dogData }) {
    
    const dogImage =`/images/${dogData.name}.jpg`;

    return (
        <div>
            <h1>Name: {dogData.name}</h1>
            <h2>Age: {dogData.age}</h2>
            <img src={dogImage} alt={`a cute dog named ${dogData.name}`}></img>
            <ul><h2>Facts:</h2> 
                {dogData.facts.map((fact,i) =>
                    <li key={i}>{fact}</li>
                )}
            </ul>
        </div>
    )
}

export default Dog;