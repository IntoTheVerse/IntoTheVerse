import React, { useState, useEffect } from 'react';

import "./PartnersandInvestors.scss";
import flori from "../../../assets/images/floriventures.png"
import node from "../../../assets/images/nodeventures.png"

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
                    <img src={ flori } className="PartnersandInvestorsGallery__widgetContainer__Box__InvestorLogo" alt="Flori Ventures" />
                </section>
                <section className="PartnersandInvestorsGallery__widgetContainer__Box">
                    <img src={ node } className="PartnersandInvestorsGallery__widgetContainer__Box__InvestorLogo" alt="Node Ventures" />
                </section>
            </section>
        </section >
    )
}

export default PartnersandInvestors