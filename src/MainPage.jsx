// import { render } from 'pug';
import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import config from './config';

import PostList from './Posts/PostList';

export default class RemoveMultiplePosts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      removeMultiple: true,
      removeMultipleArray: []
    }

    this.handleRemoveMultiple = this.handleRemoveMultiple.bind(this);
    this.removeMultipleButton = this.removeMultipleButton.bind(this);
    this.removePosts = this.removePosts.bind(this);
  }

  removeMultipleButton() {
    this.setState({
      removeMultiple: !this.state.removeMultiple
    });
  }

  handleRemoveMultiple(postId) {
    if (postId) {
      this.setState({
        removeMultipleArray: [...this.state.removeMultipleArray, postId]
        });
    }
  }

  removePosts() {
    axios.post(`${config.server}/remove-contests`, this.state.removeMultipleArray)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-4">
            <h1 className="mb-4">Посты</h1>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            { this.state.removeMultiple === true &&
              <Button
                onClick={this.removePosts}
                variant="danger">
                Удалить
              </Button>
            }
            <Button
              onClick={this.removeMultipleButton}
              variant="light">
              { this.state.removeMultiple === false ? 'Удалить несколько' : 'Отмена' }
            </Button>
          </div>
        </div>
        <PostList removeMultiple={this.state.removeMultiple} handleRemoveMultiple={this.handleRemoveMultiple} />
      </div>
    )
  }

}
