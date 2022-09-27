import React from "react"
import Flexbox from "flexbox-react";
import style from '../styles/my-style.module.css';

const IntroCard = () => {
    return(
        <Flexbox className={style.info} flexDirection="column">
            <h1>Alexander Follaug</h1>
            <h2>Frontend-develepor</h2>
        </Flexbox>
    );
};

export default IntroCard