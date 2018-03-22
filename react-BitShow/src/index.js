import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './app/App';
import { HashRouter, Switch, Route } from "react-router-dom"
import {SingleShowPage} from "./app/components/SingleShowPage"

ReactDOM.render(<HashRouter>
   <Switch>
    <Route path= "/show/:id" component = {SingleShowPage}/>
    <Route path= "/" component = {App}/>
    </Switch>
</HashRouter>, document.getElementById('root'));
