import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

const AuthorsPage = () => {
    const id1 = "/author/:1"
    const id2 = "/author/:2"
    const id3 = "/author/:3"
    const id4 = "/author/:4"
    const id5= "/author/:5"
    const id6 = "/author/:6"
    return (
        <Fragment>
            <div className="container">
                <h3>Authors(6)</h3>
                <ul className="collection">
                    <Link to={id1}><li className="collection-item">Name Surname</li></Link>
                    <Link to={id2}><li className="collection-item">Name Surname</li></Link>
                    <Link to={id3}><li className="collection-item">Name Surname</li></Link>
                    <Link to={id4}><li className="collection-item">Name Surname</li></Link>
                    <Link to={id5}><li className="collection-item">Name Surname</li></Link>
                    <Link to={id6}><li className="collection-item">Name Surname</li></Link>
                </ul>
            </div>
        </Fragment>
    );
}

export { AuthorsPage };