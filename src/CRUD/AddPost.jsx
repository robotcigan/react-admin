import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import config from '../config';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state);
    axios.post(`${config.server}/save-contest`, this.state)
      .then(res => console.log(res))
      .catch(err => console.log(err))

  }

  render() {
    return (
      <Form className="pb-md-4" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control
            name="text"
            as="textarea"
            value={this.state.text}
            onChange={this.handleChange}
            rows={3} />
        </Form.Group>
        <Button as="input" type="submit" value="Save"></Button>
      </Form>
    )
  }
}