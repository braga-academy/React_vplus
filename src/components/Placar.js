import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class Placar extends React.Component{

    render(){
        return(
            <div>
                <div style={{ float: "left", "marginRight": "15px" }}>
                    <h3>Casa</h3>
                    <Time />
                </div>
                <div style={{ float: "left", "marginRight": "15px" }}>
                    <Partida />
                </div>
                <div style={{ float: "left", "marginRight": "15px" }}>
                    <h3>Visitante</h3>
                    <Time />
                </div>
            </div>
        );
    }

}