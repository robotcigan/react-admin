import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from 'react-router-dom';
import Header from './Header';
import PostList from './Posts/PostList';
import PostPage from './PostPage';
import AddPost from './CRUD/AddPost';

export default function MyRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <h1>Home page</h1>
            <div className="row">
              <PostList />
            </div>
          </div>
        </Route>
        <Route path="/post/:postId">
          <PostPageDetail />
        </Route>
        <Route exact path="/create-post">
          <AddPost />
        </Route>
        <Route exact path="/contact">
          <h1>Contacts</h1>
        </Route>
      </Switch>
    </Router>
  )
}

function PostPageDetail() {
  let { postId } = useParams();
  return (
    <PostPage params={postId} />
  )
}