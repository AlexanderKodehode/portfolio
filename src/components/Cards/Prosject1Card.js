import React from "react"
import Flexbox from 'flexbox-react';
import styles from '../styles/my-style.module.css';


const Prosject1 = () => {
    return(
        <Flexbox className={styles.prosject} flexDirection="column">
            <h2 className={styles.titel}>Drumkit</h2>
            <img src="" alt="Profilpitcher"></img>
            <p className={styles.titel}>Dette er en side hvor det er lagt inn tommeset som bruker kanpper fra tastaturet til å spille av tromme lyder</p>
            <Flexbox flexDirection="row">
                <a className={styles.demolink} href="https://alexanderkodehode.github.io/Drum-Kit/" target="_blank">Live demo</a>
                <a className={styles.gitlink} href="https://github.com/AlexanderKodehode/Drum-Kit" target="_blank">Github code</a>
            </Flexbox>
        </Flexbox>
    );
};

export default Prosject1