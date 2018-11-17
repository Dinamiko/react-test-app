import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import PostItem from './PostItem';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        if(this.props.posts.length === 0) {
            return 'Loading...';
        }

        return this.props.posts.map((post, index) => {
            return <PostItem key={index} post={post} />
        });
    }

    onClickRefresh = () => {
        this.props.emptyPosts();
        this.props.fetchPosts();
    };

    render() {
        return (
            <div>
                <button onClick={this.onClickRefresh}>Refresh</button>
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
