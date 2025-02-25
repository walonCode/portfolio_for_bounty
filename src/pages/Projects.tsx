import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/project";

const Projects = () => {
    return (
        <div className="container flex flex-col items-center justify-center min-h-screen mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;