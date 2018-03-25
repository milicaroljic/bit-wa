import { Post } from "../entities/Post";
import { url } from '../shared/constants';

class PostService {

    fetchPosts = () => {
        return fetch(url.postsURL)
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => {
                    return new Post(post);
                });
            });
    }
}


export const postService = new PostService()