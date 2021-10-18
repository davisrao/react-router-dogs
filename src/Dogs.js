import axios from "axios"
import {useState} from "react"


async function getDogData(){
    const resp = await axios.get("localhost:5000/dogs");
    console.log("response", resp);
    console.log("we are returning:", JSON.parse(resp))
    return JSON.parse(resp);
}

function Dogs(){
    // make a get request to localhost 5000 for dog data
    // display that data on the page
    const [dogData,setDogData] = useState( await getDogData())

    return(
        <div>
            {dogData.map(dog => <Dog name={dog.name} img={dog.src} age={dog.age} facts={dog.facts}/>)}
        </div>
    )
}