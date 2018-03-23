import React, {Fragment} from 'react'
import { Link } from 'react-router-dom' 

const HomePage = () => {

    return (
        <Fragment>
            <div className= "container">
            <h2>Posts</h2>
            <div>
            <ul className="collection">
            <Link to = "/posts/:1"> <li className="collection-item avatar">
                <span className="title">Title</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate fugiat beatae porro ad dolores sunt mollitia, error aspernatur quis, nulla perspiciatis unde! Possimus doloribus corporis voluptate hic eum aliquam.
                </p>
            </li>
            </Link>

            <li className="collection-item avatar">
                <span className="title">Title</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate fugiat beatae porro ad dolores sunt mollitia, error aspernatur quis, nulla perspiciatis unde! Possimus doloribus corporis voluptate hic eum aliquam.
                </p>
            </li>
            <li className="collection-item avatar">
                <span className="title">Title</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate fugiat beatae porro ad dolores sunt mollitia, error aspernatur quis, nulla perspiciatis unde! Possimus doloribus corporis voluptate hic eum aliquam.
                </p>
            </li>
            <li className="collection-item avatar">
                <span className="title">Title</span>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate fugiat beatae porro ad dolores sunt mollitia, error aspernatur quis, nulla perspiciatis unde! Possimus doloribus corporis voluptate hic eum aliquam.
                </p>
            </li>
        </ul>
                {/* {this.addPost()} */}
            </div>
            </div>
        </Fragment>
    )
}

export { HomePage }