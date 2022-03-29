import React, { useState, useEffect } from 'react';

import "./HomeScreen.scss";
import verseMap from "../../../assets/images/verseMap.png"


const HomeScreen = () => {
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
        <section className="homeScreen">
            <section className="homeScreen__bannerContainer">
                <section className="homeScreen__bannerContainer__Description">
                    <h1>The Metaverse!</h1>
                    <p>Into The Verse is a <span className="highlightText">pixel replication</span> of the real world that we live in.
                    People live in a crypto-native city in a social metaverse. The city has <span className="highlightText">houses, banks, museums, shops, farms, recreational avenues, etc.</span></p>
                </section>
                <section className="homeScreen__bannerContainer__verseMap">
                    <img src={ verseMap } className="verseImg" alt="IntoTheVerse Map" />
                </section>
            </section>
        </section >
    )
}

export default HomeScreen