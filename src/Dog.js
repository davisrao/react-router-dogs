
function Dog ({ name, img, age, facts }) {
    return (
        <div>
            <div>Name: {name}</div>
            <img src={img} alt="dog"></img>
            <div>Age: {age}</div>
            <ul>Facts: 
                {facts.map(fact =>
                    <li>{fact}</li>
                )}
            </ul>
        </div>
    )
}

export default Dog;