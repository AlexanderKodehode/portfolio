import React from 'react';
import Conteiner1 from '../components/Cards/Prosject1Card';
import Conteiner2 from '../components/Cards/Prosject2Card';
import Conteiner3 from '../components/Cards/Prosject3Card';
import Flexbox from 'flexbox-react';


const ProsjectPage = () =>{
    return (
        <Flexbox flexDirection="Row" minHeight="100vh">
            <Conteiner1/>
            <Conteiner2/>
            <Conteiner3/>
        </Flexbox>
    );
};

export default ProsjectPage