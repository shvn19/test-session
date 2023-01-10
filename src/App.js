import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div className="App"> */}
          <Route path='/' element={<Login />} />
        {/* </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
