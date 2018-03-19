import React from 'react';
import propTypes from 'prop-types';

export const Header = ({title}) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">{title}</a>
            </div>
        </nav>
    )
}

Header.defaultProps = {title: "React users"}