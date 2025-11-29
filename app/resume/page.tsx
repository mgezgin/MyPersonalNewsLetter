import PrintButton from "@/components/PrintButton";

export default function ResumePage() {
    return (
        <div id="resume-content" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-purple-950">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800">
                <div className="absolute inset-0 bg-grid-white/10"></div>
                <div className="container mx-auto px-4 py-20 relative">
                    <div className="text-center text-white">
                        <div className="mb-6 inline-block">
                            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center text-6xl shadow-2xl">
                                👨‍💻
                            </div>
                        </div>
                        <h1 className="text-6xl font-bold mb-4 animate-fade-in">
                            Muslum Gezgin
                        </h1>
                        <p className="text-2xl mb-6 text-blue-100">Software Engineer</p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <a href="tel:+31638830211" className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all hover:scale-105">
                                📞 +31638830211
                            </a>
                            <a href="mailto:muslum_gezgin@hotmail.com" className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all hover:scale-105">
                                ✉️ muslum_gezgin@hotmail.com
                            </a>
                            <a href="https://linkedin.com/in/mgezgin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all hover:scale-105">
                                💼 LinkedIn
                            </a>
                            <a href="https://github.com/mgezgin" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all hover:scale-105">
                                💻 GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-950"></div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Profile */}
                <section className="mb-16">
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-shadow">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                                👤
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Profile</h2>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            As an experienced software engineer, I have a solid background in designing and implementing scalable solutions.
                            My passion for learning and staying updated with the latest technological developments drives my interest in cloud environments.
                            I am eager to contribute to projects and embrace new challenges in the field. Committed to excellence, I strive to deliver
                            high-quality work and continuously expand my expertise in the ever-evolving technology landscape.
                        </p>
                    </div>
                </section>

                {/* Skills */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl">
                            ⚡
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Skills & Technologies</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="group bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">💻</span> Programming Languages
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['C#', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'Python'].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-green-500 to-emerald-600 dark:from-green-600 dark:to-emerald-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🛠️</span> Frameworks & Tools
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['.NET', 'Azure', 'Docker', 'Kubernetes', 'Angular', 'React', 'Node.js'].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">☁️</span> Cloud & DevOps
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['Azure Functions', 'Cosmos DB', 'CI/CD', 'GitHub', 'Bitbucket', 'REST APIs'].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="group bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all hover:scale-105">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <span className="text-2xl">🗄️</span> Databases
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {['SQL Server', 'PostgreSQL', 'Cosmos DB', 'MongoDB'].map((skill) => (
                                    <span key={skill} className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/30 transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Employment History */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                            💼
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Employment History</h2>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

                        <div className="space-y-8">
                            {/* Shipcloud */}
                            <div className="relative pl-20">
                                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg">
                                    🚢
                                </div>
                                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Software Engineer</h3>
                                        <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-sm font-medium">
                                            Current
                                        </span>
                                    </div>
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Shipcloud, Rotterdam</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">June 2022 - Present</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        At Shipcloud, a logistics integration platform, I work on the core systems that handle shipment creation,
                                        delivery tracking, and cost calculations. I collaborate closely with internal teams to develop scalable and
                                        efficient solutions for high-load systems.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['C#', '.NET', 'Azure', 'REST APIs', 'Docker'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-lg text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Woonenzo */}
                            <div className="relative pl-20">
                                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
                                    🏠
                                </div>
                                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Software Engineer</h3>
                                    <p className="text-green-600 dark:text-green-400 font-semibold mb-2">Woonenzo</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">June 2022 - March 2024</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Introduced a new ERP solution project with Azure Functions, enabling event-driven architecture.
                                        Gained valuable experience with Azure Active Directory and automatic scaling solutions.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['.NET', 'C#', 'Docker', 'Kubernetes', 'Angular', 'Azure Functions', 'Cosmos DB'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Rhinion */}
                            <div className="relative pl-20">
                                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg">
                                    📊
                                </div>
                                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Software Engineer</h3>
                                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-2">Rhinion, Rotterdam</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">March 2019 - June 2020</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Worked on visualizing live platform data in dashboards and creating control functions for clients.
                                        Cooperated with data scientists to implement intricate business rules into back-end services.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java', 'TypeScript', 'React', 'C#', 'GitHub'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 rounded-lg text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Picult */}
                            <div className="relative pl-20">
                                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                                    🎓
                                </div>
                                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all hover:scale-[1.02]">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Software Engineer Intern</h3>
                                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-2">Picult, Amsterdam</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Feb 2018 - June 2018</p>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        Applied skills learned at Restart Network in a real project environment. Experimented with latest technologies
                                        and committed to writing high-quality code in a flexible, learning-focused environment.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {['Java', 'TypeScript', 'React', 'C#', 'GitHub'].map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-lg text-xs font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section className="mb-16">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                            🎓
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Education</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                                <div className="text-4xl mb-4">📚</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Full Stack Web Development</h3>
                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">Restart Network</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">September 2018 - May 2019</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Intensive tech training at GIC Rotterdam, six days a week, learning modern web development technologies.
                                </p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                            <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                                <div className="text-4xl mb-4">🎯</div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">Bachelor&apos;s Degree</h3>
                                <p className="text-green-600 dark:text-green-400 font-semibold mb-2">Sulayman Demirel University</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">September 2009 - June 2014 • Isparta, Turkey</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Developed critical thinking skills and foundational knowledge in technology and engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Button */}
                <div className="text-center">
                    <PrintButton />
                </div>
            </div>

            {/* Floating Contact Button */}
            <a
                href="mailto:muslum_gezgin@hotmail.com"
                className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform z-50"
                aria-label="Contact me"
            >
                ✉️
            </a>
        </div>
    );
}
