import React, { useState, useEffect } from 'react';

import "./PartnersandInvestors.scss";
import verseMap from "../../assets/images/verseMap.png"

const PartnersandInvestors = () => {
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
        <section className="PartnersandInvestorsGallery">
            <section className="PartnersandInvestorsGallery__titleContainer">
                <p>
                    <span className="PartnersandInvestorsGallery__titleContainer__highlightText">"</span>
                    Meet Our Backers
                    <span className="PartnersandInvestorsGallery__titleContainer__highlightText">"</span>
                </p>
            </section>
            <section className="PartnersandInvestorsGallery__widgetContainer">
                <section className="PartnersandInvestorsGallery__widgetContainer__Box">
                </section>
            </section>
        </section >
    )
}

export default PartnersandInvestors