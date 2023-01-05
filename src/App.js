import logo from './logo.svg';
import './App.css';
import MainHome from './components/MainHome';
import MainAbout from './components/MainAbout';

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      {/* <MainHome/> */}
      <Routes>
        <Route exact path='/' element={<MainHome/>}/> 
        <Route exact path='/about' element={<MainAbout/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
