import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import config from '../config';
// import { Card, CardDeck } from 'react-bootstrap';

import Post from './Post';


export default class PostList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      somePosts: []
    }
  }

  componentDidMount() {
    axios.get(`${config.server}/contests`)
      .then(res => {
        // console.log(res.data)
        this.setState({ somePosts: res.data })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="row">
        { this.state.somePosts.map((post, index) => {
          return (
            <Post post={post} key={post._id} index={index} />
          )
        }) }
      </div>
    )
  }
}


        // { props.posts.map((post, index) => {
        //   return (
        //     <Post post={post} key={post.id} index={index} />
        //   )
        // }) }

// function PostList(props) {
//   return (
//     <ul>
//       { props.posts.map((post, index) => {
//         return (
//           <Post post={post} key={post.id} index={index} />
//         )
//       }) }
//     </ul>
//   )
// }

// PostList.propTypes = {
//   posts: PropTypes.arrayOf(PropTypes.object).isRequired
// }

// export default PostList



