import React, { useState, useEffect } from 'react';

import "./GameInfo.scss";
import Dungeon1 from "../../../assets/images/dungeon1.gif"
import Dungeon2 from "../../../assets/images/dungeon2.gif"
import Dungeon3 from "../../../assets/images/dungeon3.gif"
import Dungeon4 from "../../../assets/images/dungeon4.gif"
import Stick from "../../../assets/images/stick.png"
// import HandShake from "../../../assets/images/handshake.png"



const GameInfo = () => {
    // const [isVisible, setIsVisible] = useState(true);
    // useEffect(() => {   
    //     window.addEventListener("scroll", listenToScroll);
    //     return () => 
    //        window.removeEventListener("scroll", listenToScroll); 
    //   }, [])

    //   const listenToScroll = () => {
    //     let heightToHideFrom = 500;
    //     const winScroll = document.body.scrollTop || 
    //         document.documentElement.scrollTop;
           
    //     if (winScroll > heightToHideFrom) { 
    //        isVisible &&      // to limit setting state only the first time         
    //          setIsVisible(false);
    //     } else {
    //          setIsVisible(true);
    //     }  
    // };
    return (
        <section className="GameInfoScreen">
            <section className="GameInfoScreen__bannerContainer">
                <section className="GameInfoScreen__bannerContainer__verseMap">
                    <img src={ Dungeon1 } className="BankImg" alt="Bank Image" />
                </section>
                <section className="GameInfoScreen__bannerContainer__stick">
                    <img src={ Stick } className="stick" alt="Stick Image" />
                </section>
                <section className="GameInfoScreen__bannerContainer__DescriptionRight">
                    <h1><span className="highlightText">"</span>The Hidden World<span className="highlightText">"</span></h1>
                    <p>There's a whole other world existing just beneath the surface. Since the dawn of time, otherworldly creatures (demons or monsters) have been living there in peace, unknown about the fact that humans inhabited a city above the surface.</p>
                </section>
            </section>
            <section className="GameInfoScreen__bannerContainer">
                <section className="GameInfoScreen__bannerContainer__DescriptionLeft">
                    <h1><span className="highlightText">"</span>Explore The Secrets<span className="highlightText">"</span></h1>
                    <p>The knowledge of hidden underground world had been known to a few and had been concealed from the rest. But all this changed around 500 years ago when two explorers stumbled upon a deep tunnel in the middle of the unknown dark forest.</p>
                </section>
                <section className="GameInfoScreen__bannerContainer__stickLeft">
                    <img src={ Stick } className="stick" alt="Stick Image" />
                </section>
                <section className="GameInfoScreen__bannerContainer__verseMap">
                    <img src={ Dungeon2 } className="BankImg" alt="Farm Image" />
                </section>
            </section>
            <section className="GameInfoScreen__bannerContainer">
                <section className="GameInfoScreen__bannerContainer__verseMap">
                    <img src={ Dungeon3 } className="BankImg" alt="Market Image" />
                </section>
                <section className="GameInfoScreen__bannerContainer__stick">
                    <img src={ Stick } className="stick" alt="Stick Image" />
                </section>
                <section className="GameInfoScreen__bannerContainer__DescriptionRight">
                    <h1><span className="highlightText">"</span>Transform and Battle<span className="highlightText">"</span></h1>
                    <p>For ages, the Celorians have been battling monsters inside the dark dungeons and mining treasure. They employ warriors through our marketplace, and also equip them with powerups to level-up and compete in missions.</p>
                </section>
            </section>
            <section className="GameInfoScreen__bannerContainer">
                <section className="GameInfoScreen__bannerContainer__DescriptionLeft">
                    <h1><span className="highlightText">"</span>Earn Loot<span className="highlightText">"</span></h1>
                    <p>Live, recreate and socialise with fellow Celorians and create real-world impact with UBI and ReFi initiatives. IntoTheVerse takes you into a wholesome world of opportunities for creating prosperity for all.</p>
                </section>
                <section className="GameInfoScreen__bannerContainer__stickLeft">
                    <img src={ Stick } className="stick" alt="Stick Image" />
                </section>
                <section className="GameInfoScreen__bannerContainer__verseMap">
                    <img src={ Dungeon4 } className="BankImg" alt="Impact Image" />
                </section>
            </section>
        </section >
    )
}

export default GameInfo