import { useParams } from "react-router-dom";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";
import whiskey from "./images/whiskey.jpg";

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
            <div>Name: {dog[0].name}</div>
            <img src={dogImage} alt={`a cute dog named ${dog[0].name}`}></img>
            <div>Age: {dog[0].age}</div>
            <ul>Facts: 
                {dog[0].facts.map(fact =>
                    <li>{fact}</li>
                )}
            </ul>
        </div>
    )
}

export default Dog;