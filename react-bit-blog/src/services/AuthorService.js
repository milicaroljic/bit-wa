import { Author } from "../entities/Author";
import { url } from '../shared/constants';

class AuthorService {

    fetchAuthors = () => {
        return fetch(url.authorsURL)
            .then(response => response.json())
            .then(authors => {
                return authors.map(author => {
                    return new Author(author);
                });
            });
    }

    fetchAuthor = (id) => {

        return fetch(`${url.authorsURL}${id}`)
            .then(response => response.json())
            .then(author => new Author(author));

    }
}

export const authorService = new AuthorService()