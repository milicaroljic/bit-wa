import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const SinglePostPage = () => {

    return (
        <Fragment>
            <div className="container">
                <Link to="/">Back</Link>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Post title 1</span>
                                <Link to="/author/:id" > Author Name </Link>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero laudantium asperiores sequi voluptatum aliquid ut. Esse velit, accusantium quasi a culpa repudiandae dolor dicta deserunt porro incidunt tempore quaerat eaque.
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, itaque! Maiores dicta natus quis temporibus cupiditate, quo delectus eaque aperiam! Ipsum dolore, praesentium sit suscipit dolor laudantium consectetur nisi voluptatem?
                                </p>
                            </div>
                            <div className="card-content">
                                <h3>Three more posts from same author</h3>
                                <ul>
                                    <li><Link to = "/post/:id">Post #id </Link> </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export { SinglePostPage }
