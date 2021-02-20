// import './App.css';
import React from 'react'
import CRUD from './CRUD/CRUD'
import AddPost from './CRUD/AddPost'
import PostList from './Posts/PostList'
import Form from './Forms/FormTest'
import Sidebar from './Sidebar/Sidebar'

function App() {
  const posts = [
    { id: 1, title: 'Some one' },
    { id: 2, title: 'Some two' },
    { id: 3, title: 'Some three' }
  ]
  return (
    <div className="container">
      <h1>Admin panel</h1>
      <AddPost />
      <PostList />
      {/* <div className="row">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <CRUD />
          <PostList posts={posts} />
          <PostList />
          <Form />
        </div>
      </div> */}
    </div>
  );
}

export default App;
