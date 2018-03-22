import React from 'react';
import propTypes from 'prop-types';
import { Search } from './Search';
import { Link } from "react-router-dom";

export const Header = ({ title, triggerView, isListView, refreshUsers}, hasMenu) => {
    let inputField; //placeholder for input field

    const Menu = () => {
        if (hasMenu) {
            return (
            <nav>
                 <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">{title}</Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/about" className="waves-effect waves-light btn">About</Link> </li>
                    <li><a onClick={triggerView}><i className="material-icons">{isListView ? "view_module" : "view_list"}</i></a></li>
                    <li><a onClick={refreshUsers}><i className="material-icons">refresh</i></a></li>
                </ul>
                </div>
                </nav>
            )
        }
    }
    
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">{title}</Link>
                {Menu()}
            </div>
        </nav>
    )

}

Header.defaultProps = { title: "React users" }