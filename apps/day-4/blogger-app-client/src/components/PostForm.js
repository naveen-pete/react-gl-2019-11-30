import React, { Component } from 'react';

import { categories, posts } from './store';

class PostForm extends Component {

  state = {
    id: 0,
    title: '',
    body: '',
    author: '',
    category: ''
  };

  componentDidMount() {
    this.getPost();
    console.log('PostForm component mounted.');
  }

  componentWillUnmount() {
    console.log('PostForm component got destroyed.');
  }

  getPost = () => {
    const id = this.props.match.params.id;

    const post = posts.find(p => p.id === parseInt(id));
    if (!post) {
      return;
    }

    this.setState({
      id: post.id,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    const id = this.state.id;

    if (id === 0) {
      // Create new post
      const newPost = { ...this.state, id: Date.now() };
      posts.push(newPost);
    } else {
      // Update existing post
      const post = posts.find(p => p.id === id);

      if (post) {
        post.title = this.state.title;
        post.body = this.state.body;
        post.author = this.state.author;
        post.category = this.state.category;
      } else {
        console.log(`No post found for id: ${this.state.id}`);
      }
    }

    this.props.history.push('/posts');
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { title, body, author, category } = this.state;

    return <div>
      <h5>Post Form</h5>

      <div className="card bg-light">
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="Enter title"
                value={title}
                onChange={this.handleChange}
              // onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                placeholder="Enter body"
                rows="3"
                cols="30"
                value={body}
                onChange={this.handleChange}
              // onChange={e => this.setState({ body: e.target.value })}
              >
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                name="author"
                placeholder="Enter author"
                value={author}
                onChange={this.handleChange}
              // onChange={e => this.setState({ author: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                required
                className="form-control"
                id="category"
                name="category"
                value={category}
                onChange={this.handleChange}
              // onChange={e => this.setState({ category: e.target.value })}
              >
                <option value=""></option>
                {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>

            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>
      </div>

    </div>;
  }

}

export default PostForm;
