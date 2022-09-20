import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/todolist-reactjs" element={<Home />} />
                    <Route path="/todolist-reactjs/about" element={<About />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
