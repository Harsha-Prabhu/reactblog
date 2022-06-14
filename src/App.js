import Navbar from './Navbar'
import Home from './Home';
import BlogDetails from './BlogDetails';
import Create from './Create';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={< Home />}/>
            <Route exact path='/create' element={< Create />}/>
            <Route exact path='/blogs/:id' element={< BlogDetails />}/>
            <Route exact path='*' element={< NotFound />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
