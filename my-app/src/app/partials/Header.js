import React from 'react';
import propTypes from 'prop-types';

export const Header = ({title, onClick, isListView}) => {

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
                <a href="#" className="brand-logo center">{title}</a>
                <ul class="right hide-on-med-and-down">
                <li><a href="badges.html" onClick={onClick}><i class="material-icons">{newIcon()}</i></a></li>
                {/* <li><a href="collapsible.html" onClick={onClick}><i class="material-icons">view_list</i></a></li> */}
                <li><a href="collapsible.html" ><i class="material-icons">refresh</i></a></li>
            </ul>
            </div>
        </nav>
    )
}

Header.defaultProps = {title: "React users"}