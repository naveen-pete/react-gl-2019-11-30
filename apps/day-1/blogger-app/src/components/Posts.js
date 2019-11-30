import React from 'react';

import PostDetail from './PostDetail';
import { posts } from './store';

const Posts = () => {
  return <div>
    <h5>Posts</h5>
    {posts.map(p => <PostDetail key={p.id} post={p} />)}
  </div>;
};

export default Posts;
