import React from "react"
import * as style from "./Styled"

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
            <div className="container">
                {/* Card number 1 */}
                <style.Card>
                    <style.Prosject>
                        <style.ProsjectTitel>{prosject1.name}</style.ProsjectTitel>
                        <style.ProsjectImg src={'../../../assets/img/Drumkit.JPG'}/>
                    </style.Prosject>
                    <style.Link>
                        <style.DemoLink>
                            <style.Prosject_btn>Live demo</style.Prosject_btn>
                        </style.DemoLink>
                        <style.GitLink>
                            <style.Prosject_btn>Github code</style.Prosject_btn>
                        </style.GitLink>
                    </style.Link>
                </style.Card>
                {/* Card number 2 */}
                <style.Card>
                    <style.Prosject >
                        <style.ProsjectTitel>{prosject2.name}</style.ProsjectTitel>
                        <style.ProsjectImg>
                            {/* src={require('../../pages/img/Drumkit.JPG')} */}
                        </style.ProsjectImg>
                    </style.Prosject>
                    <style.Link>
                        <style.DemoLink>
                            <style.Prosject_btn>Live demo</style.Prosject_btn>
                        </style.DemoLink>
                        <style.GitLink>
                            <style.Prosject_btn>Github code</style.Prosject_btn>
                        </style.GitLink>
                    </style.Link>
                </style.Card>    
            </div>
    );
};

export default ProsjectCard