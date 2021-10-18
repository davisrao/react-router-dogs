import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import NavBar from "./NavBar";
import Routes from "./Routes";

function App() {
  // make a get request to localhost 5000 for dog data
  // display that data on the page
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // onLoad

  async function getDogData() {
    const resp = await axios.get("http://localhost:5000/dogs");
    console.log("response", resp);
    console.log("we are returning:", resp.data)
    setDogData(resp.data);
    setIsLoading(false);
  }

  if (isLoading) {
    getDogData();
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogData={dogData}/>
        <Routes dogData={dogData}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
