import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { postService } from '../../services/PostService'
import { PostItem } from './PostItem'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
    };

    componentDidMount() {
        postService.fetchPosts()
            .then(posts => this.setState({ posts }))
    }

    addPosts() {
        return this.state.posts.map((post, index) => {
            return <PostItem post={post} key={index} />
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h2>Posts</h2>
                    <div>
                        {this.addPosts()}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export { HomePage }