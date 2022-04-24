import React from 'react';

import Header from '../../components/Metaverse/Header/Header';
import LandingScreen from '../../components/Game/HomeScreen/LandingScreen';
import PartnersandInvestors from '../../components/Metaverse/PartnersandInvestors/PartnersandInvestors';
import FooterScreen from '../../components/Game/FooterScreen/FooterScreen';
import GameInfo from '../../components/Game/InfoScreen/GameInfo'
import GuildScreen from '../../components/Game/GuildScreen.js/GuildScreen';
import TwitterFeed from '../../components/Metaverse/TwitterFeed/TwitterFeed';
// import TeamInfoScreen from '../TeamInfoScreen/TeamInfoScreen';
// import Footer from '../Footer/Footer';
// import RoadmapScreen from '../RoadmapScreen/RoadmapScreen';

const Game = () => {
    return (
        <section className="landing_Container">
            <Header />
            <LandingScreen />
            <GameInfo />
            <GuildScreen />
            <FooterScreen />
            {/*<FeaturesScreen id="featuresScreen" />
            <RoadmapScreen id="roadmapScreen"/>
            <TeamInfoScreen id="teamInfoScreen" />
            <Footer id="footerScreen" /> */}
        </section>
    )
}

export default Game