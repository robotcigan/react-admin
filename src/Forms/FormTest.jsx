import react from 'react';
import { Form, Button } from 'react-bootstrap';

export default function FormTest() {
  return (
    <div>
      <h3>Create post</h3>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Save</Button>
      </Form>
    </div>
  )
}