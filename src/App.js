import logo from './logo.svg';
import './App.css';
import MainHome from './components/MainHome';
import MainAbout from './components/MainAbout';
import MainApplication from './components/MainApplication';
import MainExhibition from './components/MainExhibition';

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
        <Routes>
          <Route exact path='/' element={<MainHome />} />
          <Route exact path='/about' element={<MainAbout />} />
          <Route exact path='/apply' element={<MainApplication />} />
          <Route exact path='/exhibition' element={<MainExhibition />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
