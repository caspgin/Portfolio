import './App.css';
import { Landing, Contact, Education, Projects } from './pages';
function App() {
	return (
		<div className="min-h-screen flex flex-col items-center bg-black relative overflow-hidden">
			<Landing />
			<Education />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
