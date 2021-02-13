import React from 'react';
import PropTypes from 'prop-types';

function Post({ post, index }) {
  return (
    <div>
      <p>{index + 1} {post.title}</p>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number
}

export default Post