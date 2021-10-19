import Dog from "./Dog";

/** Shows information about all Dogs 
 * 
 *  Props: 
 *  - dogData (data about all Dogs)
 * 
 *  State: 
 *  - None
 * 
 *  Routes -> Dogs
 */
function Dogs({ dogsData }) {

    return (
        <div>
            {/* {console.log({ dogsData })} */}
            {dogsData.map(dog => <Dog dogData={dog} key={dog.name}/>)}
        </div>
    )
}

export default Dogs;

// get request, we needed http://
// We needed isLoading
// Cannot have a default state be an async function
// Moving most of this to App