import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //call an action creator
    //and save Comment

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
