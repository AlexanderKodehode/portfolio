import React from 'react';
import Flexbox from 'flexbox-react';
import ProsjectCard from '../components/Cards/ProsjectCard';
import style from '../components/styles/my-style.module.css';



const ProsjectPage = () =>{
    return (
        <Flexbox className={style.body} flexDirection="Row">
            <ProsjectCard/>
        </Flexbox>
    );
};

export default ProsjectPage