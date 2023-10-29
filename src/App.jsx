import React from 'react'
import './App.css'
import Navigate from './components/Navigate.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from "react-router-dom";

function App() {

  /* Date time group under the search bar */
  function getDate() {
    var date = new Date();
    var dateString = date.toString();
    var today_time = dateString.substring(0, 21);
    return today_time;
  }

  const navigate = useNavigate();

  return (
    <div className="App">

      {/* Header and nav bar imported */}
      <Navigate></Navigate>   
      <div class="timeClock">{getDate()}</div>
      <br></br>

      {/* These are the large circles to do a less focused search of recipes */}
      <div class="container">
        <div class="row">
          <div class="col-sm-4" onClick={() => navigate("/search#topPicks")}>
            <div class="circle" style={{backgroundColor: '#bf6a63'}}>
              <h3>Top Picks</h3>
              <p>New and highly rated..</p>
            </div>
          </div>
          <div class="col-sm-4" onClick={() => navigate("/search")}>
            <div class="circle">
              <h3>Recipes</h3>
              <p>All saved recipes..</p>
            </div>
          </div>
          <div class="col-sm-4" onClick={() => navigate("/search#favorites")}>
            <div class="circle" style={{backgroundColor: '#78bfbe'}}>
              <h3>Favorites</h3>
              <p>See your favorites..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
