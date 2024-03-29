import React from 'react';

const PostDetail = ({ post, onDeletePost }) => {
  const { id, title, body, author, category } = post;

  return <div className="card bg-light mb-3">
    <div className="card-header">
      <h5>
        {title}
      </h5>
    </div>
    <div className="card-body">
      <p className="card-text">
        {body}
      </p>
      <p className="card-text">Author: <em>
        {author}
      </em></p>
      <p className="card-text">Category: <em>
        {category}
      </em></p>
    </div>
    <div className="card-footer">
      <button className="btn btn-sm btn-outline-primary mr-1" type="button">Edit</button>
      <button
        className="btn btn-sm btn-outline-danger"
        type="button"
        onClick={() => onDeletePost(id)}
      >Delete</button>
    </div>
  </div>
};

export default PostDetail;
