export default function About() {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-orange-50">
            <div className="container mx-auto px-6 md:px-12 xl:px-20">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Text Section */}
                    <div className="lg:w-7/12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            👋 Hi, I’m Yash Rana — A Passionate MERN Stack Developer 🚀
                        </h2>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            I'm a dedicated and enthusiastic Full Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I love building efficient, scalable, and user-friendly web applications.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            I’m currently pursuing my degree from <span className="font-semibold text-gray-900">Institute of Engineering and Technology (IET), Lucknow</span>, where I’m constantly exploring new technologies, working on real-world projects, and growing my skills as a software developer.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            My passion lies in creating clean UI, writing optimized backend APIs, and solving real-life problems through code. I’m always up for a challenge and love collaborating with like-minded developers.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            <span className="font-semibold">🛠️ Skills:</span> JavaScript, React.js, Node.js, Express.js, MongoDB, Git, Tailwind CSS, REST APIs, and more.
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed mb-4">
                            <span className="font-semibold">🎯 Hobbies:</span> Coding 💻 | Exploring new tech 🧠 | Problem solving 🧩 | Music 🎧
                        </p>

                        <p className="text-gray-700 text-lg leading-relaxed">
                            I'm actively looking for opportunities to grow as a developer and work on meaningful projects.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="lg:w-5/12 flex justify-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/113838314?v=4"
                            alt="Developer Yash Rana"
                            className="rounded-3xl w-72 h-72 object-cover shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
