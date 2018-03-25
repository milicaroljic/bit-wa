import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const AuthorItem = ( props ) => {
    const { author } = props
    
    return (
        <Fragment>
            <Link to={`/authors/${author.id}`}>
            <ul className = "collection">
                <li className="collection-item">{author.name}</li>
            </ul>
            </Link>
        </Fragment>
    )
}
export { AuthorItem }

