import React, { useState, useEffect } from 'react';

import "./TokenEconomy.scss";
import VRSBox from "../../../assets/images/VRSbox.png"
import DGNBox from "../../../assets/images/DGNbox.png"
import NFTAssetBox from "../../../assets/images/NFTAsset.png"
import VRSGif from "../../../assets/images/VRS.gif"
import DGNGif from "../../../assets/images/DGN.gif"
import NFTGif from "../../../assets/images/warrior.gif"
import button from "../../../assets/images/read.png"


const TokenEconomy = () => {
    return (
        <section className="TokenEconomy">
            <section className="TokenEconomy__titleContainer">
                <p>
                    <span className="TokenEconomy__titleContainer__highlightText">"</span>
                        Token Economics
                    <span className="TokenEconomy__titleContainer__highlightText">"</span>
                </p>
            </section>
            <p className='oneLiner'>IntoTheVerse is powered by a dual token economy and NFT liquidity</p>
            <section className="TokenEconomy__bannerContainer">
                <section className="TokenEconomy__bannerContainer__verseMap">
                    <img src={ VRSBox } className="VRSBox" alt="Bank Image" />
                    <img src={ VRSGif } className="VRSGif" alt="VRS Image" />
                </section>
                <section className="TokenEconomy__bannerContainer__DescriptionRight">
                    <h1><span className="highlightText">"</span>Visit Banks<span className="highlightText">"</span></h1>
                    <p>One of the key reasons we're interested in blockchain technology is that we want to make investing exciting and pleasant for everyone within the realms. You would be able to swap tokens at market-exchange rates, and also view your Celo assets, NFT holdings while visiting Kiosks inside our banks.</p>
                </section>
            </section>
            <section className="TokenEconomy__bannerContainer">
                <section className="TokenEconomy__bannerContainer__DescriptionLeft">
                    <h1><span className="highlightText">"</span>Farm rewards<span className="highlightText">"</span></h1>
                    <p>The city is blessed with fertile land. Farms are sown with seeds, bearing the LP token. Over time, the Celorians have been yielding healthy token rewards in their farms.</p>
                </section>
                <section className="TokenEconomy__bannerContainer__verseMap">
                    <img src={ DGNBox } className="BankImg" alt="Farm Image" />
                    <img src={ DGNGif } className="VRSGif" alt="VRS Image" />
                </section>
            </section>
            <section className="TokenEconomy__bannerContainer">
                <section className="TokenEconomy__bannerContainer__verseMap">
                    <img src={ NFTAssetBox } className="BankImg" alt="Market Image" />
                    <img src={ NFTGif } className="VRSGif" alt="VRS Image" />
                </section>
                <section className="TokenEconomy__bannerContainer__DescriptionRight">
                    <h1><span className="highlightText">"</span>Shop & Own NFTs<span className="highlightText">"</span></h1>
                    <p>For ages, the Celorians have been battling monsters inside the dark dungeons and mining treasure. They employ warriors through our marketplace, and also equip them with powerups to level-up and compete in missions.</p>
                </section>
            </section>
            <section className="Button">
                <a href="https://docs.intotheverse.xyz/token-economy/" target="_blank"><img src={ button } className="Footer__widgetContainer__SocialIcons" alt="Discord" /></a>
            </section>
        </section >
    )
}

export default TokenEconomy