import React, { useState, useEffect } from 'react';
import './RecipeSearch.css'
import Navbar from 'react-bootstrap/Navbar';
import Navigate from '../components/Navigate'
import ScrollToAnchor from '../components/ScrollToAnchor'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import breakfastTime from '../assets/breakfast-plate.svg'
import lunchTime from '../assets/sandwich.svg'
import dinnerTime from '../assets/taco-dinner.svg'
import favoriteTime from '../assets/star-favorite.svg'
import topPickTime from '../assets/tray-dinner.svg'
import cookBook from '../assets/cookbook.svg'
import biscuitsGravy from '../assets/img/Biscuits-and-Gravy.jpg'
import blueberryMuffin from '../assets/img/Blueberry-Muffins.jpg'
import breakfastPizza from '../assets/img/Breakfast-Pizza.jpg'
import overnightOats from '../assets/img/Overnight-Oats.jpg'
import avocadoToast from '../assets/img/Avocado-Toast.jpg'
import hamCheeseCrepes from '../assets/img/Ham-Cheese-Crepes.jpg'
import italianBeefSandwich from '../assets/img/Italian-Beef-Sandwiches.jpg'
import simpleRamenChicken from '../assets/img/Simple-Chicken-Ramen.jpg'
import lentilCurry from '../assets/img/Lentil-Curry.jpg'
import postRoast from '../assets/img/Pot-Roast.jpg'
import chickenPeanutWraps from '../assets/img/Spicy-Chicken-Peanut-Wraps.jpg'
import teriyakiChicken from '../assets/img/Teriyaki-Chicken.jpg'

function RecipeSearch() {

    return (       
        <div>
            <ScrollToAnchor></ScrollToAnchor>
            <Navigate></Navigate> 
            <div class="search-page-header">Recipe Search</div>
            <strong>When you find your meal, click on a recipe to view.</strong>
            <br></br><br></br><br></br>
            <Navbar sticky="top" class="topnav2">
                <a style={{borderRight: '2px solid transparent', borderRightColor: '#423f3f'}}><HashLink to="/search#morning" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Breakfast</HashLink></a>
                <a style={{borderRight: '2px solid transparent', borderRightColor: '#423f3f'}}><HashLink to="/search#lunch" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Lunch</HashLink></a>
                <a style={{borderRight: '2px solid transparent', borderRightColor: '#423f3f'}}><HashLink to="/search#dinner" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Dinner</HashLink></a>
                <a style={{borderRight: '2px solid transparent', borderRightColor: '#423f3f'}}><HashLink to="/search#favorites" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Favorites</HashLink></a>
                <a style={{borderRight: '2px solid transparent', borderRightColor: '#423f3f'}}><HashLink to="/search#topPicks" scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}>Top Picks</HashLink></a>
            </Navbar>  
            <div id="morning">
                <table class="table table-hover table-striped table-bordered caption-top">
                <caption class="table-label"><img src={breakfastTime} alt="Logo" width="75" height="50" class="d-inline-block align-text-top"></img>Breakfast</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Time</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Fat Content</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Protein</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col" style={{width:'12%', maxwidth:'12%'}}>Image</th>
                    <th scope="col" style={{width:'4%', maxwidth:'4%'}} class="img-center">Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Biscuits and Gravy</td>
                    <td>45 min</td>
                    <td>26 grams</td>
                    <td>Meat</td>
                    <td>6 Biscuits, 1 pd. Sausage, 1/2 c. Flour, 3-4 c. Milk, Cayenne Powder, Red Pepper Flakes, Salt, Pepper</td>
                    <td><img src={biscuitsGravy} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Best Blueberry Muffins</td>
                    <td>35 min</td>
                    <td>11 grams</td>
                    <td>Dairy, Eggs</td>
                    <td>1/2 c. Butter, 3/4 c. Sugar, 2/3 c. Buttermilk, 2 Eggs, 1 tsp. Vanilla, 1 1/2 c. Flour, 2 tsp. Baking Powder, 1/2 tsp. Baking Soda, 1/2 tsp. Salt, 1 c. Blueberries</td>
                    <td><img src={blueberryMuffin} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Breakfast Pizza</td>
                    <td>55 min</td>
                    <td>20 grams</td>
                    <td>Meat, Eggs</td>
                    <td>Salsa: 14 oz. can Whole Tomatoes, 10 oz. can Tomatoes and Green Chiles, 1/4 c. Cilantro, 2 tbps. Onion, 1 clove Garlic, 1/2 Jalapeno Pepper, 1/4 tsp. Sugar,
                    1/4 tsp. Ground Cumin, Salt, 1/2 Lime --- Pizza: 1 pd. Bacon, 2 tbps. Vegetable Oil, 2 c. Hash Browns, 1 Red Bell Pepper, 1 Green Bell Pepper, 1 pd. Pizza Dough, 12 oz. Mozzarella, 8 Eggs, Salt, Pepper</td>
                    <td><img src={breakfastPizza} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Overnight Oats</td>
                    <td>5 hr 5 min</td>
                    <td>8 grams</td>
                    <td>Dairy</td>
                    <td>1/2 c. Dairy or Almond Milk, 1/2 c. Rolled Oats, 1/2 c. Yogurt, 1 tsp. Chia Seeds, 1/2 Banana, Fruit and Nuts of choice</td>
                    <td><img src={overnightOats} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="lunch">
                <table class="table table-hover table-striped table-bordered caption-top">
                <caption class="table-label"><img src={lunchTime} alt="Logo" width="75" height="50" class="d-inline-block align-text-top"></img>Lunch</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Time</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Fat Content</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Protein</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col" style={{width:'12%', maxwidth:'12%'}}>Image</th>
                    <th scope="col" style={{width:'4%', maxwidth:'4%'}} class="img-center">Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Avocado Toast</td>
                    <td>10 min</td>
                    <td>16 grams</td>
                    <td>Vegetarian</td>
                    <td>1 slice Whole Grain Bread, 1/2 Avocado, Salt, Pepper, Red Pepper Flakes</td>
                    <td><img src={avocadoToast} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Ham and Cheese Crepes</td>
                    <td>40 min</td>
                    <td>23 grams</td>
                    <td>Meat, Eggs</td>
                    <td>Crepe Batter: 1 c. Milk, 2 Eggs, 2 tbsp. Butter, 1/4 tsp. Salt, 3/4 c. Flour --- Crepe Filling: 16 slices Ham, 8 oz. Mozzarella or Chedder Cheese</td>
                    <td><img src={hamCheeseCrepes} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Italian Beef Sandwich</td>
                    <td>6 hr 15 min</td>
                    <td>12 grams</td>
                    <td>Meat</td>
                    <td>2 pd. Beef Roast, 10.5 oz. Beef Consomme, 8 oz. Pepperoncini Peppers with juice, 1 packet Italian Dressing Mix, 1 tsp. Minced Garlic, Salt, 6 French Rolls, 6 slices Pepper Jack Cheese</td>
                    <td><img src={italianBeefSandwich} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Simple Chicken Ramen</td>
                    <td>1 hr</td>
                    <td>14 grams</td>
                    <td>Meat, Egg</td>
                    <td>2 Chicken Breasts, 2 Eggs, 6 oz. Ramen Noodles, 1 tbsp. Butter, 2 tsp. Vegetable Oil, 2 tsp. Ginger, 1 tbsp. Garlic, 3 tbsp. Soy Sauce, 2 tbsp. Mirin, 4 c. Chicken Stock, 1 oz. Shitake Mushrooms, 2 tsp. Salt, 1/2 c. Scallions, 1 tsp. Pepper</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="dinner">
                <table class="table table-hover table-striped table-bordered caption-top">
                <caption class="table-label"><img src={dinnerTime} alt="Logo" width="75" height="50" class="d-inline-block align-text-top"></img>Dinner</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Time</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Fat Content</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Protein</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col" style={{width:'12%', maxwidth:'12%'}}>Image</th>
                    <th scope="col" style={{width:'4%', maxwidth:'4%'}} class="img-center">Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Lentil Curry</td>
                    <td>1 hr</td>
                    <td>20 grams</td>
                    <td>Vegetarian</td>
                    <td>1 tbsp. Coconut Oil, 4 cloves Garlic, 2 tbsp. Ginger, 1/2 Yellow Onion, 1 tsp. Cumin, 2 tsp. Curry Powder, 1 tsp. Garam Masala, 1 tsp. Turmeric, 2 c. Vegetable Broth, 28 oz. can Tomatos crushed, 1 c. Brown Lentils, 15 oz. can Coconut Milk, 12 oz. Basmati Rice, Cilantro, Salt, Pepper, Naan bread, Yogurt plain</td>
                    <td><img src={lentilCurry} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Pot Roast "Instant-Pot"</td>
                    <td>1 hr 20 min</td>
                    <td>26 grams</td>
                    <td>Meat</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={postRoast} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Spicy Chicken Peanut Wraps</td>
                    <td>20 min</td>
                    <td>24 grams</td>
                    <td>Meat, Dairy</td>
                    <td>4 Chicken Breats, 1 Red Bell Pepper, 8 oz. Cream Cheese, 1 c. Spicy Peanut Sauce, 1 Cucumber, 1/2 c. Peanuts, 1 pkg. Coleslaw no dressing, 8 Tortillas medium</td>
                    <td><img src={chickenPeanutWraps} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Teriyaki Chicken</td>
                    <td>20 min</td>
                    <td>23 grams</td>
                    <td>Meat</td>
                    <td>1 1/2 pd. Chicken Thighs boneless, 1 c. Soy Sauce, 1 c. Brown Sugar, 1 c. Pinapple Juice, 4 cloves Garlic, 1 tbsp. Ginger</td>
                    <td><img src={teriyakiChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><Link to="/guide"><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></Link></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="favorites">
                <table class="table table-hover table-striped table-bordered caption-top">
                <caption class="table-label"><img src={favoriteTime} alt="Logo" width="75" height="50" class="d-inline-block align-text-top"></img>Favorites</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Time</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Fat Content</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Protein</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col" style={{width:'12%', maxwidth:'12%'}}>Image</th>
                    <th scope="col" style={{width:'4%', maxwidth:'4%'}} class="img-center">Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Homemade Chili</td>
                    <td>3 hr</td>
                    <td>26 grams</td>
                    <td>Meat</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Impossible Eggs</td>
                    <td>10 min</td>
                    <td>14 grams</td>
                    <td>Eggs</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Marshmallow Mash</td>
                    <td>30 min</td>
                    <td>14 grams</td>
                    <td>Vegetarian</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Sunrise Burritos</td>
                    <td>45 minutes</td>
                    <td>22 grams</td>
                    <td>Meat</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                </tbody>
                </table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div id="topPicks">
                <table class="table table-hover table-striped table-bordered caption-top">
                <caption class="table-label"><img src={topPickTime} alt="Logo" width="75" height="50" class="d-inline-block align-text-top"></img>Top Picks</caption>
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Time</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Fat Content</th>
                    <th scope="col" style={{width:'8%', maxwidth:'8%'}}>Protein</th>
                    <th scope="col">Ingredients</th>
                    <th scope="col" style={{width:'12%', maxwidth:'12%'}}>Image</th>
                    <th scope="col" style={{width:'4%', maxwidth:'4%'}} class="img-center">Recipe</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Chunky Avocado Dip</td>
                    <td>20 min</td>
                    <td>18 grams</td>
                    <td>Vegetarian</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Lightning Fast Tacos</td>
                    <td>30 min</td>
                    <td>22 grams</td>
                    <td>Meat</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Marbled Steak</td>
                    <td>44 min</td>
                    <td>28 grams</td>
                    <td>Meat</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Turkey Roast</td>
                    <td>2 hr 20 min</td>
                    <td>18 grams</td>
                    <td>Meat</td>
                    <td>3 pd. Beef Chuck Roast, Salt, 4 tbsp. Olive Oil, 2 c. Beef Broth, 1 packet Dry Onion Soup Mix, 1 Yellow Onion, 1 pd. Baby Potatos, 1 c. Baby Carrots</td>
                    <td><img src={simpleRamenChicken} class="figure-img img-fluid rounded" alt="..." width="300" height="210"></img></td>
                    <td><img src={cookBook} alt="Logo" width="75" height="50" class="img-center"></img></td>
                    </tr>
                </tbody>
                </table>
            </div>           
            <br></br>
            <br></br>
        </div>     
    )
}

export default RecipeSearch
