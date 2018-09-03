import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class PostList extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        this.setState({
            posts: this.props.getPosts()
        });
    }

    render() {
        return (
            <div>
                Post List
            </div>
        );
    }
}

export default connect(null, actions)(PostList);
