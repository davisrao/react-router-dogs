import './App.css';
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import NavBar from "./NavBar";
import Routes from "./Routes";

/** App to show Dogs
 * 
 *  State:
 *  - dogData (information about all dogs)
 *  - isLoading (true/false)
 * 
 *  App -> Routes
 */
function App() {
  const [dogData, setDogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDogData() {
    const resp = await axios.get("http://localhost:5000/dogs");
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
        <NavBar dogData={dogData} />
        <Routes dogData={dogData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
