import React, { useState, useEffect } from 'react';

import "./Roadmap.scss";
import roadmap from "../../../assets/images/roadmap.png"


const RoadmapScreen = () => {
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
        <section className="RoadmapScreen">
            <section className="RoadmapScreen__titleContainer">
                <p>
                    <span className="RoadmapScreen__titleContainer__highlightText">"</span>
                    Roadmap
                    <span className="RoadmapScreen__titleContainer__highlightText">"</span>
                </p>
            </section>
            <section className="RoadmapScreen__bannerContainer">
                <img src={ roadmap } className="RoadmapScreen__bannerContainer__roadmap" alt="" />
            </section>
        </section >
    )
}

export default RoadmapScreen