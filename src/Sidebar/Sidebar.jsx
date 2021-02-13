import react from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item href="#1" action>Link 1</ListGroup.Item>
        <ListGroup.Item href="#2" action>Link 2</ListGroup.Item>
      </ListGroup>
    </div>
  )
}