import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom"
import { Switch, Route } from "react-router-dom"
import './index.css';
import App from './app/App.js';
import registerServiceWorker from './registerServiceWorker';
import AboutPage from "../src/app/about/AboutPage"

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path = "/" component= {App} />
            <Route exact path = "/about" component= {AboutPage}/>
            <App />
         </Switch>
    </HashRouter>,
    document.querySelector('#root')
)