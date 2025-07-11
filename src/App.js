import './App.css';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Homepage from './components/Homepage.js';
import Bookingpage from './components/Bookingpage.js';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<Bookingpage />} />
        </Routes>
      </>
  );
}

export default App;
