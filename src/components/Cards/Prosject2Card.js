import React from "react"
import Flexbox from 'flexbox-react';
import styles from '../styles/my-style.module.css';

const Prosject2 = () => {
    return(
        <Flexbox className={styles.prosject} flexDirection="column">
            <h2>Todo list</h2>
            <img src="" alt="Profilpitcher"></img>
            <p>Here har vi en Todo list</p>
            <Flexbox flexDirection="row">
                <a className={styles.demolink} href="https://alexanderkodehode.github.io/Todo/" target="_blank">Live demo</a>
                <a className={styles.gitlink} href="https://github.com/AlexanderKodehode/Todo" target="_blank">Github code</a>
            </Flexbox>
        </Flexbox>
    );
};

export default Prosject2