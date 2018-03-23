import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'


const SingleAuthorPage = () => {
    return (
        <Fragment>
            <div className="container">
            <Link to="/authors"> <p> Back </p> </Link>
                <ul class="collection">
                    <li class="collection-item avatar">
                        <img src="http://www.equator-network.org/wp-content/uploads/2013/08/Author.jpg?w=100" className="image"alt="" />
                        <span class="title">Name Surname</span>
                        <p>username: my_cool_username <br />
                            email: my_cool@email.com <br />
                            phone: 1-770-736-8031
                        </p>
                    </li>
                    <li class="collection-item avatar">
                        <img src="http://www.equator-network.org/wp-content/uploads/2013/08/Author.jpg?w=100" className="image right"alt="" />
                        <span class="title">Adress</span>
                        <p>street: Bla Bla Street <br />
                            city: Gwenborough <br />
                            zipcode: 77068
                        </p>
                    </li>
                    <li class="collection-item avatar">
                        <span class="title">Company</span>
                        <p>name:Gwenborough <br />
                            slogan: 77068
                        </p>
                    </li>

                </ul>
            </div>
        </Fragment>
    );
}

export { SingleAuthorPage };