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
function Dogs({ dogData }) {

    return (
        <div>
            {/* {console.log({ dogData })} */}
            {dogData.map(dog => <Dog dogData={dogData} dogName={dog.name} key={dog.name}/>)}
        </div>
    )
}

export default Dogs;

// get request, we needed http://
// We needed isLoading
// Cannot have a default state be an async function
// Moving most of this to App