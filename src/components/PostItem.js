import React from 'react';

export default (props) => {
    return <li id={props.post.id}>{props.post.title}</li>
};
