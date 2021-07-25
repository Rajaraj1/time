import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
