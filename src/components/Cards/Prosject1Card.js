import React from "react"
import Flexbox from 'flexbox-react';
import styles from '../styles/my-style.module.css';


const Prosject1 = () => {
    return(
        <Flexbox className={styles.prosject} flexDirection="column">
            <h2 className={styles.titel}>Prosject 1</h2>
            <img src="" alt="Profilpitcher"></img>
            <p className={styles.titel}>Placeholder text blablablablabla</p>
            <Flexbox flexDirection="row">
                <a className={styles.demolink} href="https://www.w3schools.com" target="_blank">Live demo</a>
                <a className={styles.gitlink} href="https://www.w3schools.com" target="_blank">Github code</a>
            </Flexbox>
        </Flexbox>
    );
};

export default Prosject1