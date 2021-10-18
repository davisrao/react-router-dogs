import axios from "axios"
import { useState } from "react"
import Dog from "./Dog";


function Dogs({ dogData }) {
    // make a get request to localhost 5000 for dog data
    // display that data on the page
    // const [dogData,setDogData] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // // onLoad

    // async function getDogData(){
    //     const resp = await axios.get("http://localhost:5000/dogs");
    //     console.log("response", resp);
    //     console.log("we are returning:", resp.data)
    //     setDogData(resp.data);
    //     setIsLoading(false);
    // }



    // if (isLoading) {
    //     getDogData();
    //     return (
    //         <h1>Loading...</h1>
    //     )
    // }

    return (
        <div>
            {console.log({ dogData })}
            {dogData.map(dog => <Dog dogData={dogData} />)}
        </div>
    )
}

export default Dogs;

// get request, we needed http://
// We needed isLoading
// Cannot have a default state be an async function
// Moving most of this to App