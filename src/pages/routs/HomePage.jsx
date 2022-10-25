import React from 'react';
import * as style from "./HomePageFiles/style";


const Homepage = () => {
    return(
        <section>
            <style.Container>
                <>
                    <style.img src={require('../../assets/img/Profil.jpg')} />

                </>
                <>
                    <style.Text_Container>
                        <style.Title>Alexander Follaug</style.Title>
                        <style.Skill>Frontend-develepor</style.Skill>
                    </style.Text_Container>
                </>
            </style.Container>
        </section>
    )
};

export default Homepage