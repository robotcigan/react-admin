import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import PostList from './Posts/PostList'
import PostPage from './Posts/Post'

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home page</h1>
          <PostList />
        </Route>
        <Route path="/post/:postId" children={<Test />} />
        <Route exact path="/about">
          <h1>About</h1>
        </Route>
        <Route exact path="/contact">
          <h1>Contacts</h1>
        </Route>
      </Switch>
    </Router>
  )
}

function Test() {
  let { postId } = useParams();

  return (
    <h1>some {postId}</h1>
  )
}