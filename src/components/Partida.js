import React from 'react';

export default class Partida extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.partida.estadio}</h1>
                <h2>{this.props.partida.data} - {this.props.partida.hora}</h2>
            </div>            
        );
    }

}