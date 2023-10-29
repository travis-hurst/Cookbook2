import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RecipeGuide.css';
import Navigate from '../components/Navigate';
import CountdownTimer from '../components/CountdownTimer';
import finalMeal from '../assets/img/Teriyaki-Chicken.jpg';
import jsonData from "../assets/json/recipe.json";

function RecipeGuide() {

    // parse JSON data
    const steps = jsonData["steps"];

    // set active button
    const [active, setActive] = useState(null);

    // set active recipe step
    const[selectedItem, setSelectedItem] = useState(null);
    const[stepTemp, setStepTemp] = useState(null);
    const[stepTimer, setStepTimer] = useState(null);
    const[stepDesc, setStepDesc] = useState(null);
    const[stepImg, setStepImg] = useState(null);

    const handleButtonClick = (item) => {
        setSelectedItem(item);
        setActive(item.id);
        setStepTemp(item.stepHeat);
        setStepTimer(item.stepTimer);
        setStepDesc(item.stepDesc);
        setStepImg(item.image);
        setIsChanged(true);
    }

    // Check if step changed
    const [isChanged, setIsChanged] = useState(null);

    // Use effect starts as soon as page starts
    // This will be used to set to Step 1 on load
    useEffect(() => {
        let currentStep;

        if(isChanged){
            // If changed update
            currentStep = handleButtonClick((item)  =>  {
                setSelectedItem(item);
                setActive(item.id);
                setStepTemp(item.stepHeat);
                setStepTimer(item.stepTimer);
                setStepDesc(item.stepDesc);
                setStepImg(item.image);

            }, 10);
        }

        if(selectedItem === null && stepTemp === null && stepTimer === null && stepDesc === null ) {
            setSelectedItem(steps[0]);
            setActive(steps[0].id);
            setStepTemp(steps[0].stepHeat);
            setStepTimer(steps[0].stepTimer);
            setStepDesc(steps[0].stepDesc);
            setStepImg(steps[0].image);
        }
    
        return () => setIsChanged(false);

    // Return everything established by checking for button change
    }, [selectedItem, stepTemp, stepTimer, stepDesc, isChanged]);

    return ( 
          <>
            <div>
                <Navigate></Navigate>
                <div class="flex-div">
                    <div class="recipe-header-name">Hawaiian Grilled Teriyaki Chicken
                    <figure class="figure-header">
                            <img src={finalMeal} class="figure-img img-fluid rounded" alt="..." width="225" height="150"></img>
                    </figure>   
                    <a class="regular-script">Tip: "Some people can not quite seem to get grilled Hawaiian Teriyaki Chicken right. The trick to having good, authentic, chicken teriyaki is using the right cut of chicken. 
                    You always want to use chicken thighs. I promise, if you want AUTHENTIC teriyaki chicken, chicken breasts just will not cut it."</a>            
                        <br></br>                   
                    </div>
                </div> 
                <div class="flex-div">
                    <div class="recipe-step">
                        {selectedItem && <div class="recipe-step-header2">Current Step: { active } / { steps.length } </div> }
                        {!selectedItem && <div class="recipe-step-header2">Select a step to get started: </div> }
                        <div class="btn-toolbar" style={{marginBottom: '25px'}}role="toolbar" aria-label="Toolbar with button groups">
                            <div class="btn-group me-2" role="group" aria-label="First group">
                                {steps.map(function (item, value) {
                                        return <input
                                            type="button"
                                            value = { item.id }
                                            key = { item.id }
                                            id = { item.id }
                                            className={active === item.id  ? "btn big-btn btn-primary active" : "btn big-btn btn-primary"}
                                            onClick={() => handleButtonClick(item)}
                                            />;
                                    })}
                            </div>
                        </div>
                        <span class="dynamic-span">Step Heat: {stepTemp}</span><div class="dynamic-span">Step Timer: {stepTimer}</div>
                    </div>
                    <div class="recipe-step-timer">
                        <CountdownTimer />
                    </div>
                </div> 
                <div class="flex-div2">
                    <div class="recipe-instructions">Instructions
                        <div class="recipe-ingredients2">
                            <ul class="list-group">
                                <li class="list-group-item" style={{height: '32vh', paddingTop: '30px'}}>
                                <label class="form-check-label stretched-link" style={{float: 'left', maxWidth: '60%', whiteSpace: 'pre-line'}}>{stepDesc}<br></br><br></br><a style={{float: 'left'}}><Link to="https://www.google.com/">See Video</Link></a></label>
                                <img src={`${stepImg}`} class="figure-img img-fluid rounded" style={{float: 'right', marginRight: '25px'}} alt="..." width="350" height="300"></img>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="recipe-ingredients">
                    <div class="recipe-ingredients-header">Ingredients</div>
                        <ul class="list-group">
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched"></input>
                            <label class="form-check-label stretched-link" for="firstCheckboxStretched">1 1/2 pounds Chicken Thighs Boneless, Skinless</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched"></input>
                            <label class="form-check-label stretched-link" for="secondCheckboxStretched">1 cup Soy Sauce</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched"></input>
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">1 cup Brown Sugar Packed</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="fourthCheckboxStretched"></input>
                            <label class="form-check-label stretched-link" for="fourthCheckboxStretched">1 cup Pinapple Juice</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="fifthCheckboxStretched"></input>
                            <label class="form-check-label stretched-link" for="fifthCheckboxStretched">4 cloves Garlic Chopped</label>
                        </li>
                        <li class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox" value="" id="sixthCheckboxStretched"></input>
                            <label class="form-check-label stretched-link" for="sixthCheckboxStretched">1 tablespoon Ginger Fresh, Minced</label>
                        </li>
                        </ul>          
                    </div>
                </div> 
            </div>
          </> 
    )
}

export default RecipeGuide