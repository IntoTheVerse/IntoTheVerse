import React, { useState, useEffect } from 'react';

import "./HomeScreen.scss";



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
        <section className="homeScreen" id="header">
            {/* <main className="homeScreen__bannerTitleContainer">
                <section className="homeScreen__bannerTitleContainer__bannerTitle">
                    <h1>A PiXEL EXPERiENCE</h1>
                    <h1>PLAY, COLLECT and EARN</h1>
                    {isVisible && <img src={PlayButton} id="playbtn" className="play play_btn_center" alt="play_button" />}
                </section>
                <img src={CloudLeftOne} className="cloud cloud_left_one" alt="cloud_left_one" />
                <img src={CloudLeftTwo} className="cloud cloud_left_two" alt="cloud_left_two" />
                <img src={CloudRightOne} className="cloud cloud_right_one" alt="cloud_right_one" />
                <img src={CloudRightTwo} className="cloud cloud_right_two" alt="cloud_right_two" />
                <img src={CloudRightThree} className="cloud cloud_right_three" alt="cloud_right_three" />  
            </main> */}
        </section >
    )
}

export default HomeScreen