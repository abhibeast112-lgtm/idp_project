import React from 'react';
import Navbar from './Navbar';

export default function LandingPage() {
        const demoAds = [
    { id: 1, title: "Minimalist Beverage Promo", author: "Designer_99", eye: "3/3", clarity: "3/3" },
    { id: 2, title: "SaaS Onboarding Banner", author: "GrowthHacker", eye: "2/3", clarity: "3/3" },
    { id: 3, title: "Fitness App Seasonal Promo", author: "FitCreative", eye: "3/3", clarity: "2/3" }
  ];
  return (
        <div
            className="landing-container">
            <Navbar />  {/*Inserting the navbar on the top */}
            <div 
                className = "hero"> {/*Hero is a convention for the attention segment*//}
                <h1>    

                </h1>
                <p>

                </p>
                <div 
                    className = "hero-button" >
                        <button className = "b1" >DANCE</button>
                </div>
            </div>
        </div>
    );
}