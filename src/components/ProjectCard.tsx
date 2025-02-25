import { Project } from "@/data/project";
import { Folder, ExternalLink } from "lucide-react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 p-5">
      {/* Header with Icon */}
      <div className="flex items-center gap-3">
        <Folder className="text-blue-600 dark:text-blue-400 w-6 h-6" />
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
        {project.description}
      </p>

      {/* Project Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-4 hover:underline"
      >
        View Project
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ProjectCard;
