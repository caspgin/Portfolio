import './App.css';
import {
    Landing,
    Contact,
    Education,
    Projects,
    ComicBookLayout,
} from './pages';
function App() {
    return (
        <div className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
            <Landing />
            <Education />
            <ComicBookLayout />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
