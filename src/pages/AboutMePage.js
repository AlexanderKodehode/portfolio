import React from "react";
import styles from '../../src/components/styles/my-style.module.css'

const AboutMePage = () => {
    return (
        <>
            <p className={styles.text}>Jeg heter Alexander og er 23 år, og for øyeblikket deltar jeg på kodehode IT AMO kurs. Her driver jeg å bygge opp kompetanse rundt html, css, javascript og python.Jeg ser mine sterkeste side som en person som er lærelysten, sosial og kunnskapssøkende.</p>
            <br/>
            <p className={styles.text}>I løpet av min tid hos kodehode har jeg lært mye innen frontend-utvikling. Dette har jeg brukt til å designe og kode egne sider, å løse generelle kode utfordringer.</p>
            <br/>
            <p className={styles.text}>På fritiden min likere jeg å samle vennere til sosiale aktiviteter. Det beste jeg vett er å samle gjengen til å se fotballkamper. På min solo tid likere jeg å høre på podcaster eller se på videoer/streams, endte som avslappende eller for å utvikle meg.</p>
        </>
    );
};

export default AboutMePage