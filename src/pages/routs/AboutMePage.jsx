import React from "react";
import * as style from "./AboutMePageFiles/style";

const AboutMePage = () => {
    return (
        <style.Container>
            <style.Left_Container>
                <style.Text>
                    <p>Jeg heter Alexander og er 23 år, og for øyeblikket deltar jeg på kodehode IT AMO kurs. Her driver jeg å bygge opp kompetanse rundt html, css, javascript og react.Jeg ser mine sterkeste side som en person som er lærelysten, sosial og kunnskapssøkende.</p>
                    <br/>
                    <p>I løpet av min tid hos kodehode har jeg lært mye innen frontend-utvikling. Dette har jeg brukt til å designe og kode egne sider, å løse generelle kode utfordringer.</p>
                    <br/>
                    <p>På fritiden min likere jeg å samle vennere til sosiale aktiviteter. Det beste jeg vett er å samle gjengen til å se fotballkamper. På min solo tid likere jeg å høre på podcaster eller se på videoer/streams, endte som avslappende eller for å utvikle meg.</p>
                </style.Text>
            </style.Left_Container>
            <style.Right_Container>
                <style.Contact>
                    <style.Contact_Titel>
                        <h1>Contact info</h1>
                    </style.Contact_Titel>
                    <style.Mail>
                        <h2>Mail</h2>
                        <h3>.....@gmail.com</h3>
                    </style.Mail>
                    <style.Contact_Links>
                        <a href="">Linkedin</a>
                        <a href="">Github</a>
                    </style.Contact_Links>
                    <div>
                        <style.Cv>Cv</style.Cv>
                    </div>
                </style.Contact>
            </style.Right_Container>
        </style.Container>
    );
};

export default AboutMePage