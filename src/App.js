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
  ///COMMENT: make sure dog data is plural name
  
  const [dogsData, setDogsData] = useState([]);
  const [needsLoading, setNeedsLoading] = useState(true);
  console.log("app", {dogsData, needsLoading});

  async function getDogsData() {
    const resp = await axios.get("http://localhost:5000/dogs");
    setDogsData(resp.data);
  }

  if (needsLoading) {
    setNeedsLoading(false);
    getDogsData();
  }

  if(dogsData.length === 0){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogsData={dogsData} />
        <Routes dogsData={dogsData} />
      </BrowserRouter>
    </div>
  );
}

export default App;
