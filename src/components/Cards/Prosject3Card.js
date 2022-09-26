import React from "react"
import Flexbox from 'flexbox-react';

const Conteiner3 = () => {
    return(
        <Flexbox flexDirection="column" minHeight="100vh">
            <h2>Prosject 1</h2>
            <h3>Placeholder</h3>
            <p>Placeholder text blablablablabla</p>
            <Flexbox flexDirection="row">
                <a href="https://www.w3schools.com" target="_blank">Live demo</a>
                <a href="https://www.w3schools.com" target="_blank">Github code</a>
            </Flexbox>
        </Flexbox>
    );
};

export default Conteiner3