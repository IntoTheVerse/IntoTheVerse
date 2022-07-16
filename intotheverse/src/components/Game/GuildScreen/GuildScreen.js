import React, { useState, useEffect } from 'react';

import "./GuildScreen.scss";
import aspectum from "../../../assets/images/aspectum.svg"
import veneficus from "../../../assets/images/veneficius.svg"
import strykur from "../../../assets/images/strykur.svg"

const GuildScreen = () => {
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
        <section className="GuildScreen">
            <section className="GuildScreen__titleContainer">
                <p>
                    <span className="GuildScreen__titleContainer__highlightText">"</span>
                    Guilds
                    <span className="GuildScreen__titleContainer__highlightText">"</span>
                </p>
            </section>
            <p className='oneLiner'>Elders have been trying to master the powers within the mystical objects collected by various warriors over a period of last 450 years and were successful in figuring out a way to transform people into warrior with differnt and unique set of traits. This gave birth to the concept of guild, Veneficus was the first guild. Currenlty they have found 10 guilds and are trying to find more.</p>
            <section className="GuildScreen__Disclaimer">
                <p>
                    THREE GUILDS & MORE COMING
                </p>
            </section>
            <section className="GuildScreen__widgetContainer">
                <section className="GuildScreen__widgetContainer__Box">
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/jpcm_5E-BiA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <section className="GuildScreen__widgetContainer__Box__guild">
                        <img src={ aspectum } className="guildimg" alt="" />
                    </section>
                    <h2>Aspectum</h2>
                    <p className='oneLinerText'>Blessed with rare vision.</p>
                </section>
                <section className="GuildScreen__widgetContainer__Box">
                    <section className="GuildScreen__widgetContainer__Box__guild">
                        <img src={ veneficus } className="guildimg" alt="" />
                    </section>
                    <h2>Venfecius</h2>
                    <p className='oneLinerText'>Blessed with msyterious powers.</p>
                </section>
                <section className="GuildScreen__widgetContainer__Box">
                    <section className="GuildScreen__widgetContainer__Box__guild">
                        <img src={ strykur } className="guildimg" alt="" />
                    </section>
                    <h2>Strykur</h2>
                    <p className='oneLinerText'>Blessed with inhuman strength.</p>
                </section>
            </section>
        </section >
    )
}

export default GuildScreen