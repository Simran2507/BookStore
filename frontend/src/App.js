import NavBar from './components/NavBar';
import './App.css'
import Books from './pages/Books';
import Home from './pages/Home';
import AddBooks from './pages/AddBooks';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UpdateBook from './pages/UpdateBook';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/addBooks" element={<AddBooks/>} />
        <Route path="/update/:id" element={<UpdateBook/>} />
      </Routes>
    </Router>
  );
}

export default App;
