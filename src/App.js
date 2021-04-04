import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import PostsPage from './components/PostsPage/PostsPage';
import NewPost from './components/NewPost/NewPost';
import ViewPost from './components/ViewPost/ViewPost';
import IdContext from './context/IdContext';
import PostEdit from './components/PostEdit/PostEdit';

function App() {
  const [create] = useState({id: null, content: null, created: null})

  return (
    <IdContext.Provider value={create}>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/posts/new" component={NewPost} />
            <Route path="/posts/edit" component={PostEdit} />
            <Route path="/posts/:id" component={ViewPost} />
            <Route path="/" component={PostsPage} />
          </Switch>
        </div>
      </Router>
    </IdContext.Provider>  
  );
}

export default App;
