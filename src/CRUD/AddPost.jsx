import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import config from '../config';

export default class AddPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      reward: '',
      successAlert: false
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
    axios.post(`${config.server}/save-contest`, this.state)
      .then(res => {
        console.log(res);
        this.setState({successAlert: true});
        this.setState({
          title: '',
          text: '',
          reward: ''
        })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">

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
                <Form.Label>Награда</Form.Label>
                <Form.Control
                  name="reward"
                  type="text"
                  value={this.state.reward}
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
              <Button as="input" type="submit" value="Сохранить" variant="success" />
            </Form>
            { this.state.successAlert
              ? <Alert variant='success'>Пост успешно создан!</Alert>
              : ''
            }

          </div>
        </div>
      </div>
    )
  }
}

