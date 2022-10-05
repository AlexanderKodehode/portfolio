import React from "react"
import Flexbox from 'flexbox-react';
import styles from '../styles/my-style.module.css';

const prosject1 = {
    name:"Drumkit",
    demolink: "https://alexanderkodehode.github.io/Drum-Kit/",
    gitlink: "https://github.com/AlexanderKodehode/Drum-Kit"
};

const prosject2 = {
    name:"To do",
    demolink: "https://alexanderkodehode.github.io/Todo/",
    gitlink: "https://github.com/AlexanderKodehode/Todo"
}



const ProsjectCard = () => {
    return(
        <>
            <Flexbox flexDirection="row" >
                <div className={styles.ProsjectCard}>
                    <div className={styles.prosject} >
                        <h2 className={styles.titel}>{prosject1.name}</h2>
                        <img className={styles.prosjectImg} src={require('../../pages/img/Drumkit.JPG')} width="150" height="150" />
                    </div>
                    <div>
                        <a className={styles.demolink} href={prosject1.demolink} target="_blank">Live demo</a>
                        <a className={styles.gitlink} href={prosject1.gitlink} target="_blank">Github code</a>
                    </div>
                </div>
                <div className={styles.ProsjectCard}>
                    <div className={styles.prosject} >
                        <h2 className={styles.titel}>{prosject2.name}</h2>
                        <img src="" alt="Profilpitcher"></img>
                    </div>
                    <div >
                        <a className={styles.demolink} href={prosject2.demolink} target="_blank">Live demo</a>
                        <a className={styles.gitlink} href={prosject2.gitlink} target="_blank">Github code</a>
                    </div>
                </div>    
            </Flexbox>
        </>
    );
};

export default ProsjectCard