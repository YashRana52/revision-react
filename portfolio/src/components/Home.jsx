import { Link } from 'react-router-dom';

export default function Home() {
    const projects = [
        {
            id: 1,
            name: 'E-commerce Website',
            description: 'A comprehensive e-commerce platform with user authentication, product listings, and payment integration.',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20140402.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/e-commerce-website',
            liveUrl: 'https://e-commerce-website-frontend-1pg8.onrender.com'
        },
        {
            id: 2,
            name: 'Twitter Clone',
            description: 'An emulation of Twitter\'s primary features, including tweeting, following users, and a real-time feed.',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20142733.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/twitter',
            liveUrl: 'https://twitter-mi9y.onrender.com',
        },
        {
            id: 3,
            name: 'Blog with Ai integration',
            description: 'A modern blog platform with AI integration that lets users write, share, and explore blogs easily. Features include real-time publishing, user authentication, comment system, and smart AI tools like content suggestions',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20142733.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/Yash-Blog',
            liveUrl: 'https://yash-blog-zxoi.onrender.com',
        },
        {
            id: 4,
            name: 'Instagram Clone',
            description: 'A clone of Instagram with features like photo uploads, likes, comments, and a follow system.',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20141755.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/instragramclone',
            liveUrl: 'https://instragramcopy.onrender.com',
        },
        {
            id: 5,
            name: 'Youtube Clone',
            description: 'A YouTube clone with features like video uploads, likes, comments, and a follow system, allowing users to interact with content .',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20141303.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/Youtube',
            liveUrl: 'https://youtube-bt5z.onrender.com',
        },




        {
            id: 6,
            name: 'Image Search App',
            description: 'A dynamic and responsive web application that allows users to search for a variety of image by name.',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20142942.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/frontend-project/tree/main/Image%20search',
            liveUrl: 'https://search-img-e1tw.onrender.com',
        },
        {
            id: 7,
            name: 'Recipe App',
            description: 'A dynamic and responsive web application that allows users to search for a variety of recipes by name.',
            imageUrl: 'https://github.com/YashRana52/revision-react/blob/main/portfolio/src/assets/Screenshot%202025-04-16%20142858.png?raw=true',
            repoUrl: 'https://github.com/YashRana52/frontend-project/tree/main/Recipe',
            liveUrl: 'https://frontend-project-cyuv.onrender.com',
        },
    ];

    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="text-center text-3xl sm:text-5xl py-12 font-bold text-gray-800">🚀 Featured Projects</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6 sm:px-16">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white border rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="h-48 overflow-hidden rounded-t-2xl">
                            <img
                                src={project.imageUrl}
                                alt={project.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.name}</h2>
                            <p className="text-gray-600 text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-xl hover:opacity-90 transition"
                                >
                                    View on GitHub
                                </a>
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-xl hover:opacity-90 transition"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
