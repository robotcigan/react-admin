import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import config from '../config';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      successAlert: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleAlert = this.handleAlert.bind(this);
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
    axios.post(`${config.server}/save-contest`, this.state)
      .then(res => {
        console.log(res);
        this.state.successAlertShow = false;
        alert('Пост успешно создан!');
      })
      .catch(err => console.log(err))
  }

  // handleAlert() {
  //   this.setState({successAlert: false})
  // }

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
        <Button onClick={this.handleAlert}>Hide</Button>
        { this.state.successAlert
          ? <Alert variant='success'>Пост успешно создан!</Alert>
          : ''
        }
        {/* <Button onClick={() => this.state.setShow(false)}>Hide Alert</Button>
        <Alert variant='success' show={this.state.show}>
          Пост успешно создан!
        </Alert> */}
      </div>
    )
  }
}