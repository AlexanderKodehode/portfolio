import React from 'react';
import Flexbox from 'flexbox-react';
import IntroCard from '../components/Cards/IntroductionCard';
import style from '../components/styles/my-style.module.css';


const LandingPage = () => {
    return(
        <Flexbox flexDirection="row">
            <>
                <img className={style.img} src="" alt="Profilpitcher"></img>
            </>
            <>
                <IntroCard />
            </>
        </Flexbox>
    )
};

export default LandingPage