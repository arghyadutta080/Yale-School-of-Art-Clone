import './App.css';
import MainHome from './components/Home/MainHome';
import MainAbout from './components/MainAbout';
import MainApplication from './components/MainApplication';
import MainExhibition from './components/MainExhibition';
import MainPublication from './components/Publication/MainPublication';
import MainNews from './components/News/MainNews';
import Events from './components/Events';

import {
  BrowserRouter as Router,
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
          <Route exact path='/publication' element={<MainPublication />} />
          <Route exact path='/news' element={<MainNews />} />
          <Route exact path='/events' element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
