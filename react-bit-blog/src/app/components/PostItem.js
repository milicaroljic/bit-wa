import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const PostItem = ({post}) => {
    return (
        <Fragment>
            <ul className="collection">
                <Link to={`/post/:${post.id}`}> 
                <li className="collection-item avatar">
                    <h2 className="title">{post.title}</h2>
                    <p>
                    {post.body}
                    </p>
                </li>
                </Link>
            </ul>
        </Fragment>
    )
}
export { PostItem }