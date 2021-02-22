// import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../config';

function Post({ post, index }) {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        {post.thumbnail
          ? <Card.Img variant="top" src={config.imgStorage + post.thumbnail} />
          : ''
        }
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
          {/* <Card.Link href={`/post/${post._id}`}>Перейти</Card.Link> */}
          <Link className="card-link" to={`/post/${post._id}`}>Перейти</Link>
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