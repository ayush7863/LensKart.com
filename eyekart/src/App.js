// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Signin from './Navbar/Signin';
import Signup from './Navbar/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar/>}>  </Route>
        <Route path="/signin" element={<Signin/>}>  </Route>
        <Route path="/signup" element={<Signup/>}>  </Route>
      </Routes>
      {/* <Navbar/> */}
      {/* <Signup/> */}

    </div>
  );
}

export default App;
