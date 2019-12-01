import React, { Component } from 'react';

import { categories } from './store';

class PostForm extends Component {

  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const newPost = { id: Date.now(), ...this.state };

    this.props.onCreatePost(newPost);

    this.setState({
      title: '',
      body: '',
      author: '',
      category: ''
    });
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
