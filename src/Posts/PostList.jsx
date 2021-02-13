import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';


function PostList(props) {
  return (
    <ul>
      { props.posts.map((post, index) => {
        return (
          <Post post={post} key={post.id} index={index} />
        )
      }) }
    </ul>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PostList