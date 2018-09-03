import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class PostList extends Component {

    state = {
        posts: []
    };

    componentWillMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map((post, index) => {
            return <li key={index}>{post.title}</li>
        });
    }

    render() {
        return (
            <div>
                {this.renderPosts()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, actions)(PostList);
