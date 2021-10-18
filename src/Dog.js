import { useParams } from "react-router-dom";


function Dog ({ dogData }) {
    const { name } = useParams();

    const dog = dogData.filter(dog => dog.name === name);

    return (
        <div>
            <div>Name: {dog.name}</div>
            <img src={dog.img} alt="dog"></img>
            <div>Age: {dog.age}</div>
            <ul>Facts: 
                {dog.facts.map(fact =>
                    <li>{fact}</li>
                )}
            </ul>
        </div>
    )
}

export default Dog;