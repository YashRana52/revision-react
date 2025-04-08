import { Link } from 'react-router-dom';

export default function Home() {
    const projects = [
        {
            id: 1,
            name: 'E-commerce Website',
            description: 'A comprehensive e-commerce platform with user authentication, product listings, and payment integration.',
            imageUrl: 'https://images.unsplash.com/photo-1657812159075-7f0abd98f7b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZSUyMGNvbW1lcmNlJTIwd2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D',
            repoUrl: 'https://github.com/YashRana52/e-commerce-website',
            liveUrl: 'https://e-commerce-website-frontend-1pg8.onrender.com'
        },
        {
            id: 2,
            name: 'Instagram Clone',
            description: 'A clone of Instagram with features like photo uploads, likes, comments, and a follow system.',
            imageUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5zdHJhZ3JhbXxlbnwwfHwwfHx8MA%3D%3D',
            repoUrl: 'https://github.com/YashRana52/instragramclone',
            liveUrl: 'https://instragramcopy.onrender.com',
        },
        {
            id: 3,
            name: 'Netflix Clone',
            description: 'A front-end clone of Netflix displaying movie posters and trailers fetched from TMDb API.',
            imageUrl: 'https://images.unsplash.com/photo-1615986201152-7686a4867f30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5ldGZsaXh8ZW58MHx8MHx8fDA%3D',
            repoUrl: 'https://github.com/YashRana52/Netflix-',
        },
        {
            id: 4,
            name: 'Twitter Clone',
            description: 'An emulation of Twitter\'s primary features, including tweeting, following users, and a real-time feed.',
            imageUrl: 'https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHdpdHRlcnxlbnwwfHwwfHx8MA%3D%3D',
            repoUrl: 'https://github.com/YashRana52/twitter',
            liveUrl: 'https://twitter-mi9y.onrender.com',
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
