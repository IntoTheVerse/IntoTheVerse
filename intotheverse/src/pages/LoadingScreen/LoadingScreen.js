import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

import "./LoadingScreen.scss";

// import HelpIcon from '../../assets/help_icon.svg'

const loadingtime = 3800


const LoadingScreen = () => {
    let history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            history.push("/home");
        }, loadingtime);
        // eslint-disable-line react-hooks/exhaustive-deps
    }, [])
    return (
        <main className="loadingScreen">
            <section className="loadingScreen__main">
            </section>
            <section className="loadingScreen__tips-tricks">
                {/* <img src={HelpIcon} alt="help_icon" /> */}
                <p>Play Earn Win!</p>
            </section>
        </main>
    )
}

export default LoadingScreen