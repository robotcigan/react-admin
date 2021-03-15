// import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import config from '../config';


function Post({ post, removeMultiple, handleRemoveMultiple }) {

  function handleTest(event) {
    if (event.target.checked) {
      handleRemoveMultiple(event.target.attributes.postid.value);
    }
  }

  return (
    <div className="col-md-4 mb-4">
      <Card>
        { removeMultiple === true &&
          <Form.Check postid={post._id} onChange={handleTest} type="checkbox" label="Выбрать" />
        }
        { post.thumbnail &&
          <Card.Img variant="top" src={config.imgStorage + post.thumbnail} />
        }
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.text}</Card.Text>
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