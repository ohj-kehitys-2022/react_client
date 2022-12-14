import './App.css';
import MyClass from './MyClass';
import MyFunction from './MyFunction';
import MyHook from './MyHook';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import BookList from './BookList';
import SelectedBook from './SelectedBook';

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
      
        <ul>
          <li> <Link to="/myfunction">Funktio esimerkki</Link> </li>
          <li> <Link to="/myclass">Class esimerkki</Link> </li>
          <li> <Link to="/myhook">Hooks esimerkki</Link>  </li>
          <li> <Link to="/login">Kirjaudu</Link>  </li>
          <li> <Link to="/booklist">Kirjat</Link>  </li>
        </ul>
        <hr />
      
      <Routes>
        <Route exact path="/myfunction" element={<MyFunction fname="Teppo"/>} />
        <Route exact path="/myclass" element={<MyClass fname="Teppo"/>} />
        <Route exact path="/myhook" element={<MyHook fname="Teppo"/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/booklist" element={<BookList/>} />
        <Route exact path="/booklist/selectedbook/:id" element={<SelectedBook/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
