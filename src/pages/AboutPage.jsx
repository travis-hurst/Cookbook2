import React from 'react';
import Navigate from '../components/Navigate';
import './AboutPage.css'


function AboutPage() {
    
    return ( 
        <div>
            <Navigate></Navigate> 
            <div class="flex-div3">
                <div class="about-header-name">About Cooking Made Easy</div>
            </div>
            <br></br>
            <div class="flex-div3">
                <a class="regular-script2">This application was inspired by many frustrating experiences people have had when using online recipe guides. 
                The main goal of CME is to allow the user to see and track everything related to their recipe in one easy to use screen. If you have any suggestions for improvement
                please let me know. I hope you enjoy cooking with us!<br></br> -Travis Hurst</a>       
            </div>
            <br></br>
        </div>
    );
  }

export default AboutPage