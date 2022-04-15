import React from 'react';

import Header from '../../components/Metaverse/Header/Header';
import HomeScreen from '../../components/Metaverse/HomeScreen/HomeScreen';
import PartnersandInvestors from '../../components/Metaverse/PartnersandInvestors/PartnersandInvestors';
import Footer from '../../components/Metaverse/Footer/Footer';
import InfoScreen from '../../components/Metaverse/InfoScreen/InfoScreen'
import LoreGallery from '../../components/Metaverse/YoutubeSection/LoreGallery';
import TwitterFeed from '../../components/Metaverse/TwitterFeed/TwitterFeed';
// import TeamInfoScreen from '../TeamInfoScreen/TeamInfoScreen';
// import Footer from '../Footer/Footer';
// import RoadmapScreen from '../RoadmapScreen/RoadmapScreen';

const Landing = () => {
    return (
        <section className="landing_Container">
            <Header />
            <HomeScreen />
            <InfoScreen />
            <LoreGallery />
            <TwitterFeed />
            <PartnersandInvestors />
            <Footer />
            {/*<FeaturesScreen id="featuresScreen" />
            <RoadmapScreen id="roadmapScreen"/>
            <TeamInfoScreen id="teamInfoScreen" />
            <Footer id="footerScreen" /> */}
        </section>
    )
}

export default Landing