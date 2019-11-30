import React from 'react';

const divStyle = {
  color: "blue"
};

const PostDetail = (props) => {
  return <div style={divStyle}>
    <div>Title: {props.post.title}</div>
    <div>Body: {props.post.body}</div>
    <div>Author: {props.post.author}</div>
    <div>Category: {props.post.category}</div>
    <hr />
  </div>
};

export default PostDetail;
