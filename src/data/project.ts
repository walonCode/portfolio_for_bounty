export interface Project {
    id:number,
    title: string,
    description:string,
    link:string
}

export const projects:Project[] = [
    { id: 1, title: "Portfolio Website", description: "A personal portfolio built with React and TailwindCSS.", link: "#" },
    { id: 2, title: "E-commerce Store", description: "A fully functional e-commerce platform using MERN stack.", link: "#" },
    { id: 3, title: "Blog CMS", description: "A blog content management system with authentication.", link: "#" },
    { id: 4, title: "Task Manager App", description: "A task management app with drag-and-drop functionality.", link: "#" },
    { id: 5, title: "Weather App", description: "A weather forecast app consuming an external API.", link: "#" },
    { id: 6, title: "Chat Application", description: "A real-time chat app using WebSockets.", link: "#" }
];