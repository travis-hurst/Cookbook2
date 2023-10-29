import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navigate.css'
import cookingLogo from '../assets/ovenmitt.svg'
import { Link } from 'react-router-dom';

/* Navigate function will be our main function for navigation and to maintain the header / URL */
function Navigate() {
    
    /* TODO: Save the searched string to filter recipes after navigation
    const [recipeName, searchRecipe] = useState("");
    const navigate = useNavigate();
    const handleSearch = (event) => {
        event.preventDefault();
        if (recipeName) {
            navigate("/search", { state: recipeName, replace: true });
          }
    }
    */

    return (
        <div>
            {/* First div acts as page header */}
            <div class="jumbotron text-center">
                <h1>Cooking Made Easy<img src={cookingLogo} alt="Logo" width="120" height="87" class="d-inline-block align-text-top"></img></h1>
                <strong>Find your perfect meal!</strong>
            </div>
            {/* Second div is navigation bar and search form */}
            <div class="topnav">
                <a class="navbar-brand">
                    CME
                </a>
                <a><Link to="/home">Home</Link></a>
                <a><Link to="/about">About</Link></a>
                {/* TODO: Save the searched string to filter recipes after navigation
                <div class="search-container">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Search Recipes By Name.." value={recipeName} onChange={(e) => searchRecipe(e.target.value)}></input>
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
                </div> */}
            </div>      
        </div>

    )
}

export default Navigate