import Payday from './../components/Payday_entry.jsx';
import Terminal from './../components/Terminal_entry.jsx';
import Coming from './../components/comingsoon_entry.jsx';
function Projects() {
    return (
        <section id="project">
            <div className="title">
                <span>Experience</span>
                <span>&</span>
                <span>Projects</span>
            </div>
            <div className="list">
                <Payday />
                <Terminal />
                <Coming />
            </div>
        </section>
    );
}

export default Projects;
