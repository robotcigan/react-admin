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
      postList: []
    }
  }

  componentDidMount() {
    axios.get(`${config.server}/contests`)
      .then(res => {
        this.setState({ postList: res.data })
      })
      .catch(err => console.log(err))
  }

  // Обновляю postList при удалении нескольких постов
  static getDerivedStateFromProps(props, state) {
    if (props.refreshList.length) {
      let result = state.postList.filter(post => {
        for (let value of props.refreshList) {
          if (post._id === value) return false
        }
        return true
      });
      return { postList: result }
    } else return null
  }

  render() {
    return (
      <div className="row">
        { this.state.postList.map((post, index) => {
          return (
            <Post
              post={post}
              key={post._id}
              removeMultiple={this.props.removeMultiple}
              handleRemoveMultiple={this.props.handleRemoveMultiple} />
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



