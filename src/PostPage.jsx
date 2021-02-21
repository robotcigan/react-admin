// import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import config from './config';

function Post({ post, index }) {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={config.imgStorage + post.thumbnail} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
          <Card.Link href={`/post/${post._id}`}>Перейти</Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}


// Post.propTypes = {
//   post: PropTypes.object.isRequired,
//   index: PropTypes.number
// }

export default Post