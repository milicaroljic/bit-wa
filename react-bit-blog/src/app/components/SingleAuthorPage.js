import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import { authorService } from '../../services/AuthorService';


class SingleAuthorPage extends Component {
    constructor(props) {
        super (props);
        this.state = {
            authorID: props.match.params.id,
            singleAuthor : ""
        };
    }

    componentDidMount() {

        authorService.fetchAuthor(this.state.authorID)
            .then(author => this.setState({ singleAuthor: author}))

    }

    render() {

        const map = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d${this.state.singleAuthor.addressGeoLat}!3d${this.state.singleAuthor.addressGeoLng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1521902112484`
    
    return (
        <Fragment>
            <div className="container">
            <Link to="/authors"> <p> Back </p> </Link>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <img src="http://www.equator-network.org/wp-content/uploads/2013/08/Author.jpg?w=100" className="image"alt="" />
                        <span className="title">{this.state.singleAuthor.name}</span>
                        <p>username:{this.state.singleAuthor.username} <br />
                            email: {this.state.singleAuthor.email} <br />
                            phone: {this.state.singleAuthor.phone}
                        </p>
                    </li>
                    <li className="collection-item avatar">
                        <img src="http://www.equator-network.org/wp-content/uploads/2013/08/Author.jpg?w=100" className="image right"alt="" />
                        <span className="title">Address</span>
                        <p>street: {this.state.singleAuthor.streetAddress} <br />  
                                city: {this.state.singleAuthor.cityAddress} <br />
                                zipcode: {this.state.singleAuthor.zipcodeAddress}
                        </p>
                    </li>
                    <div>
                        <iframe src={map} width="200" height="100" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
                    </div>
                    <li className="collection-item avatar">
                        <span className="title">Company</span>
                        <p>
                            name:{this.state.singleAuthor.companyName} <br />
                            slogan: {this.state.singleAuthor.companySlogan}
                        </p>
                    </li>

                </ul>
            </div>
        </Fragment>
    );
}
}

export { SingleAuthorPage };