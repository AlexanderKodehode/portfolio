import React from 'react';
import Prosject1 from '../components/Cards/Prosject1Card'
import Prosject2 from '../components/Cards/Prosject2Card';
import Prosject3 from '../components/Cards/Prosject3Card';
import Flexbox from 'flexbox-react';



const ProsjectPage = () =>{
    return (
        <Flexbox flexDirection="Row">
            <Prosject1/>
            <Prosject2/>
            <Prosject3/>
        </Flexbox>
    );
};

export default ProsjectPage