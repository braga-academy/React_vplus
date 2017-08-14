import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, HashRouter, Route, hashHistory, Link} from 'react-router-dom';

import App from './pages/App';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';

ReactDOM.render((
    <HashRouter history={hashHistory}>
        <Route patch="/" component={App} >
            <Route patch="/cursos" component={Cursos} />>
            <Route patch="/sobre" component={Sobre} />>
        </Route>
    </HashRouter>
), document.getElementById("app"));