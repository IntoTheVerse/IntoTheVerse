import React, { useState, useEffect } from 'react';

import "./Footer.scss";
import discord from "../../../assets/images/discord.png"
import twitter from "../../../assets/images/twitter.png"
import github from "../../../assets/images/github.png"
import logo from "../../../assets/logo.svg"
import standing from "../../../assets/images/standing-strong.png"

const Footer = () => {
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
        <section className="Footer">
            <section className="Footer__titleContainer">
                <p>Join our Community</p>
                <p>and Stay Updated</p>
            </section>
            <section className="Footer__widgetContainer">
                <section className="Footer__widgetContainer__Social">
                    <a href="https://discord.gg/2reNSKDEEr" target="_blank"><img src={ discord } className="Footer__widgetContainer__SocialIcons" alt="Discord" /></a>
                    <a href="https://twitter.com/IntoTheVerse_" target="_blank"><img src={ twitter } className="Footer__widgetContainer__SocialIcons" alt="Twitter" /></a>
                    <a href="https://github.com/IntoTheVerse" target="_blank"><img src={ github } className="Footer__widgetContainer__SocialIcons" alt="Github" /></a>
                </section>
                <section className="Footer__widgetContainer__Box">
                    <section className="Footer__widgetContainer__Box__container">
                        <img src={ logo } className="Footer__widgetContainer__Box__container__IntoTheVerseLogo" alt="IntoTheVerse" />
                        <section className="Footer__widgetContainer__Box__container__BackLinks">
                            <a href="">Home</a>
                            <a href="">Game</a>
                            <a href="">Tokenomics</a>
                            <a href="">Whitepaper</a>
                        </section>
                        <p className="Footer__widgetContainer__Box__container__copyright">Copyright © 2021 Into The Verse. All Rights Reserved.</p>
                    </section>
                    <section className="Footer__widgetContainer__Box__StrongIllustration">
                        <img src={ standing } alt="Standing Strong" style={{transform: 'translate(0px, -100px)'}} />
                    </section>
                </section>
            </section>
        </section >
    )
}

export default Footer