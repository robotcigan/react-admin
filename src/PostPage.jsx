import React from 'react';
// import PropTypes from 'prop-types';
import { Button, Figure } from 'react-bootstrap';
import { Calendar } from 'react-bootstrap-icons';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';


export default class PostPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      postId: props.params,
      post: {},
      formatedDateCreated: ''
    }

    this.removePost = this.removePost.bind(this);
  }

  componentDidMount() {
    axios.get(`${config.server}/contest/${this.state.postId}`)
      .then(res => {
        this.setState({ post: res.data['contest'], formatedDateCreated: res.data['formatedDateCreated'] })
      })
      .catch(err => console.log(err))
  }

  removePost() {
    let areYouSure = window.confirm('Вы точно хотите удалить?');
    if (areYouSure) {
      axios.delete(`${config.server}/remove-contest/${this.state.postId}`)
        .then(res => {
          console.log('Success removed')
          this.props.history.goBack();
        })
        .catch(err => console.log(err))
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-4 offset-md-2">
            <h1>{this.state.post.title}</h1>
            <p className="text-secondary">
              <Calendar />{' '}
              <span>Создан {this.state.formatedDateCreated}</span>
            </p>
            <p>
              <span className="text-secondary">Награда: </span>
              {this.state.post.reward}
            </p>
            { this.state.post.thumbnail &&
              <Figure>
                <Figure.Image src={config.imgStorage + this.state.post.thumbnail} />
              </Figure>
            }
            <p>{this.state.post.text}</p>
            <div className="buttons">
              <Link className="btn btn-primary" to={`/edit-post/${this.state.postId}`}>Изменить пост</Link>
              {' '}
              <Button variant="danger" onClick={this.removePost}>Удалить пост</Button>
            </div>
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
