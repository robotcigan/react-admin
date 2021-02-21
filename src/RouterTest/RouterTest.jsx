import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PostList from '../Posts/PostList'

export default class RouterTest extends React.Component {
  render() {
    return (
      <Router>
         {/* <Link to={`/contests/${contest.id}`}>Some</Link> */}
         <Link to={`/contests/1`}>Some</Link>
         <Link to={`/contests/2`}>Some</Link>
         <Route exact={true} path="/" render={() => (
           <h1>You are welcome</h1>
         )}/>
         <Route path="/contests/:contestId" component={Gist}/>
         <PostList />
      </Router>
    )
  }
}

const Gist = ({ match }) => (
  <div>
    <h1>{match.params.contestId}</h1>
  </div>
)