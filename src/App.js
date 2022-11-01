import logo from './images/Logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Body></Body>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
