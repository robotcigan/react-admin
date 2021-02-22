import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Figure } from 'react-bootstrap';
import axios from 'axios';
import config from './config';


export default class PostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: props.params,
      post: {}
    }

    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    axios.get(`${config.server}/contest/${this.state.postId}`)
      .then(res => {
        this.setState({ post: res.data['contest'] })
      })
      .catch(err => console.log(err))
  }

  removePost() {
    let areYouSure = window.confirm('Вы точно хотите удалить?');
    console.log(this.state.postId)
    if (areYouSure) {
      axios.delete(`${config.server}/remove-contest/${this.state.postId}`)
        .then(res => console.log('Success removed'))
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-4 offset-md-2">
            <h1>{this.state.post.title}</h1>
            <Figure>
              <Figure.Image src={config.imgStorage + this.state.post.thumbnail} />
            </Figure>
            <p>{this.state.post.text}</p>
            <Button variant="danger" onClick={this.removePost}>Удалить пост</Button>
          </div>
        </div>
      </div>
    )
  }
}


// Post.propTypes = {
//   post: PropTypes.object.isRequired,
//   index: PropTypes.number
// }
