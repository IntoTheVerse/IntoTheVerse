import React, { useState, useEffect } from 'react';

import "./HomeScreen.scss";
import verseMap from "../../../assets/images/dungeonmap.png"


const LandingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, [])

      const listenToScroll = () => {
        let heightToHideFrom = 500;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
           
        if (winScroll > heightToHideFrom) { 
           isVisible &&      // to limit setting state only the first time         
             setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
    };
    return (
        <section className="landingScreen">
            <section className="landingScreen__bannerContainer">
                <section className="landingScreen__bannerContainer__Description">
                    <h1>Dungeon Hunt!</h1>
                    <p>Dungeon Hunt is a novel <span className="highlightText">Play-To-Earn Role-Playing</span> dungeon crawler game, built on Celo Blockchain.
                    It takes decades of best practices around building a <span className="highlightText">compelling RNG-based RPG,</span> while adding in new economic elements in the from of P2E model.</p>
                </section>
                <section className="landingScreen__bannerContainer__verseMap">
                    <img src={ verseMap } className="verseImg" alt="IntoTheVerse Map" />
                </section>
            </section>
        </section >
    )
}

export default LandingScreen