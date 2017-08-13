import React from 'react';

import Placar from './Placar';

const dados = {
    partida: {
        estadio: "Maracanã",
        data: "25/01/207",
        hora: "15:35:00"
    },
    casa: {
        nome: "Vasco"
    },
    visitante: {
        nome: "Flamengo"
    }
};

export default class App extends React.Component{
    render(){
        return <Placar {...dados} />
    }
}