import React, { useState, useEffect } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


import "./TwitterFeed.scss";

const TwitterFeed = () => {
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
        <section className="TwitterFeed">
            <section className="TwitterFeed__smallWidgets">
                <div id="left"><TwitterFollowButton id="left" screenName={'IntoTheVerse_'} backgroundColor="purple" /></div> 
                {/* <div id="middle"><TwitterHashtagButton id="middle" tag={'intotheverse'} /></div> */}
                {/* <div id="right"><TwitterMentionButton id="right" screenName={'IntoTheVerse_'} /></div> */}
            </section>
            <section className="TwitterFeed__widgetContainer">
                <section className="TwitterFeed__widgetContainer__Box">
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="IntoTheVerse_"
                        options={{height: 500}}
                        // theme="dark"
                    />
                </section>
            </section>
        </section >
    )
}

export default TwitterFeed