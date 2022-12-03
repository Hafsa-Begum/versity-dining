import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import LoginSignUp from './pages/LoginSignUp/LoginSignUp';


function App() {
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="login" element={ <LoginSignUp/> } />
        <Route path="*" element={ <Error/> } />
      </Routes>
  );
}

export default App;
