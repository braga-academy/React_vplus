import React from 'react';

export default class Partida extends React.Component{

    render(){
        return(
            <div>
                <h1>{this.props.estadio}</h1>
                <h2>{this.props.data} - {this.props.hora}</h2>
            </div>            
        );
    }

}