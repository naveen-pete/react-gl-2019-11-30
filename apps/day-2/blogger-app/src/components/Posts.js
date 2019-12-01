import React, { Component } from 'react';

import PostDetail from './PostDetail';
import Categories from './Categories';
import PostForm from './PostForm';

import { posts, categoryAll } from './store';

class Posts extends Component {

  constructor() {
    super();

    this.state = {
      posts: posts,
      selectedCategory: categoryAll
    };

    // this.handleCategorySelect = this.handleCategorySelect.bind(this);
  }

  // handleCategorySelect(category) {
  //   this.setState({ selectedCategory: category });
  // }

  handleCreatePost = newPost => {
    this.setState((prevState) => {
      return {
        posts: [...prevState.posts, newPost]
      }
    });
  }

  handleCategorySelect = category => {
    this.setState({ selectedCategory: category });
  }

  handleDeletePost = postId => {
    this.setState((prevState) => {
      return {
        posts: prevState.posts.filter(p => p.id !== postId)
      };
    });
  }

  render() {
    const { posts, selectedCategory } = this.state;

    const filteredPosts = selectedCategory.id === 'all' ?
      posts : posts.filter(p => p.category === selectedCategory.id);

    return <div className="row">
      <div className="col-md-3">
        <Categories onCategorySelect={this.handleCategorySelect} />
      </div>
      <div className="col-md-5">
        <h5>Posts (Category: {selectedCategory.name})</h5>
        {
          filteredPosts.length > 0
            ? filteredPosts.map(p => <PostDetail key={p.id} post={p} onDeletePost={this.handleDeletePost} />)
            : <div className="alert alert-info">No posts for the selected category.</div>
        }
      </div>
      <div className="col-md-4">
        <PostForm onCreatePost={this.handleCreatePost} />
      </div>
    </div>;
  }

}

export default Posts;
