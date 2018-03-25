import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { authorService } from '../../services/AuthorService';
import { AuthorItem } from './AuthorItem'

class AuthorsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { authors: [] }
    }

    componentDidMount() {
        authorService.fetchAuthors()
            .then(authors => this.setState({ authors }))
    }


    render() {
        return (
            <Fragment>
                <div className="container">
                    <h3>Authors({this.state.authors.length})</h3>
                    <ul className="collection">
                        <li className = "collection-item">{this.state.authors.map((author, index) => <AuthorItem  author={author} key={index} />)} </li>
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export { AuthorsPage };