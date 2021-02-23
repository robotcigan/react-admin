import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import config from '../config';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: props.params,
      post: {},
      title: '',
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    axios.get(`${config.server}/contest/${this.state.postId}`)
      .then(res => {
        let resPost = res.data['contest'];
        console.log(resPost)
        this.setState({
          post: resPost,
          title: resPost.title,
          text: resPost.text
        })
      })
      .catch(err => console.log(err))
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.put(`${config.server}/edit-contest/${this.state.postId}`, this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="container">
        <Form className="pb-md-4" onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Название поста</Form.Label>
            <Form.Control
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Основной текст</Form.Label>
            <Form.Control
              name="text"
              as="textarea"
              value={this.state.text}
              onChange={this.handleChange}
              rows={3} />
          </Form.Group>
          <Button as="input" type="submit" value="Save"></Button>
        </Form>
        { this.state.successAlert
          ? <Alert variant='success'>Пост успешно создан!</Alert>
          : ''
        }
      </div>
    )
  }
}