import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
  useHistory
} from 'react-router-dom';
// import { createBrowserHistory } from 'history';
import Header from './Header';
import PostList from './Posts/PostList';
import PostPage from './PostPage';
import AddPost from './CRUD/AddPost';
import EditPost from './CRUD/EditPost';
import MainPage from './MainPage';

// const history = createBrowserHistory();

export default function MyRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/post/:postId">
          <PostPageDetail />
        </Route>
        <Route path="/edit-post/:postId">
          <EditPostPage />
        </Route>
        <Route exact path="/create-post">
          <AddPost />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

function PostPageDetail() {
  let { postId } = useParams();
  let history = useHistory();
  return (
    <PostPage params={postId} history={history} />
  )
}

function EditPostPage() {
  let { postId } = useParams();
  let history = useHistory();
  return (
    <EditPost params={postId} history={history} />
  )
}