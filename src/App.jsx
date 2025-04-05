import Landing from './pages/landing';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Projects from './pages/projects';
import './App.css';
function App() {
    return (
        <div className="app">
            <Landing />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
