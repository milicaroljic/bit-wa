import React from 'react';
import propTypes from 'prop-types';
import { Search } from './Search';
import { Link } from "react-router-dom";

export const Header = ({title, triggerView, isListView, refreshUsers}) => {
    let inputField; //placeholder for input field

    function newIcon(){
        if(isListView) {
            return "view_module"
        } else {
            return "view_list"
        }
    }
    
    
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to = "/" className="brand-logo center">{title}</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to ="/about" className="waves-effect waves-light btn">About</Link> </li>
                    <li><a href="badges.html" onClick={triggerView}><i className="material-icons">{newIcon()}</i></a></li>
                    <li><a href="collapsible.html" onClick={refreshUsers}><i className="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {title: "React users"}