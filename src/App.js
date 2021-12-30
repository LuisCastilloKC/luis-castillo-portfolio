import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home';
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './styles/Global';

const App = () => {
    return(
        <div className="app-container">
            <GlobalStyles />
        <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/#projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            {/* <About />
            <Projects /> */}
        </div>
    );
};

export default App;