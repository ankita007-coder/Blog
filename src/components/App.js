import {Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import PostDetail from './PostDetail'; 
import CreatePost from './CreatePost';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' component={Home}/>
        <Route exact path='/post/:postId' component={PostDetail}/>
        <Route exact path='/create-post' component={CreatePost}/>
      </Routes>
    </div>
  );
}

export default App;
