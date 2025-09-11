import './App.css';
import { Landing, Experience, Contact } from './pages';
function App() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
			<Landing />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
