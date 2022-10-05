import React from 'react';
import Flexbox from 'flexbox-react';
import style from '../components/styles/my-style.module.css';


const LandingPage = () => {
    return(
        <Flexbox flexDirection="row">
            <>
                <img className={style.img} src={require('./img/Profil.jpg')} width="500" height="600" />

            </>
            <>
                <Flexbox className={style.info} flexDirection="column">
                    <h1>Alexander Follaug</h1>
                    <h2>Frontend-develepor</h2>
                </Flexbox>
            </>
        </Flexbox>
    )
};

export default LandingPage