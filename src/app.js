import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, hashHistory } from 'react-router-dom';

import App from './pages/App';

ReactDOM.render((
    <HashRouter history={hashHistory}>
        <Route patch="/" component={App} />
    </HashRouter>
), document.getElementById("app"));